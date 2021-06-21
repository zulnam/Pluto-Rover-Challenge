# New Horizon Rover Challenge

## Table of Contents
[Introduction](#intro)
[Disclaimer](#disclaimer)
[Features](#features)
[Grid Example](#gridExample)
[Script Commands](#scriptCommands)
[Debugging](#debugging)

## <a id="intro">Introduction</a>

The purpose of this task is to successfully land and control a rover on the surface of Pluto using two Telerobotics principles (visual feedback and data compression). Tech stack for this mission is ReactJS along with node-sass for light control room styling.


## <a id="disclaimer">Disclaimer</a>
While the code here is functional, myself, Facebook or ReactJS are not responsible for any lost or broken rovers. Please fly space missions responsibly, using multi-threaded and compiled languages.

## <a id="Features">Features</a>

- The New Horizon Rover (here-on "NHR") will always land at 0 0 N
- NHR can receive and execute four commands:
-- F = move forward;
-- B = move backward;
-- L = turn left 90º;
-- R = turn right 90º;
- NHR can be controlled both by on-screen buttons as well as their respective keyboard buttons;
- All commands sent are logged in the Command Log;
- NHR will hold position when faced with an obstacle;
- NHR will send warning message when holding position due to obstacle.

## <a id="gridExample">Grid Example</a>
|  |  |  |
|--|--|--|
|Y,0|2,1|2,2|
|1,0|1,1|1,2|
|0,0|0,1|0,X|



## <a id="scriptCommands">Script Commands</a>

All commands need to be run in the root folder of the project

	yarn

Loads all required libraries.

---

	yarn start

Starts the Rover Simulator locally, at `http://localhost:3000/`.

---

	yarn build

Builds production-ready files for deploying via the pipeline (no pipeline yet)

---

	yarn clean

Deletes the `build` and `node_modules` folders.

---

	yarn test

Runs all unit tests and generates coverage report.

---

	yarn eject

Removes the react-script boilerplate and switches to standard configs (webpack, node etc.).
**WARNING**: this is a one-way command. Do not run this unless you know what you're doing.

## <a id="debugging">Debugging</a>
- you can get all obstacle coordinates by
-- going to App.js
-- uncommenting line 28
