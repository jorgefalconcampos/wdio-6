const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user_login");
  }

  get inputPassword() {
    return $("#user_password");
  }

  get btnSubmit() {
    return $("input[type='submit']");
  }

  get errorMessage() {
    return $(".alert-error");
  }

  async visit() {
    await browser.url("http://zero.webappsecurity.com/login.html");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toHaveTextContaining(
      "Login and/or password are wrong"
    );
  }
}

module.exports = new LoginPage();
