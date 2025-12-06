# Visibility & Presence Assertions
- expect(locator).toBeVisible()
  Example: await expect(page.getByText('Settings')).toBeVisible()

- expect(locator).toBeHidden()
  Example: await expect(page.getByTestId('spinner')).toBeHidden()

- expect(locator).toBeEnabled()
  Example: await expect(page.getByRole('button', { name: 'Save' })).toBeEnabled()

- expect(locator).toBeDisabled()
  Example: await expect(page.getByRole('button', { name: 'Save' })).toBeDisabled()

- expect(locator).toBeChecked()
  Example: await expect(page.getByRole('checkbox')).toBeChecked()


# Text Assertions
- expect(locator).toHaveText('...')
  Example: await expect(page.getByTestId('title')).toHaveText('Welcome')

- expect(locator).toContainText('...')
  Example: await expect(page.getByTestId('error')).toContainText('invalid')

- expect(locator).not.toHaveText('...')
  Example: await expect(locator).not.toHaveText('Deleted')


# Value / Input Assertions
- expect(locator).toHaveValue('...')
  Example: await expect(page.getByLabel('Email')).toHaveValue('test@example.com')

- expect(locator).toHaveAttribute('name', 'value')
  Example: await expect(locator).toHaveAttribute('type', 'password')


# Count Assertions (Lists, Tables, Cards)
- expect(locator).toHaveCount(n)
  Example: await expect(page.locator('.article-preview')).toHaveCount(10)


# URL / Navigation Assertions
- expect(page).toHaveURL('...')
  Example: await expect(page).toHaveURL(/\/login/)

- expect(page).toHaveTitle('...')
  Example: await expect(page).toHaveTitle('Conduit')


# Network / API Assertions
- expect(response).toBeOK()
  Example: await expect(apiResponse).toBeOK()


# Soft Assertions (Non-blocking)
- expect.soft(locator).toBeVisible()
  Example: expect.soft(page.getByText('Profile')).toBeVisible()


# Boolean Assertions (General)
- expect(condition).toBeTruthy()
  Example: expect(isLoggedIn).toBeTruthy()

- expect(condition).toBeFalsy()
  Example: expect(isShown).toBeFalsy()
