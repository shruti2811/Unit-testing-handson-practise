import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('applies the correct host element styles', async () => {
    const element = document.createElement('loanemi-details');
    document.body.appendChild(element);

    const computedStyles = getComputedStyle(element);

    expect(computedStyles.display).to.equal('block');
    expect(computedStyles.color).to.equal('rgb(0, 0, 0)');
    expect(computedStyles.fontFamily).to.equal('monospace');
  });

    

});
