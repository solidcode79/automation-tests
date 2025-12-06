# How to find the right locators
- npx playwright codegen
- PWDEBUG=1 npx playwright test
- NOT the source code of the website in the source code view in browser (minify etc risks)

# Priority 1 — Accessibility Locators

- getByRole()
  - Example: page.getByRole('button', { name: 'Sign in' })
  - button  
  - link  
  - textbox  
  - heading  
  - checkbox  
  - radio  
  - combobox  
  - menuitem  
  - tab  
  - tabpanel  
  - listitem  
  - list  
  - dialog  
  - alert  
  - switch  

- getByLabel()
  - Example: page.getByLabel('Email')

- getByPlaceholder()
  - Example: page.getByPlaceholder('Search')

- getByAltText()
  - Example: page.getByAltText('Profile picture')


# Priority 2 — Structural / Semantic Locators

- getByText()
  - Example: page.getByText('Welcome back')

- getByTitle()
  - Example: page.getByTitle('Close')


# Priority 3 — Blind Locator

- getByTestId()
  - Example: page.getByTestId('submit-button')