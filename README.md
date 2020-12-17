# How to use typescript with Node/Express app

- mkdir ts-node-express
- cd ts-node-express
- npm init --yes
- tsc --init(make sure you have typescript installed)
  - this will create tsconfig.json file
- open tsconfig.json and change below properties:
  - "target": "es2018",
  - "moduleResolution": "node",
  - "outDir": "./dist",
  - "rootDir": "./src"
- dependencies
  - express
- dev-dependencies
  - @types/node
  - @types/express
  - nodemon (not required if you've already installed it globally)

## How to run

- In first tab, run "tsc -w" (Again, make sure you have typescript installed on your machine)
- In second tab, run "nodemon run dev"
