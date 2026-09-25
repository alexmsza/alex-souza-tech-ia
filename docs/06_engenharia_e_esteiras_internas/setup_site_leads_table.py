# -*- coding: utf-8 -*-
"""
Script de Criação e Homologação da Tabela de Leads no Supabase
Sousza Consultoria Inteligente — Alex Souza
Execução: uv run --with psycopg[binary] python setup_site_leads_table.py
"""

import os
import sys

def load_env():
    # Carrega .env do diretório corrente ou do workspace
    env_paths = [
        os.path.join(os.getcwd(), ".env"),
        os.path.join(os.path.dirname(__file__), ".env"),
        os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), ".env")
    ]
    for f in env_paths:
        if os.path.exists(f):
            with open(f, "r", encoding="utf-8") as ef:
                for line in ef:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        k, v = line.split("=", 1)
                        k = k.strip()
                        v = v.strip().strip("'").strip('"')
                        if k not in os.environ and v:
                            os.environ[k] = v

load_env()
db_url = os.environ.get("DIRECT_URL") or os.environ.get("DATABASE_URL")

if not db_url:
    print("[ERRO] DATABASE_URL ou DIRECT_URL não encontrada no ambiente (.env).")
    sys.exit(1)

try:
    import psycopg
except ImportError:
    try:
        import psycopg2 as psycopg
    except ImportError:
        print("[ERRO] psycopg não instalado. Execute com: uv run --with psycopg[binary] python setup_site_leads_table.py")
        sys.exit(1)

print("[1/3] Conectando ao PostgreSQL do Supabase...")
with psycopg.connect(db_url, autocommit=True) as conn:
    with conn.cursor() as cur:
        print("[2/3] Criando ou atualizando a tabela public.site_contatos_leads...")
        cur.execute("""
            CREATE TABLE IF NOT EXISTS public.site_contatos_leads (
                id BIGSERIAL PRIMARY KEY,
                created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                empresa VARCHAR(255) NOT NULL,
                whatsapp VARCHAR(50) NOT NULL,
                interesse VARCHAR(100) NOT NULL,
                gargalo TEXT,
                origem VARCHAR(50) DEFAULT 'sousza_consultoria_inteligente_web' NOT NULL,
                status VARCHAR(50) DEFAULT 'NOVO' NOT NULL,
                metadata JSONB DEFAULT '{}'::jsonb
            );

            CREATE INDEX IF NOT EXISTS idx_site_leads_created_at ON public.site_contatos_leads(created_at DESC);
            CREATE INDEX IF NOT EXISTS idx_site_leads_whatsapp ON public.site_contatos_leads(whatsapp);

            ALTER TABLE public.site_contatos_leads ENABLE ROW LEVEL SECURITY;

            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 FROM pg_policies 
                    WHERE tablename = 'site_contatos_leads' AND policyname = 'Permitir insercao anonima de leads'
                ) THEN
                    CREATE POLICY "Permitir insercao anonima de leads"
                    ON public.site_contatos_leads
                    FOR INSERT
                    TO anon, authenticated
                    WITH CHECK (true);
                END IF;
            END $$;
        """)

        print("[3/3] Validando estrutura da tabela...")
        cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'site_contatos_leads';")
        cols = cur.fetchall()
        print("\nColunas homologadas no banco:")
        for c in cols:
            print(f" - {c[0]} ({c[1]})")

print("\n[SUCESSO] Tabela public.site_contatos_leads validada e operacional!")
