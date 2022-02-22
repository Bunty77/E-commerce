import { Selector } from 'testcafe';
import login from '../Pages/login';
import address from '../Pages/address';
import orderupload from '../Pages/orderupload';
import revieworder from '../Pages/revieworder';
import placeorder from '../Pages/placeorder';
import ccpayment from '../Pages/ccpayment';


fixture`Getting Started`
    .page`https://tradeorders-qa.springernature.com/login`;



    test('Place Order With PayPal', async t => {
      
        await t 
        .maximizeWindow();
        await login.typeUsername('shopimerce@springer.com');
        await login.typePassword('shopimerce1');
        await login.clickLogin();
        console.log("Login Successful");
        await t.wait(5000);
        await address.clickContinueButton();
        await t.wait(5000)
        await orderupload.orderfileupload();
        await orderupload.clickOrderContinueButton();
        await t.wait(5000);
        console.log("File Upload Done");
        await revieworder.clickCheckoutButton();
        console.log("click on checkout button");
        await t.wait(5000);
        await placeorder.clickPayPalButton();
        await t.wait(7000);
        await placeorder.clickBuyNowButton();
        await t.wait(7000);
        await ccpayment.clickPaypalbutton();
        await t.wait(3000);
     });     



   