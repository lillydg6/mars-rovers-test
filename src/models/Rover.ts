type Direction = 'N' | 'E' | 'S' | 'W';

interface Position {
  x: number;
  y: number;
  direction: Direction;
}

class Rover {
  private position: Position;
  private plateau: { width: number; height: number };

  constructor(x: number, y: number, direction: Direction, plateau: { width: number; height: number }) {
    this.position = { x, y, direction };
    this.plateau = plateau;
  }

  private turnLeft() {
    const directions: Direction[] = ['N', 'W', 'S', 'E'];
    this.position.direction = directions[(directions.indexOf(this.position.direction) + 1) % 4];
  }

  private turnRight() {
    const directions: Direction[] = ['N', 'E', 'S', 'W'];
    this.position.direction = directions[(directions.indexOf(this.position.direction) + 1) % 4];
  }

private moveForward() {
  const { x, y } = this.position;
  const { width, height } = this.plateau;

  let newX = x;
  let newY = y;

  switch (this.position.direction) {
    case 'N':
      newY++;
      break;
    case 'E':
      newX++;
      break;
    case 'S':
      newY--;
      break;
    case 'W':
      newX--;
      break;
  }

  if (newX < 0 || newX > width || newY < 0 || newY > height) {
    throw new Error('The rover has gone out of bounds!');
  }

  this.position.x = newX;
  this.position.y = newY;
}

  public executeCommands(commands: string) {
    for (const command of commands) {
      switch (command) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.moveForward();
          break;
      }
    }
  }

  public getPosition(): string {
    return `${this.position.x} ${this.position.y} ${this.position.direction}`;
  }
}

export default Rover;
