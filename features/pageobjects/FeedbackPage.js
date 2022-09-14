const Page = require("./page");

class FeedbackPage extends Page {
  get nameInput() {
    return $("#name");
  }

  get emailInput() {
    return $("#email");
  }

  get subjectInput() {
    return $("#subject");
  }

  get messageInput() {
    return $("#comment");
  }

  get submitButton() {
    return $(".btn-primary");
  }

  async visit() {
    await browser.url("http://zero.webappsecurity.com/feedback.html");
  }

  async submitFeedback(name, email, subject, message) {
    await (await this.nameInput).setValue(name);
    await (await this.emailInput).setValue(email);
    await (await this.subjectInput).setValue(subject);
    await (await this.messageInput).setValue(message);
    await (await this.submitButton).click();
  }


}

module.exports = new FeedbackPage();
