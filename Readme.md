# Project: Python Backend and React Frontend
## Overview
This project showcases a simple setup using Python for the backend with Flask and React for the frontend.

## Prerequisites
Node.js or nvm (for npm)
Python (preferably Python 3.x)
IDE or Text Editor (e.g., Visual Studio Code, PyCharm)

## Clone the Repository:
```
git clone https://github.com/Kokagi-sama/HelloReceive.git
```

## Easy Setup
Run the batch file `setup_backend.bat`, then proceed with `setup_frontend.bat`

## Manual Setup
### Backend (Python Flask)
1. Go to the directory where you have cloned the repository.

2. Setup Python Virtual Environment at root directory:
```
python -m venv .venv
.venv\Scripts\activate 
```

3. Install Python Dependencies:
```
pip install -r requirements.txt
```

4. Run the Flask Server:
```
python server.py
```

#### Note: The Flask server will start running at http://localhost:5000.

### Frontend (React)
1. Navigate to the Frontend Directory:
```
cd my-react-app
```

2. Install Node Modules:
```
npm install
```

3. Start the React Development Server:
```
npm start
```

#### Note: The React development server will start at http://localhost:3000

## Usage:
Click on Send "hello" from the frontend, the backend will respond with received and the frontend will proceed to display the "received" message
