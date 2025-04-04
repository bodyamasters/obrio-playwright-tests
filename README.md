Here’s the **README** file translated into English:

```markdown
# Playwright Test Suite

This repository contains tests for a web application, written in JavaScript using the Playwright framework. These are my first tests, covering the verification of the CRM system interface for astrologers.

## Installation

To run the tests, you need to install the dependencies using `npm`.

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

This will run all the tests defined in the repository.

## Project Structure

The repository contains several test files:

### 1. `tests/general-crm-test.spec.js`

This file contains tests that verify the header blocks of the CRM system, specifically:
- **Internet Status**
- **User Status**

The tests in this file check for the presence and correct display of these blocks according to the checklist provided during the task. During the testing process, various states of Internet connection and user status are verified.

### 2. `tests/chat-tests.spec.js`

This file contains tests for sending and displaying messages in the CRM system. In order for the tests to run successfully, the test astrologer must have an active live chat. The test verifies if the system correctly handles and displays the messages in the interface.

### Note:
- For the tests in the `chat-tests.spec.js` file to run successfully, the astrologer being tested must have an active live chat.

## Technical Requirements

- Node.js version 14 or newer
- Playwright
- An internet connection to run the tests on real browsers

## Contributing

If you would like to make improvements or fixes, please create a pull request with a description of your changes.

---

If you have any questions, feel free to contact me on GitHub.
```

This translation retains all the key details and instructions from the original, while making it accessible to an English-speaking audience.
