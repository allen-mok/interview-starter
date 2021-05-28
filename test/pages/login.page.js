class LoginPage {  
  get emailField () { return $('[data-automation-id="email-field"]') };
  get continueBtn () { return $('[data-automation-id="button"]') };
  get signUpLink () { return $('=Sign up') }; //TODO: add data attribute instead
  get notarizeLogoLink () { return $('[alt="Notarize logo"]') }; //TODO: add data attribute instead
  get googleBtn () { return $('[data-automation-id="google-sign-in-button"]') };
  get passwordField () { return $('[data-automation-id="password-field"]') };
  get validationMessage () { return $('[data-automation-id="validation-message"]') };
  get invalidCredentialsMsg () { return $('._2tb3vp5uEt7R6ZimSOFqlx') }; //TODO: add data attribute
  get forgotPasswordLink () { return $('=Forgot password?') }; //TODO: add data attribute
  get passwordBackLink () { return $('=Back') }; //TODO: add data attribute

  open () { return browser.url("https://app.notarize.com/login") };

}

export default new LoginPage();