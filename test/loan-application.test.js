import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('has default properties correctly set', async () => {
    const element = await fixture(html`<loan-application></loan-application>`);

    expect(element.title).to.equal('Hey there');
    expect(element.counter).to.equal(5);
  });
});
