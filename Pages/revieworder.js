import { Selector, t } from 'testcafe';

class revieworder{

constructor()
{
    this.checkoutbutton = Selector('button > .shell');
}


async clickCheckoutButton()
    {
        await t
        .click(this.checkoutbutton);
    }


}

export default new revieworder();