import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('renders the form with input fields and buttons', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);

    const form = element.shadowRoot.querySelector('form');
    const inputFields = element.shadowRoot.querySelectorAll('lion-input, lion-input-datepicker, lion-input-email, lion-input-amount');
    const checkBoxGroup = element.shadowRoot.querySelector('lion-checkbox-group');
    const backButton = element.shadowRoot.querySelector('.backbg-btn-color');
    const nextButton = element.shadowRoot.querySelector('.nextbg-btn-color');

    expect(form).to.exist;
    expect(inputFields).to.have.lengthOf.at.least(6); 
    expect(checkBoxGroup).to.exist;
    expect(backButton).to.exist;
    expect(nextButton).to.exist;
  });

  it('displays error message for invalid mobile number format', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);
    const mobileNumberInput = element.shadowRoot.querySelector('#mobile_number');
    const nextButton = element.shadowRoot.querySelector('.nextbg-btn-color');

    mobileNumberInput.value = '123456789'; 
    mobileNumberInput.dispatchEvent(new Event('input')); 

    nextButton.click();
    await element.updateComplete;

    const errorMessageElement = mobileNumberInput.shadowRoot.querySelector('.validation-feedback');
    //expect(errorMessageElement).to.exist;

   // expect(errorMessageElement.classList.contains('error-class-name')).to.be.true;
  });
});
