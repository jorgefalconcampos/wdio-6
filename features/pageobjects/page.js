/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  async visit(url) {
    await browser.url(url);
  }

  async waitForSeconds(seconds) {
    await browser.pause(seconds * 1000);
  }
};
