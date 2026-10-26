import http.server
import socketserver
import socket
import webbrowser
import os
import sys
import urllib.request

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

def update_qr(ip):
    url = f"http://{ip}:{PORT}"
    qr_api = f"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data={url}"
    qr_path = os.path.join(DIRECTORY, "qr_movil.png")
    try:
        req = urllib.request.Request(qr_api, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=3) as resp:
            with open(qr_path, "wb") as f:
                f.write(resp.read())
    except Exception:
        pass

def update_html(ip):
    html_path = os.path.join(DIRECTORY, "compartir_movil.html")
    if os.path.exists(html_path):
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                content = f.read()
            import re
            content = re.sub(r'http://\d+\.\d+\.\d+\.\d+:\d+', f'http://{ip}:{PORT}', content)
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(content)
        except Exception:
            pass

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == '__main__':
    local_ip = get_local_ip()
    update_qr(local_ip)
    update_html(local_ip)

    print("========================================================================")
    print(" 📱 SERVIDOR DE PÉNDULO HEBREO INICIADO PARA EL TELÉFONO MÓVIL")
    print("========================================================================")
    print(f"\n1. Conecta tu móvil a la misma red Wi-Fi de esta casa.")
    print(f"2. Abre el navegador en tu móvil (Safari, Chrome) y entra en:")
    print(f"\n      👉   http://{local_ip}:{PORT}   👈\n")
    print(f"O simplemente ESCANEA el código QR que se abrirá en la pantalla.")
    print("========================================================================")
    print("(Para salir y apagar el servidor, cierra esta ventana)")
    print("========================================================================\n")

    # Abrir la pantalla con el QR en el PC
    webbrowser.open(f"http://localhost:{PORT}/compartir_movil.html")

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
            sys.exit(0)
