import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import chromium from "chrome-aws-lambda";


describe('Basic details',() => { 
  
  //Shruti Test
  // Write test cases inside this block
  // refer basic-details.js files
  /*const el = await fixture(html`
      <basic-details></basic-details>
    `);
    const h2 = el.shadowRoot.querySelector('h2');
    const fontSize = window.getComputedStyle(h2).fontSize;
    expect(fontSize).to.equal('32px');
    //expect(h2).to.have.style('font-size', '32px'); */
    let basicDetails;
    beforeEach(() => {
      basicDetails = document.createElement('basic-details');
      document.body.appendChild(basicDetails);
    });
    afterEach(() => {
      document.body.removeChild('basic-details');
      
    });
    it('should have minimum value',() => {
      expect(basicDetails.amount).to.equal(10000);
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

  it('should specifies text color style',async ()=>{
      const elColor= await fixture(html` 
          <lion-input
          label="Name"
          type="text"
          style="color : black;"
          >
          </lion-input>
      `);
      const input = elColor.shadowRoot.querySelector('lion-input');
      const computedStyle = getComputedStyle(input);
      expect(computedStyle.color).to.be.equal('black');
  });
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

});
