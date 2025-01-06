from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/data', methods=['GET'])
def get_data():
    # Example: Respond with some sample data
    return jsonify({'message': 'Hello from Flask!'})

@app.route('/api/data', methods=['POST'])
def post_data():
    # Receive data from React frontend
    data = request.json
    response = {'received': data}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Backend runs on localhost:5000
