@echo off
echo Setting up and running the backend...

:: Create a virtual environment
python -m venv .venv

:: Activate the virtual environment
call .venv\Scripts\activate

:: Install the dependencies
pip install -r requirements.txt

:: Run the Flask server
python server.py

pause
