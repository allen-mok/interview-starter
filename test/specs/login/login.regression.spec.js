import LoginPage from "../../pages/login.page";

const INVALID_EMAILS = {
  EMPTY: '',
  NO_AT_SYMBOL: "thishasnoatsymbol.com",
  NO_TLD: "thishasno@tldcom"
};
const NOT_SIGNED_UP = 'thisemaildoesntexist@atall.com';
const INVALID_PASSWORDS = {
  EMPTY: '',
  INCORRECT: 'thisisnottherightpasswordforthisaccount'
};

describe('Notarize Signer Login Page: Regression Tests', () => {
  //TODO: add test around responsive design

  it('should open the login page', () => {
    LoginPage.open();
  });

  it('should be able to click sign up link and navigate back', () => {
    LoginPage.signUpLink.click();

    expect(browser).toHaveUrlContaining('/pricing');

    LoginPage.open();
  });

  for (const INVALID_EMAIL in INVALID_EMAILS) {
    it(`should not enable Continue when email is invalid: ${INVALID_EMAIL}`, () => {
      LoginPage.emailField.setValue(INVALID_EMAILS[INVALID_EMAIL]);

      expect(LoginPage.continueBtn).toBeDisabled();
    });
  };

  for (const INVALID_EMAIL in INVALID_EMAILS) {
    it(`should display an error when email is invalid: ${INVALID_EMAIL}`, () => {
      //TODO: remove tab hack for blurring the field
      LoginPage.emailField.setValue(`${INVALID_EMAILS[INVALID_EMAIL]}\uE004`);      

      expect(LoginPage.validationMessage).toBeDisplayed();
    });
  };

  LoginPage.fillEmailField(LoginPage.VALID_EMAIL);
  LoginPage.continueToPassword();
  it('should display an error when password is empty', () => {
    //TODO: remove tab hack for blurring the field
    LoginPage.passwordField.setValue(`${INVALID_PASSWORDS.EMPTY}\uE004`);      

    expect(LoginPage.validationMessage).toBeDisplayed();
  });
  
  LoginPage.clickBackLink();
  LoginPage.fillEmailField(LoginPage.VALID_EMAIL);
  LoginPage.continueToPassword();
  it('should be able to click Forgot Password link',() => {
    LoginPage.forgotPasswordLink.click();

    expect(LoginPage.emailField).toBeDisplayed();
    expect(LoginPage.continueBtn).toBeDisabled();
    //TODO: find a better way to validate that this is the password reset step
    expect(LoginPage.continueBtn).toHaveText(LoginPage.SEND_PASSWORD_RESET_BTN_TEXT);
    expect(LoginPage.passwordBackLink).toBeDisplayed();
  });

  LoginPage.fillEmailField(NOT_SIGNED_UP);
  it('should be able to click Send Password Reset Link button', () => {
    LoginPage.continueBtn.click();

    expect(LoginPage.continueBtn).toBeDisabled();
    expect(LoginPage.continueBtn).toHaveText(LoginPage.RESET_LINK_SENT_BTN_TEXT);
  });

  LoginPage.clickBackLink();
  LoginPage.fillEmailField(NOT_SIGNED_UP);
  LoginPage.continueToPassword();
  it('should display an error when invalid user/password combination submitted', () => {
    LoginPage.passwordField.setValue(`${INVALID_PASSWORDS.INCORRECT}`);
    LoginPage.continueBtn.click();

    expect(LoginPage.invalidCredentialsMsg).toBeDisplayed();
  });
});