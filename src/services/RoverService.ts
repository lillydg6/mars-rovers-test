import Rover from '../models/Rover';

class RoverService {
  processCommands(plateau: string, roversCommands: string[]): string[] {
    const results: string[] = [];

    const [width, height] = plateau.split(' ').map(Number);

    for (let i = 0; i < roversCommands.length; i += 2) {
      const [x, y, direction] = roversCommands[i].split(' ');
      const commands = roversCommands[i + 1];
      const rover = new Rover(parseInt(x), parseInt(y), direction as 'N' | 'E' | 'S' | 'W', { width, height });
      rover.executeCommands(commands);
      results.push(rover.getPosition());
    }

    return results;
  }
}

export default RoverService;
