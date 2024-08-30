import React, { useState } from 'react';
import AlgorithmEditor from './components/AlgorithmEditor';
import Visualization from './components/Visualization';
import OptimizationSuggestions from './components/OptimizationSuggestions';

function App() {
  const [output, setOutput] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const executeAlgorithm = async (code, inputData) => {
    const response = await fetch('http://localhost:5000/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, input_data: inputData }),
    });
    const result = await response.json();
    setOutput(result.result);
    setExecutionTime(result.execution_time);
  };

  const optimizeCode = async (code) => {
    const response = await fetch('http://localhost:5000/optimize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const result = await response.json();
    setSuggestions(result);
  };

  return (
    <div>
      <h1>Algorithm Visualizer and Optimizer</h1>
      <AlgorithmEditor onExecute={executeAlgorithm} onOptimize={optimizeCode} />
      <Visualization output={output} executionTime={executionTime} />
      <OptimizationSuggestions suggestions={suggestions} />
    </div>
  );
}

export default App;
