@echo off
echo Starting HomeSeek Website...

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Start development server
echo.
echo Starting dev server on http://localhost:3000
echo Press Ctrl+C to stop
call npm run dev

pause
