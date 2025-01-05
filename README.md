# Dou.gg

## Setup

1. Run `nvm install` to install the appropriate version of Node.js.
2. Run `nvm use` to install the appropriate version of Node.js.
3. Run `npm i` to install relevant packages.

## Running This Repo

| Command            | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `npm run dev`      | Start a local developer server that is accessible from http://localhost:4321/.           |
| `npm run start`    | Start a local production server that is accessible from http://localhost:4321/.          |
| `npm run build`    | Build the site for production and place it in a `build` folder in the root directory.    |
| `npm run lint`     | Runs all lint commands in sequence: CSS, TS, JS.                                         |
| `npm run lint:css` | Alert you of any SCSS linter errors and will automatically fix them.                     |
| `npm run lint:js`  | Alert you of any JS linter errors and will automatically fix them.                       |
| `npm run lint:ts`  | Alert you of any TypeScript errors and will automatically fix them.                      |
| `npm run pretty`   | Will run through all compatible files and format them based on Prettier's configuration. |
