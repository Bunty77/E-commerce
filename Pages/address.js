import { Selector, t } from 'testcafe';

class address {

    constructor()
    {
        this.continuebutton = Selector('.btn');
    }



    async clickContinueButton()
    {
        await t
        .click(this.continuebutton);
    }

}

export default new address();