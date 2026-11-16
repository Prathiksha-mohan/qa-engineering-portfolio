
# Automation Testing – Farmers Market Application

## Overview
This section contains automated end-to-end tests developed using Playwright and TypeScript for one of the feature in Farmers Market web application.

The objective was to verify important buyer workflows and ensure the application behaves as expected.

## Tools & Technologies
- Playwright
- TypeScript
- Node.js
- Visual Studio Code

## Automated Test Scenarios

### 1. Authentication – Add to Cart
- Verified that an unauthenticated user is redirected to the login page when attempting to add a product to the cart.

### 2. Add Product to Cart
- Logged in as a buyer using valid credentials.
- Added a product to the cart.
- Navigated to the cart page.
- Verified that the selected product was displayed.

### 3. Buyer Checkout
- Logged in as a buyer.
- Added a product to the cart.
- Entered customer details.
- Completed the shipping and payment steps.
- Placed an order.
- Verified the success response and redirection to the products page.

## Cross-Browser Testing
Executed automated tests using Playwright across:
- Chromium
- Firefox
- WebKit

All completed test scenarios passed across the three browser projects.

## Test Execution

Run all tests:

```bash
npx playwright test
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

View the HTML test report:

```bash
npx playwright show-report
```

## Project Structure

```text
04-automation-testing/
│
├── tests/
│   └── add-to-cart.spec.ts
│
├── playwright.config.ts
│
└── README.md
```

## Key Learning Outcomes
- Writing automated end-to-end test scripts.
- Using Playwright locators and assertions.
- Automating login and checkout workflows.
- Handling browser dialogs.
- Performing cross-browser testing.
- Verifying expected application behaviour.
