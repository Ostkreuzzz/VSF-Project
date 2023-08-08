import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers = [];
    dates = [];

    connectedCallback (){
        this.fetchVaccinesSlots();
    }

    get hiddenMessage (){

    }

    async fetchVaccinesSlots(){
        const vaccineSlotResponse = await fetch  ("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}")
        const slotsData = await vaccineSlotResponse.json();
        console.log(slotsData);
    }

}