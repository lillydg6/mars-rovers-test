# PROBLEM: MARS ROVERS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For the most relevant code parts and the solution to the question, check out the files in `src/app/models`, `src/app/utils`, `src/app/service`:
- `Rover.ts`: This file defines a Rover class with methods to move it on a plateau based on input commands.
- `CommandParser.ts`: This file takes the raw text input to extract plateau size and rover commands.It also performs various validations on the input.
- `RoverService.ts`: This file is a service class that processes commands for multiple rovers on a plateau and returns their final positions.

## Directions for Running Locally

In the project directory:

1. Run the app in the development mode with: `npm start`
2. Open the browser of your choice and navigate to [http://localhost:3000](http://localhost:3000)


## Test Input:
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

## Expected Output:

```
1 3 N
5 1 E
```