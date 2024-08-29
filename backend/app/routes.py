from flask import request, jsonify
from app import app
from app.algorithm_executor import execute_algorithm
from app.optimizer import suggest_optimizations

@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code', '')
    input_data = data.get('input_data', {})
    result = execute_algorithm(code, input_data)
    return jsonify(result)

@app.route('/optimize', methods=['POST'])
def optimize_code():
    data = request.json
    code = data.get('code', '')
    suggestions = suggest_optimizations(code)
    return jsonify(suggestions)
