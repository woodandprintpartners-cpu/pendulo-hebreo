@echo off
chcp 65001 >nul
title Publicar Pendulo Hebreo en GitHub
echo ======================================================================
echo   🚀 PUBLICAR EN GITHUB / GITHUB PAGES (ONLINE 24/7 EN INTERNET)
echo ======================================================================
echo.
echo Este asistente subira la web a un repositorio de GitHub para que tu mujer
echo pueda abrirla en el movil desde cualquier lugar aunque el PC este apagado.
echo.
set "PATH=%PATH%;C:\Users\herri\AppData\Local\MinGit\cmd"

echo 1. Comprobando conexion con GitHub...
gh auth status >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo No has iniciado sesion en GitHub todavia.
    echo A continuacion se abrira tu navegador para autorizar con tu cuenta de GitHub.
    echo.
    gh auth login -w -p https
    if %errorlevel% neq 0 (
        echo Error al iniciar sesion. Intentalo de nuevo.
        pause
        exit /b
    )
)

echo.
echo 2. Preparando repositorio y guardando cambios...
git init
git branch -m main
git add .
git commit -m "Formacion Esencial de Pendulo Hebreo - Version Completa"

echo.
echo 3. Creando o actualizando repositorio en tu GitHub...
gh repo create pendulo-hebreo --public --source=. --remote=origin --push
if %errorlevel% neq 0 (
    echo El repositorio ya existe o hubo un aviso. Intentando push directo...
    git push -u origin main
)

echo.
echo 4. Activando GitHub Pages para tener web publica en internet...
gh repo edit --enable-pages --pages-branch main

echo.
echo ======================================================================
echo   🎉 ¡PUBLICACION COMPLETADA CON EXITO!
echo ======================================================================
echo.
echo Tu repositorio ya esta online en tu cuenta de GitHub.
echo En 1 o 2 minutos, tu pagina web estara activa en la direccion de GitHub Pages.
echo.
pause
