from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r'/*': {'origins': '*'}})
from routes import *
app.config['UPLOAD_FOLDER'] ='backend/static/images'

if __name__ == "__main__":
    app.run(debug=True)
    