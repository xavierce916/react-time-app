import { Day } from "./Day";
import { Hour } from "./Hour";
import { Minute } from "./Minute";
import { Month } from "./Month";
import { Second } from "./Second";
import { Year } from "./Year";

export class Date_{

    constructor( jsDate ){
         
        this.day        =  jsDate ? new Day(jsDate.getDay(), jsDate.getDate()) : '';
        this.month      =  jsDate ? new Month(jsDate.getMonth() ) : '';
        this.year       =  jsDate ? new Year(jsDate.getFullYear()) : '';
        this.hour       =  jsDate ? new Hour ((jsDate.getHours())) : '';
        this.minute     =  jsDate ? new Minute (jsDate.getMinutes()) : '';
        this.second     =  jsDate ? new Second (jsDate.getSeconds()) : '';
    
    }

}