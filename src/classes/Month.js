export class Month{
    
    months = [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ]; 

    constructor( numberMonth ){
        
        this.numberMonth = this.months[ numberMonth ];
        
    }

    addNumberMonth() {

        this.numberMonth = this.months[ this.numberMonth + 1 ];

    }

    subtractNumberMonth() {

        this.numberMonth = this.months[ this.numberMonth - 1 ];

    }
    
    
}