@echo off
title SmartBill Pro - DEMO
echo ============================================
echo   SmartBill Pro - DEMO (no backend needed)
echo ============================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed on this computer.
    echo Install it from https://nodejs.org and run this file again.
    echo.
    pause
    exit /b 1
)

echo Starting demo at http://localhost:5050 ...
start "" http://localhost:5050
node "%~dp0serve.cjs"
pause
