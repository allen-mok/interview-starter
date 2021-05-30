import LoginPage from "../../pages/login.page";

const VALID_EMAIL = 'amok526@gmail.com';  //TODO: research into a more secure method of storing username/pass
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
  it('should open the login page', () => {
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

  LoginPage.fillEmailField(VALID_EMAIL);

  LoginPage.continueToPassword();

  it('should display an error when password is empty', () => {
    //TODO: remove tab hack for blurring the field
    LoginPage.passwordField.setValue(`${INVALID_PASSWORDS.EMPTY}\uE004`);      

    expect(LoginPage.validationMessage).toBeDisplayed();
  });
  
  it('should be able to navigate back using Back link', () => {
    LoginPage.passwordBackLink.click();

    expect(LoginPage.emailField).toBeDisplayed();
    expect(LoginPage.emailField).toBeEnabled();
    expect(LoginPage.emailField).toHaveValue('');
  });

  LoginPage.fillEmailField(NOT_SIGNED_UP);

  LoginPage.continueToPassword();
  
  it('should display an error when invalid user/password combination submitted', () => {
    LoginPage.passwordField.setValue(`${INVALID_PASSWORDS.INCORRECT}`);
    LoginPage.continueBtn.click();

    expect(LoginPage.invalidCredentialsMsg).toBeDisplayed();
  });
});