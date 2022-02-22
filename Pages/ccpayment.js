import { Selector, t } from 'testcafe';

class ccpayment{

constructor()
{
    this.cardNumber= Selector('#cardNumber');
    this.cardholderName = Selector('#cardholderName');
    this.expiryMonth = Selector('#expiryMonth');
    this.expiryYear = Selector('#expiryYear');
    this.securityCode = Selector('#securityCode');
    this.makepayment = Selector('#submitButton');
    this.paypal = Selector('#PMMakePayment');
}


async switchtoIframe()
{
    await t.switchToIframe('#wp-cl-paymentFormContainer-iframe');
}



async typeCardNumber(num)
{
    await t
    .typeText(this.cardNumber,num);
}

async typeCardHolderName(name)
{
    await t
    .typeText(this.cardholderName,name);
}

async typeExpireMonth(month)
{
    await t
    .typeText(this.expiryMonth,month);
}

async typeExpireYear(year)
{
    await t
    .typeText(this.expiryYear,year);
}


async typeSecurityCode(code)
{
    await t
    .typeText(this.securityCode,code);
}


async clickPaymentButton()
{
    await t
    .click(this.makepayment);
}

async clickPaypalbutton()
{
    await t
    .click(this.paypal);
}

}

export default new ccpayment();