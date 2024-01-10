import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/GetOpportunity.getOpportunities';
import updateOpportunity from '@salesforce/apex/GetOpportunity.updateOpportunity';


const columns = [
    {label:'Name', fieldName:'Name',editable:true},
    {label:'Close Date', fieldName:'CloseDate',editable:true},
    {label:'Amount', fieldName:'Amount',wrapText:true,editable:true,//type:'customAmount',
    typeAttributes:{
                     value:{fieldName:'Amount'}
                     
                    },
                    cellAttributes: {
                        class: { fieldName: "amount" },
                      }}
]
export default class OpportunityCustomDatatable extends LightningElement {
    data;
    error;
    columns = columns;

    @wire(getOpportunities)
    wiredOpportunity({data,error}){
        if(data){
            this.data = data.map((opp)=>{
                let amount = opp.Amount >= 100000 ? "slds-text-color_success" : "slds-text-color_error";
                return{...opp, amount:amount}
            })
        }else if(error){
            this.error = error;
        }
         
    }

    handleSave(e){
        const updatedValues = e.detail.draftValues;
        console.log('Updated Values',updatedValues);

        updateOpportunity({opportunityData:updatedValues}).then((x)=>{
            console.log('Saved succesfully',JSON.stringify(x));
        }).then((x)=>{
            console.log('Can not update',JSON.stringify(x));
        })
    }
}