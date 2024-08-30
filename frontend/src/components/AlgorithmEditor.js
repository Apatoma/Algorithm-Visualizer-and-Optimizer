import React, { useState } from 'react';

function AlgorithmEditor({ onExecute, onOptimize }) {
  const [code, setCode] = useState('');
  const [inputData, setInputData] = useState('');

  const handleExecute = () => {
    onExecute(code, inputData);
  };

  const handleOptimize = () => {
    onOptimize(code);
  };

  return (
    <div>
      <h2>Write Your Algorithm</h2>
      <textarea
        placeholder="Write your algorithm here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Input data (JSON format)"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleExecute}>Execute</button>
      <button onClick={handleOptimize}>Optimize</button>
    </div>
  );
}

export default AlgorithmEditor;
