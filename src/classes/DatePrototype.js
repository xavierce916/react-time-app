import { Date_ } from "./Date";

export class DatePrototype {

    constructor(proto){
        this.proto = proto;
        return this.clone();
    }


    clone() {

        const date = new Date_();

        date.day        = {     ...this.proto.day, 
                                addNumberDay: this.proto.day.addNumberDay,
                                subtractNumberDay: this.proto.day.subtractNumberDay,
                                addNameDay: this.proto.day.addNameDay,
                                subtractNameDay: this.proto.day.subtractNameDay
                          };

        date.month      = { ...this.proto.month };
        date.year       = { ...this.proto.year };

        date.hour       = {     ...this.proto.hour, 
                                addNumberHour: this.proto.hour.addNumberHour, 
                                subtractHour: this.proto.hour.subtractHour 
                          };

        date.minute     = { ...this.proto.minute };
        date.second     = { ...this.proto.second };

        return date;
    }
}