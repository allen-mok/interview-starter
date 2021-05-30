class LoginPage {  
  // Constants
  get VALID_EMAIL () { return 'amok526@gmail.com' };  //TODO: research into a more secure method of storing username/pass
  get SEND_PASSWORD_RESET_BTN_TEXT () { return 'Send Password Reset Link' };
  get RESET_LINK_SENT_BTN_TEXT () { return 'Reset Link Sent' };

  // Selectors
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

  // Functions
  open () { return browser.url("https://app.notarize.com/login") };

  /**
   * Fills out email field and validates Continue Button is enabled
   * @param {string} email - email to fill in field with
   */
  fillEmailField(email) {
    it('should be able to fill out email field', () => {
      this.emailField.setValue(email);
  
      expect(this.continueBtn).toBeEnabled();
    });
  }

  /**
   * Clicks Continue button after email has been filled and validates
   * password field is displayed, Continue button is disabled,
   * password back link is displayed, and forgotPassword link is displayed
   */
  continueToPassword() {
    it('should be able to continue to Password entry', () => {
      this.continueBtn.click();

      expect(this.passwordField).toBeDisplayed();
      expect(this.continueBtn).toBeDisabled();
      expect(this.passwordBackLink).toBeDisplayed();
      expect(this.forgotPasswordLink).toBeDisplayed();
    });
  }

  /**
   * Clicks Back Link and validates email entry is in clean/empty state
   */
  clickBackLink() {
    it('should be able to navigate back using Back link', () => {
      this.passwordBackLink.click();
  
      expect(this.emailField).toBeDisplayed();
      expect(this.emailField).toBeEnabled();
      expect(this.emailField).toHaveValue('');
    });
  }
}

export default new LoginPage();