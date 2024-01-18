### Instructions:###
### 1. Using the product description, acceptance criteria and the app itself, compile a list of several testable user flows, cases or scenarios. This doesn't have to cover every possible real-life case, please focus on what you think is most fundamental###
### 2. Based on your assessment of importance and effort, prioritise this list. Imagine this list would be later converted to tickets to be tackled in the next few work iterations of a product development team.###

1. Verify the user can interact with the Search Form:
Scenario: Enter a search term in the search form and click the "Go" button.
Expected result: The search result section updates after clicking the Go button.

2. Verify the repo information displays when making a search:
Scenario: Perform a search with a valid user so that the repositories found are displayed.
Expected result: The search result section displays rows with basic info about each repo (name and description). 

3. Making a new Search with the Enter Key:
Scenario: Enter a search term in the search form and press the "Enter" key.
Expected result: The search result section updates with relevant repositories, and a success message is displayed.

4. Verify missing repo description values display "-":
Scenario: Some repositories have missing values (description).
Expected result: The search result section displays "-" for missing values.

5. Verify missing repo name value display "-"
Scenario: Some repositories have missing values (name).
Expected result: The search result section displays "-" for missing values.

6. Verify the repo can be clicked:
Scenario: Perform a search with a valid user so that the repositories found are displayed.
Expected result: Clicking on a repo name redirects to the repo's URL in a new tab.

7. Verify the user sees feedback about the result of the search action:
Scenario: Complete a search action.
Expected result: A success message is displayed briefly above the search field.

8. Verify the user sees feedback about a not found result of the search action:
Scenario: Encounter an error during a search action (other than user not found).
Expected result: A generic error message "No Repos" is displayed beneath the search field.

9. Verify the user sees an error message about a user not found
Scenario: Encounter an error due to a user not found on GitHub.
Expected result: A specific error message for user not found is displayed briefly above the search field.



### Instructions:###
### Please explain your reasoning briefly.###
1. Search Form Interaction: This is a core functionality, and ensuring that users can successfully search for repositories is the highest priority.
2. Repo Information Display: Displaying accurate information about the repositories is fundamental to the app's purpose.
3. Search with Enter Key: This is important for user convenience, but its absence doesn't break the fundamental functionality of the search.
4. Missing repo name and description values handling: Handling missing values is important for a polished user interface, but it doesn't impact the core functionality.
5. Clicking on a repo link: This is important for user convenience in case he needs to dive deeper.
6. Search Result Feedback: Providing feedback on the success of a search action is helpful for user experience but is not as critical as the core search functionality.
6. Error Message Display - For repos not found: Displaying generic error messages is important for informing users about issues.
7. Error Message Display - User not found: Specific error messages for user not found are important, but since this is a specific case of an error, it can be considered lower priority than the general error handling.

