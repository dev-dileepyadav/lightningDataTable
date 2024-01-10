import { LightningElement } from 'lwc';


const columns = [
    {label:'Title',fieldName:'title'},
    {label:'Price',fieldName:'price', type:'currency'},
    {label:'Image',fieldName:'image',type:'customImage'},
    {label:'Rating',fieldName:'rating.count'},
    {label:'Category',fieldName:'category'},


]
export default class FakeStore extends LightningElement {
    columns = columns
    products = [];
    connectedCallback(){
        this.getProducts();
    }

    async getProducts(){
       const responce =  await fetch("https://fakestoreapi.com/products");
       if(responce.ok){
        this.products = await responce.json();
        console.log(this.products);
       }
    }
}