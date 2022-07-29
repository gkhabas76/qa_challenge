## Automated End-to-End (E2E) Test for React Library App (Talentspace Web)

### Project Description:

This automated **_E2E_** test is checks the process of different **_Features_** such as Creating a user account, adding books to reading list and verifiying the existing users. The **_E2E_** test cases are written in **_JavaScript_** using **_Cypress_**

Custom Cypress command such as clearLocalStorageCache, restoreLocalStorageCache and saveLocalStorageCache used in **_test.cy.js_** file can be found under **_cypress/support/command.js_**

**_PageObject_** folder contains the all the required classes, methods and function used to run tests.

### Installation and running the project

### Installation process of the Project

1. Clone the repo.
2. Then execute this command on your terminal
   **_npm install_**. It should install all the dependencies.
3. Then execute the command **\_npm run cypress**.
4. If Cypress did not installed itself from **_Step3_** then execute this command **_npm install cypress --save-dev_** and execute the command from **_Step3_** again
   5

#### Running process of the project

1. After installation process, use the command **\_npm run cypress** to run the test.
2. Cypress UI window will be displayed.
3. Select **_E2E_** Testing.
4. Select the browser of your choice and click on **_Start E2E Testing_** button.
5. A new browser window will be open.
6. Expand **_cypress\e2e\Talentspace_** folder and click on **_tests.cy.js_** file.

#### Notes

At the moment, the integrated CI/CD using GitHUB Actions does not work properly. As I didn't want to take more time in technical test, I didn't spend more time on fixing it.
