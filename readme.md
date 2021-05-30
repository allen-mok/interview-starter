`yarn install` (requires node v14 or later)  
`yarn test`

### Updated:
- Turned login.pages.js into a class with selector getters. This is what the boilerplate webdriverio examples use.
- Explicitly imported LoginPage as we're default exporting the entire class now.
- Updated waitforTimeout to allow for quicker run failure while developing.
- Added a "smoke" test suite of happy path for logging in with valid credentials.
- Moved login.spec.js to new `login` folder for organizing tests.
- Created separate login.regression.spec.js file (in case we want tests to run in different cadences).
- Refactored email fill and continue to password entry into resusable functions.