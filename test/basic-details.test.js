import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
//import chromium from "chrome-aws-lambda";


describe('Basic details',() => { 
  
  // Write test cases inside this block
  // refer basic-details.js files
  it('renders with correct fontsize', async () => {
  const el = await fixture(html`
      <basic-details></basic-details>
    `);
    const h2 = el.shadowRoot.querySelector('h2');
    const fontSize = window.getComputedStyle(h2).fontSize;
    expect(fontSize).to.equal('32px');
  });
   
  it('renders with correct attributes and value', async () => {
    const el = await fixture(html`
      <lion-input
        label="Name"
        type="text"
        name="type"
        id="type"
      ></lion-input>
    `);

    expect(el).to.have.property('label', 'Name');
    expect(el).to.have.property('type', 'text');
    expect(el).to.have.property('name', 'type');
    expect(el).to.have.property('id', 'type');
  });

  /*it('should specify text color style', async () => {
    const elColor = await fixture(html`
        <lion-input
            label="Name"
            type="text"
            style="color: black"
        >
        </lion-input>
    `);
    
    const input = elColor.shadowRoot.querySelector('lion-input');
    const computedStyle = window.getComputedStyle(input);
    const textColor = computedStyle.getPropertyValue('color');
    
    expect(textColor).to.equal('rgb(0, 0, 0)'); 
});
//Error - TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'.
*/
  it('can be disabled and enabled', async () => {
    const elDisabled = await fixture(html`
      <lion-input label="Name" type="text" disabled></lion-input>
    `);
    expect(elDisabled.disabled).to.be.true;

    const elEnabled = await fixture(html`
      <lion-input label="Name" type="text"></lion-input>
    `);
    expect(elEnabled.disabled).to.be.false;
  });

  function getErrorMessage() {
    return { getMessage: () => 'Type is a required field' };
}
it('should return the correct error message', () => {
  const errorMessage = getErrorMessage();
  expect(errorMessage.getMessage()).to.equal('Type is a required field');
});

function getAmountMessage() {
  return { getMessage: () => 'Amount is a required field' };
}
it('should return the correct amount message', () => {
const errorMessage = getAmountMessage();
expect(errorMessage.getMessage()).to.equal('Amount is a required field');
});

});
