import { Selector, t } from 'testcafe';

class orderupload{

constructor()
{

this.fileupload = Selector('#file-field');
this.btncontinue = Selector('#btn-continue');

}

async orderfileupload()
    {
        await t
        .setFilesToUpload('#file-field', [
             
            '/Users/nso4579/Downloads/Book1.xlsx'
        ])
    }


    async clickOrderContinueButton()
    {
        await t
        .click(this.btncontinue);
    }

}

export default new orderupload();