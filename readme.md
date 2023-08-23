# Express Demo

This repository contains a set of projects demonstrating the use of AWS Lambda with Express and direct invocations.

## Structure

The main projects are housed under the `accessor` and `managers` directories:

- `accessor`
  - `accessor-express-1`: An Express-based Lambda function.
  - `accessor-invoke-directly-2`: A Lambda function designed for direct invocation.
  
- `managers`: Contains the manager functions that invoke the accessor functions.

## Running the Projects

To run any of the projects:

1. Navigate to the project's directory:

   ```bash
   cd path_to_project_directory
   ```

   For example, to navigate to the `accessor-express-1` directory:

   ```bash
   cd accessor/accessor-express-1
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the project in debug mode:

   ```bash
   npm run debug
   ```

Repeat for each accessor and manager

This will start the project using `serverless-offline`, allowing you to test and debug the Lambda functions locally.