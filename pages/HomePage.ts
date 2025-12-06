import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly signupLoginBtn: Locator; //page.getByRole('button', { name: 'Sign in' })
  readonly homeVisible: Locator;
  readonly logo: Locator;
  readonly heading: Locator; // heading
  readonly signuplink: Locator; // link
  readonly leftSlideBtn: Locator;
  readonly rightSlideBtn: Locator;
  readonly subscriptionTxtBox: Locator; //textbox
  readonly updateTxt: Locator;

  constructor(private page: Page) {
    this.signupLoginBtn = this.page.locator('a[href="/login"]');
    this.homeVisible = this.page.locator('#slider');
    this.logo = page.locator('img[src="/static/images/home/logo.png"]');
    this.heading = page.getByRole('heading', { name: 'Features Items' });
    this.signuplink = page.getByRole('link', { name: 'Signup / Login' });
    this.leftSlideBtn = page.locator('.left').first();
    this.rightSlideBtn = page.locator('.right').first();
    this.subscriptionTxtBox = page.getByRole('textbox', { name: 'Your email address' });
    this.updateTxt = page.getByText('Get the most recent updates');
  }

  async goto() {
    await this.page.goto('/');
  }
}
