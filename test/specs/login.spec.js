import LoginPage from "../pages/login.page";

describe('Notarize Signer Login Page Smoke Test', () => {
  const VALID_EMAIL = 'amok526@gmail.com';  //TODO: research into a more secure method of storing username/pass
  const VALID_PASSWORD = '$gsSNHA*63ht';

  it('should open the login page', () => {
    LoginPage.open();
  });

  it('should contain an email address field', () => {
    expect(LoginPage.emailField).toBeDisplayed();
    expect(LoginPage.emailField).toBeEnabled();
  });

  it('should contain a Continue button', () => {
    expect(LoginPage.continueBtn).toBeDisplayed();
    expect(LoginPage.continueBtn).toBeDisabled();
  });

  it('should contain a Sign up link', () => {
    expect(LoginPage.signUpLink).toBeDisplayed();
  });

  it('should contain a Homepage link', () => {
    expect(LoginPage.notarizeLogoLink).toBeDisplayed();
  });

  it('should contain a Google login button', () => {
    expect(LoginPage.googleBtn).toBeDisplayed();
    expect(LoginPage.googleBtn).toBeEnabled();
  });

  it('should be able to fill out email field', () => {
    LoginPage.emailField.setValue(VALID_EMAIL);

    expect(LoginPage.continueBtn).toBeEnabled();
  });

  it('should be able to continue to Password entry', () => {
    LoginPage.continueBtn.click();

    expect(LoginPage.passwordField).toBeDisplayed();
    expect(LoginPage.continueBtn).toBeDisabled();
  });

  it('should be able to fill out password', () => {
    LoginPage.passwordField.setValue(VALID_PASSWORD);

    expect(LoginPage.continueBtn).toBeEnabled();
  });

  it('should be able to continue', () => {
    LoginPage.continueBtn.click();

    //TODO: find out if there is a better mechanism to validating a user logged in
    expect(browser).toHaveUrlContaining('/bundle');
  });
});
