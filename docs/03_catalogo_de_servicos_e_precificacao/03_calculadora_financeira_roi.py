# -*- coding: utf-8 -*-
"""
Calculadora Financeira & Simulador de Retorno sobre Investimento (ROI)
Consultoria de Negócios e Tecnologia com IA — Alex Souza

Permite simular:
1. Precificação de propostas personalizadas (Kickstarts, Retainers e Enterprise)
2. Retorno sobre Investimento (ROI) e Payback para o cliente (horas economizadas vs custo)
3. Projeção de Faturamento Mensal, Custos de Nuvem/APIs e Lucro Líquido
"""

import argparse
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


SERVICES_CATALOG = {
    "1": {"nome": "Bot & Atendimento Inteligente IA (WhatsApp/Omnichannel)", "prazo": "5-10 dias", "preco": 7200.0, "tipo": "PONTUAL", "custo_nuvem": 180.0},
    "2": {"nome": "Prototipagem Ágil & MVP Express", "prazo": "10-14 dias", "preco": 9800.0, "tipo": "PONTUAL", "custo_nuvem": 200.0},
    "3": {"nome": "Modern Data Stack & Dashboard Executivo", "prazo": "7-10 dias", "preco": 8500.0, "tipo": "PONTUAL", "custo_nuvem": 150.0},
    "4": {"nome": "Integração & Refatoração de Legado", "prazo": "7-12 dias", "preco": 7900.0, "tipo": "PONTUAL", "custo_nuvem": 120.0},
    "5": {"nome": "CRM Comercial & Atendimento sob Medida", "prazo": "20-25 dias", "preco": 22000.0, "tipo": "PONTUAL", "custo_nuvem": 350.0},
    "6": {"nome": "ERP Operacional sob Medida", "prazo": "30-45 dias", "preco": 38000.0, "tipo": "PONTUAL", "custo_nuvem": 450.0},
    "7": {"nome": "Retainer: Curadoria & Suporte de Bot IA", "prazo": "Mensal", "preco": 2800.0, "tipo": "MENSAL", "custo_nuvem": 120.0},
    "8": {"nome": "Retainer: Growth, Mídia & Tráfego IA", "prazo": "Mensal", "preco": 5500.0, "tipo": "MENSAL", "custo_nuvem": 250.0},
    "9": {"nome": "Retainer: Tech Lead & Data Advisory", "prazo": "Mensal", "preco": 9500.0, "tipo": "MENSAL", "custo_nuvem": 320.0},
    "10": {"nome": "Retainer: Enterprise Fractional CTO", "prazo": "Mensal", "preco": 15000.0, "tipo": "MENSAL", "custo_nuvem": 450.0},
    "11": {"nome": "Workshop Executivo IA (4h)", "prazo": "1 dia", "preco": 3800.0, "tipo": "PONTUAL", "custo_nuvem": 50.0},
    "12": {"nome": "Capacitação In-Company Completa (16h)", "prazo": "4 semanas", "preco": 8500.0, "tipo": "PONTUAL", "custo_nuvem": 100.0},
}


def calcular_roi_cliente(salario_medio_equipe: float, funcionarios_impactados: int, horas_economizadas_semana: float, investimento_projeto: float):
    """
    Calcula quanto o cliente economiza em folha/hora com a automação ou sistema implementado.
    """
    custo_hora = salario_medio_equipe / 160.0  # ~160 horas úteis por mês
    horas_mes = horas_economizadas_semana * 4.33
    economia_mensal = custo_hora * funcionarios_impactados * horas_mes
    
    payback_meses = investimento_projeto / economia_mensal if economia_mensal > 0 else 999.0
    roi_anual = ((economia_mensal * 12.0) - investimento_projeto) / investimento_projeto * 100.0 if investimento_projeto > 0 else 0.0

    print("\n" + "=" * 65)
    print("📈 SIMULAÇÃO DE ROI & PAYBACK PARA O CLIENTE")
    print("=" * 65)
    print(f"• Funcionários impactados pela solução: {funcionarios_impactados}")
    print(f"• Salário médio considerado: R$ {salario_medio_equipe:,.2f} (R$ {custo_hora:.2f}/hora)")
    print(f"• Tempo economizado: {horas_economizadas_semana:.1f}h por pessoa/semana ({horas_mes:.1f}h/mês)")
    print(f"• Economia financeira direta estimada: R$ {economia_mensal:,.2f} / mês (R$ {economia_mensal * 12:,.2f} / ano)")
    print(f"• Investimento total no projeto: R$ {investimento_projeto:,.2f}")
    print(f"• PAYBACK DO CLIENTE: {payback_meses:.1f} meses para se pagar integralmente!")
    print(f"• RETORNO SOBRE O INVESTIMENTO (ROI 1º ANO): {roi_anual:.1f}%")
    print("=" * 65)
    return economia_mensal, payback_meses, roi_anual


def simular_cenario_consultoria(qtd_retainer_tech: int, qtd_retainer_growth: int, qtd_retainer_bots: int, qtd_mvp_mes: int, qtd_bots_mes: int, qtd_workshops_mes: int):
    """
    Calcula a receita bruta, custos e lucro líquido mensal da operação de Alex Souza.
    """
    faturamento_bruto = (
        (qtd_retainer_tech * 9500.0) +
        (qtd_retainer_growth * 5500.0) +
        (qtd_retainer_bots * 2800.0) +
        (qtd_mvp_mes * 9800.0) +
        (qtd_bots_mes * 7200.0) +
        (qtd_workshops_mes * 3800.0)
    )

    custos_nuvem_apis = (
        (qtd_retainer_tech * 320.0) +
        (qtd_retainer_growth * 250.0) +
        (qtd_retainer_bots * 120.0) +
        (qtd_mvp_mes * 200.0) +
        (qtd_bots_mes * 180.0) +
        (qtd_workshops_mes * 50.0)
    )

    impostos_simples = faturamento_bruto * 0.06  # Alíquota média 6% Simples Nacional / Anexo III com Fator R
    reserva_operacional = faturamento_bruto * 0.05  # 5% fundo de reserva

    lucro_liquido = faturamento_bruto - custos_nuvem_apis - impostos_simples - reserva_operacional
    margem_liquida = (lucro_liquido / faturamento_bruto * 100.0) if faturamento_bruto > 0 else 0.0

    print("\n" + "=" * 65)
    print("💰 PROJEÇÃO MENSAL DA CONSULTORIA — ALEX SOUZA TECH & IA")
    print("=" * 65)
    print(f"• Contratos Retainer Tech Lead (R$ 9.5k): {qtd_retainer_tech} cliente(s) = R$ {qtd_retainer_tech * 9500:,.2f}")
    print(f"• Contratos Retainer Growth/Tráfego (R$ 5.5k): {qtd_retainer_growth} cliente(s) = R$ {qtd_retainer_growth * 5500:,.2f}")
    print(f"• Contratos Retainer Curadoria Bots (R$ 2.8k): {qtd_retainer_bots} cliente(s) = R$ {qtd_retainer_bots * 2800:,.2f}")
    print(f"• Projetos MVP Express no mês (R$ 9.8k): {qtd_mvp_mes} projeto(s) = R$ {qtd_mvp_mes * 9800:,.2f}")
    print(f"• Setups de Bots de Atendimento (R$ 7.2k): {qtd_bots_mes} projeto(s) = R$ {qtd_bots_mes * 7200:,.2f}")
    print(f"• Workshops / Capacitações no mês (R$ 3.8k): {qtd_workshops_mes} evento(s) = R$ {qtd_workshops_mes * 3800:,.2f}")
    print("-" * 65)
    print(f"💎 FATURAMENTO BRUTO TOTAL: R$ {faturamento_bruto:,.2f} / mês")
    print(f"☁️ Custos de Nuvem, APIs e Servidores: R$ {custos_nuvem_apis:,.2f}")
    print(f"🏛️ Estimativa de Impostos (Simples 6%): R$ {impostos_simples:,.2f}")
    print(f"🛡️ Fundo de Reserva e Ferramentas (5%): R$ {reserva_operacional:,.2f}")
    print("-" * 65)
    print(f"🚀 LUCRO LÍQUIDO MENSAL: R$ {lucro_liquido:,.2f}")
    print(f"📊 MARGEM LÍQUIDA REAL: {margem_liquida:.1f}%")
    print("=" * 65)
    return lucro_liquido


def main():
    print("=" * 65)
    print("  SIMULADOR FINANCEIRO & ROI — ALEX SOUZA TECH & IA")
    print("=" * 65)
    print("\n[Exemplo 1] Simulação de ROI para Apresentar em Proposta Comercial:")
    calcular_roi_cliente(
        salario_medio_equipe=4500.0,
        funcionarios_impactados=3,
        horas_economizadas_semana=6.0,
        investimento_projeto=9800.0
    )

    print("\n[Exemplo 2] Cenário Realista de Operação Mensal da Consultoria (Com Bots):")
    simular_cenario_consultoria(
        qtd_retainer_tech=2,     # 2 clientes fixos de tech lead (R$ 19.000)
        qtd_retainer_growth=1,   # 1 cliente fixo de tráfego/mídia (R$ 5.500)
        qtd_retainer_bots=2,     # 2 clientes com curadoria contínua de bot (R$ 5.600)
        qtd_mvp_mes=1,           # 1 MVP express entregue no mês (R$ 9.800)
        qtd_bots_mes=1,          # 1 setup de bot entregue no mês (R$ 7.200)
        qtd_workshops_mes=1      # 1 workshop corporativo (R$ 3.800)
    )


if __name__ == "__main__":
    main()
