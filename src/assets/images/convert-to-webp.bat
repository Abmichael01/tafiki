@echo off
setlocal enabledelayedexpansion

:: Use the directory where this script is located as working directory
cd /d "%~dp0"

echo Converting .png and .jpg files to .webp in "%CD%"...

:: Loop through .png files
for %%F in (*.png) do (
    echo Converting "%%F"...
    cwebp "%%F" -o "%%~nF.webp"
    if exist "%%~nF.webp" (
        del "%%F"
        echo Deleted "%%F"
    ) else (
        echo Failed to convert "%%F"
    )
)

:: Loop through .jpg and .jpeg files
for %%F in (*.jpg *.jpeg) do (
    echo Converting "%%F"...
    cwebp "%%F" -o "%%~nF.webp"
    if exist "%%~nF.webp" (
        del "%%F"
        echo Deleted "%%F"
    ) else (
        echo Failed to convert "%%F"
    )
)


echo.
echo ✅ All conversions done in "%CD%"!
pause
