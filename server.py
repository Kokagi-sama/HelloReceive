from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/message', methods=['POST'])
def receive_message():
    data = request.get_json()
    message = data.get('message')

    if message == 'hello':
        response = {'response': 'received'}
        return jsonify(response), 200
    else:
        return jsonify({'error': 'Invalid message'}), 400

if __name__ == '__main__':
    app.run(debug=True)
    

