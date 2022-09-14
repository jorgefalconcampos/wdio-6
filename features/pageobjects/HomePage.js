const Page = require("./page");

class HomePage extends Page {
  get searchbox() {
    return $("#searchTerm");
  }

  async visit() {
    await browser.url("http://zero.webappsecurity.com/index.html");
  }

  async searchFor(text) {
    await (await this.searchbox).setValue(text);
    await browser.keys(["Enter"]);
  }
}

module.exports = new HomePage();
