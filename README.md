# microsoft-engage-college-plus

## Setup
- Make sure Python 3.5+ is installed
- Setup a vitual environment called 'env' in the current directory
    - ```python3 -m venv env``` on macOS and Linux
    - ```py -m venv env``` on Windows
- Start the virtual environment
    - ```source env/bin/activate``` on macOS and Linux
    - ```.\env\Scripts\activate``` on Windows
- Install the necessaty packages
    - ```pip install -r requirements.txt```
- Create the required models
    - ```python3 manage.py make migrations``` 
- Migrate the chages 
    - ```python3 manage.py migrate```
 - Run the backend 
    - ```python3 manage.py runserver```
 It will host the backend on http://127.0.0.1:8000/
 
 Now to Set the forntend, on a different terminal  
 - Enter inside the front end folder 
    - ```cd frontend ```
 - Install the required dependencies 
    - ```npm install```
 -  Start the frontend server 
    - ``` npm start ```
 - the application will run at http://localhost:3000/login
 
