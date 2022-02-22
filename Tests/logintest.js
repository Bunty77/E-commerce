import { Selector } from 'testcafe';
import login from '../Pages/login';
import address from '../Pages/address';
import orderupload from '../Pages/orderupload';
import revieworder from '../Pages/revieworder';
import placeorder from '../Pages/placeorder';
import ccpayment from '../Pages/ccpayment';


fixture`Getting Started`
    .page`https://tradeorders-qa.springernature.com/login`;


    test('Place Order with Invoice Payment', async t => {
      
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
       await placeorder.clickInvoiceButton();
       await t.wait(7000);
       await placeorder.clickBuyNowButton();
       await t.wait(5000);
    });    




    test('Place Order With Credit Card', async t => {
      
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
      await placeorder.clickCreditCardButton();
      await t.wait(7000);
      await placeorder.clickBuyNowButton();
      await t.wait(5000);
      await ccpayment.switchtoIframe();
      await ccpayment.typeCardNumber('4444333322221111');
      await ccpayment.typeCardHolderName('Authorized');
      await ccpayment.typeExpireMonth('02');
      await ccpayment.typeExpireYear('27');
      await ccpayment.typeSecurityCode('123');
      await ccpayment.clickPaymentButton();
      await t.wait(7000);
   });    



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
      await t.wait(5000);
   });    