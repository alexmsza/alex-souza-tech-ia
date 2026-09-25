# -*- coding: utf-8 -*-
"""
Servidor Local de Teste e Visualização — Site Institucional Alex Souza Tech & IA
Inicia um servidor web HTTP local e abre automaticamente a página no navegador.
"""

import http.server
import os
import socketserver
import sys
import webbrowser

PORT = 5500
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 65)
        print("🚀 SITE INSTITUCIONAL — ALEX SOUZA TECH & IA")
        print(f"📡 Servidor ativo em: {url}")
        print("💡 Pressione CTRL+C no terminal para encerrar.")
        print("=" * 65)
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[INFO] Servidor local encerrado com sucesso.")

if __name__ == "__main__":
    start_server()
