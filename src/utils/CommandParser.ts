// To parse the input string into structured data. Returns and object containing the plateau size and an array of rover commands.

export const parseCommands = (input: string): { plateau: string, roversCommands: string[] } => {
  const lines = input.trim().split('\n').map(line => line.trim()).filter(line => line);

  if (lines.length < 3 || lines.length % 2 !== 1) {
    throw new Error('Invalid input format.');
  }

  const plateau = lines[0];
  if (!/^\d+\s\d+$/.test(plateau)) {
    throw new Error('Invalid plateau format.');
  }

  const roversCommands = lines.slice(1);
  for (let i = 0; i < roversCommands.length; i += 2) {
    const roverCommands = roversCommands[i + 1];

    if (!/^\d+\s\d+\s[NESW]$/.test(roversCommands[i])) {
      throw new Error('Invalid rover position format.');
    }

    if (!/^[LRM]+$/u.test(roverCommands)) {
      throw new Error('Invalid rover command format.');
    }
  }

  return { plateau, roversCommands };
}