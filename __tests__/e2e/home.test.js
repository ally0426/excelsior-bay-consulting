const expect = require('chai').expect;

describe('Home page', () => {
  it('Should have the correct title', () => {
    browser.url('http://localhost:3000');
    const title = browser.getTitle();
    expect(title).to.equal('Excelsior Bay Consulting');
  });
});
