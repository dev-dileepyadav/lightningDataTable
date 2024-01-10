import LightningDatatable from 'lightning/datatable';
import customImage from './customImage.html';
import oppAmount from './oppAmount.html';

export default class CustomTable extends LightningDatatable {

    static customTypes = {
        customImage:{
            template:customImage,
            typeAttributes:["title"]
        },
        customAmount:{
            template:oppAmount,
            typeAttributes:["type","value"]
        }
    }
}