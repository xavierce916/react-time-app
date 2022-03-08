export class Day{
    
    days = [ 'lun', 'mar', 'mie', 'jue', 'vie' ];

    constructor( nameDay, numberDay ){
        
        this.weekDay = nameDay;
        this.nameDay = this.days[ nameDay - 1 ];
        this.numberDay = numberDay;
        
    };

    addNumberDay() {

        this.numberDay ++;

    }

    subtractNumberDay() {

        this.numberDay --;
    }
    

    addNameDay() {

        this.nameDay = this.days[ this.weekDay ];

    }

    subtractNameDay() {

        this.nameDay = this.days[ this.weekDay - 2 ];

    }

}