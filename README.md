# Mad-slider project

A simple slider built with TypeScript, HTML, SCSS, and Jest unittest coverage.

## Prerequisites

- Node.js (version 1.22.19)
- Yarn (version 18.16.0)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Don1k1337/mad-slider.git
   ```
   
2. Install the necessary dependencies:
    ```bash
    yarn install
    ```
    
3. Compile the .ts files:
   ```bash
   yarn tsc
   ```
      
4. To run the tests using Jest, execute the following command:
   ```bash
   yarn test
   ```   
   
5. Build the project:
    ```bash
    yarn build
    ```

5. Start the project:
    ```bash
    yarn dev
    ```
   The project will start on http://localhost:3000 by default (specified in package.json).
   
   **Note:** _If you make any changes to the TypeScript code (src directory), you need to run ```yarn tsc``` before rebuilding and running the project to compile the updated TypeScript files._


## Project Structure

The project follows a specific structure to organize the source code and related files. Here is an overview of the project structure:

```
mad-slider/
├── src/
│   ├── __tests__/
│   │   └── ...  (unit tests for the slider)
│   ├── Slider/
│   │   └── ...  (implementation files for the slider logic)
│   ├── use/
│   │   └── ...  (custom hooks)
│   ├── scss/
│   │   └── ...  (SCSS stylesheets)
│   ├── types/
│   │   └── ...  (TypeScript type definitions)
│   └── index.ts  (main entry point)
├── .gitignore
├── README.md
├── package.json
└── ...  (other project configuration files)
```