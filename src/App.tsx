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
      <InputForm className="App-input" onSubmit={handleSubmit} />
      {error && <div className="App-error">{error}</div>}
      <Output className="App-output" results={output} />
    </div>
  );
}

export default App;
