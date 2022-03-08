export class Hour{
    
    constructor( numberHour ){
        
        this.numberHour = numberHour;
        
    }

    addNumberHour() {

        this.numberHour ++;
        return this;

    }

    subtractHour() {

        this.numberHour --;
        return this;

    }
    

}