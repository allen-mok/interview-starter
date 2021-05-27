class LoginPage {
  get emailField () { return $('[data-automation-id="email-field"]') };
  get continueBtn () { return $('[data-automation-id="button"]') };
  get signUpLink () { return $('=Sign up') }; //TODO: add data attribute instead
  get notarizeLogoLink () { return $('[alt="Notarize logo"]') }; //TODO: add data attribute instead
  get googleBtn () { return $('[data-automation-id="google-sign-in-button"]') };
  get passwordField () { return $('[data-automation-id="password-field"]') };

  open () { return browser.url("https://app.notarize.com/login") };

}

export default new LoginPage();