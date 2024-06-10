import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Output from './components/Output';
import RoverService from './services/RoverService';
import { parseCommands } from './utils/CommandParser';

function App() {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (input: string) => {
    try {
      const { plateau, roversCommands } = parseCommands(input);
      const roverService = new RoverService();
      const results = roverService.processCommands(plateau, roversCommands);
      setOutput(results);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setOutput([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mars Rovers
        </h1>
      </header>
      <div className="App-body">
      <InputForm className="App-input" onSubmit={handleSubmit} error={error} />
      <span className="App-label">Final coords and directions:</span>
      <Output className="App-output" results={output} />
      </div>
    </div>
  );
}

export default App;
