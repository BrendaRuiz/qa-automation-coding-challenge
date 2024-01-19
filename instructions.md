## Get Github Repos App - Test Automation Framework
## About
This repository also contains the Test Automation Framework for the Get Github Repos app. It includes tests to validate features from the following applications:
* Front-End (FE)

The tooling used in this project are mainly:

- Cypress
- Mocha

## Local Project Setup
# Installation
To properly run the test code, some programs needs to be installed.
* Cypress, here[https://docs.cypress.io/guides/getting-started/installing-cypress]

1. Clone this repository
2. In the terminal, navigate to the directory in which you have cloned the project and run the following command to install the project dependencies:
```bash
yarn install
```

```bash
npm install cypress --save-dev
```
Install some React dependencies
```bash
npm install react-scripts@latest
```
3. Before kicking off our test, we need to ensure the app is running 
```bash
npm build
```
4. Cypress allows you to run scripts in two different modes: Interactive and Headless.
  
**Interactive mode:**
Once the runner is launched, you can select any test suite from to run
```bash
cypress open --config-file 'cypress/e2e/SearchForm.cy.js'
```

**Headless mode:**
By default, in the headless mode, Cypress will run all tests suites (all .spec files)
```bash
npm run cypress:open
```

