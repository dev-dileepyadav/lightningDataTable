import LightningDatatable from 'lightning/datatable';
import customPickList from './customPickList.html';
import customName from './customName.html';
import customamount from './oppAmount.html';

export default class CustomTypeGlobal extends LightningDatatable {
    static customTypes = {
        customRating:{
        template :customPickList,
        standardCellLayout:true,
        typeAttributes:['label','value','placeholder','options']
    },
    customNames:{
        template:customName,
        standardCellLayout:true,
        typeAttributes:['accountName']
    },
    customAmount:{
        template:customamount,
        standardCellLayout:true,
        typeAttributes:['oppamount']
    }
}
}