import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://tradeorders-qa.springernature.com/login`;

    test('Login With Correct Username And Passowrd', async t => {
        await t
        .maximizeWindow()
            .typeText('#login-form-email', 'shopimerce@springer.com')
            .typeText('#login-form-password', 'shopimerce1')
            .click('.btn');
            console.log("Login Success")
            await t.wait(5000)
            
            .click('.btn');
        console.log("Click on Continue Button Success")   
        await t.wait(5000)

        .setFilesToUpload('#file-field', [
             
            '/Users/nso4579/Downloads/Book1.xlsx'
        ])
        
        //await t.wait(5000)
        .click('#btn-continue');
        await t.wait(5000)

        console.log("File Upload Done") 
        
        await t.wait(3000)
        .click('button > .shell');
        console.log("Proceed To checkout") 
        await t.wait(7000)
.click('#input-payment-method-cc')
console.log("Clicked on Credit Card") 
await t.wait(5000)
.click('aside .buy-button .shell')
await t.wait(9000)
//await t.switchToIframe('#helpframe')
await t.switchToIframe('#wp-cl-paymentFormContainer-iframe')
await t.wait(2000)
.typeText('#cardNumber','4444333322221111')
.typeText('#cardholderName','Authorized')
.typeText('#expiryMonth','05')
.typeText('#expiryYear','26')
.typeText('#securityCode','126')

        
    });

    
    