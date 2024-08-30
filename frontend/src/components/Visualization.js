import React from 'react';

function Visualization({ output, executionTime }) {
  return (
    <div>
      <h2>Execution Output</h2>
      {output && (
        <div className="output">
          <strong>Output:</strong>
          <pre>{output}</pre>
          <p>Execution Time: {executionTime} seconds</p>
        </div>
      )}
    </div>
  );
}

export default Visualization;
