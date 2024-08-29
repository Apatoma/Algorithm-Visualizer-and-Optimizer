import time

def execute_algorithm(code, input_data):
    try:
        # Prepare environment for execution
        exec_globals = {}
        exec_locals = {}
        exec(code, exec_globals, exec_locals)

        # Execute the main function with input data
        start_time = time.time()
        result = exec_locals['main'](input_data)
        end_time = time.time()

        execution_time = end_time - start_time

        return {'result': result, 'execution_time': execution_time}
    except Exception as e:
        return {'error': str(e)}
