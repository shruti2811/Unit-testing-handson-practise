import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('renders the success message and button', async () => {
    const element = await fixture(html`<loan-success></loan-success>`);
    const header = element.shadowRoot.querySelector('h2');
    const description = element.shadowRoot.querySelector('p');
    const button = element.shadowRoot.querySelector('.home-btn');

   expect(header.textContent).to.equal('!!!');
    expect(description.textContent).to.equal('');
    expect(button.textContent).to.equal('');
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('renders the error message and button', async () => {
    const element = await fixture(html`<loan-error></loan-error>`);
    const header = element.shadowRoot.querySelector('h2');
    const description = element.shadowRoot.querySelector('p');
    const button = element.shadowRoot.querySelector('.home-btn');

   expect(header.textContent).to.equal('!!');
    expect(description.textContent).to.equal('');
    expect(button.textContent).to.equal('');
  });
});
