import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import { localize } from '@lion/localize';

describe('loan-header', () => {
  // Write test cases inside this block
  it('changes the locale when NL button is clicked', async () => {
    const element = await fixture(html`<loan-header></loan-header>`);
    const enButton = element.shadowRoot.querySelector('#en-GB');
    const nlButton = element.shadowRoot.querySelector('#nl-NL');

    nlButton.click();
    await element.updateComplete;

    expect(localize.locale).to.equal('nl-NL');
    expect(nlButton).to.have.class('bg-btn-color');
    expect(enButton).to.not.have.class('bg-btn-color');
  });

  it('renders the header component', async () => {
    const element = await fixture(html`<loan-header></loan-header>`);

    const header = element.shadowRoot.querySelector('header');
    const enButton = element.shadowRoot.querySelector('#en-GB');
    const nlButton = element.shadowRoot.querySelector('#nl-NL');

    expect(header).to.exist;
    expect(enButton).to.exist;
    expect(nlButton).to.exist;
  });
 
});
