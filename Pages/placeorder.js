import { Selector, t } from 'testcafe';

class placeorder{

constructor()
{

    this.creditcard = Selector('#input-payment-method-cc');
    this.paypal = Selector('#input-payment-method-paypal');
    this.invoice = Selector('#input-payment-method-invoice');
    this.buynowbutton = Selector('aside .buy-button .shell');
}

async clickCreditCardButton()
{
    await t
    .click(this.creditcard);
}

async clickPayPalButton()
{
    await t
    .click(this.paypal);
}

async clickInvoiceButton()
{
    await t
    .click(this.invoice);
}

async clickBuyNowButton()
{
    await t
    .click(this.buynowbutton);
}


}

export default new placeorder();