import { useState } from "react";
import { Date_ } from "./classes/Date";
import { DatePrototype } from "./classes/DatePrototype";
import { Entry } from "./components/Entry";


    const date = new Date();

    const datePrototype = new Date_( date );

export const TimeApp = () => {

    const [dates, setDates] = useState([ datePrototype ])

    const handleAddEntry = ( datePrototype_ ) => {

        console.log(datePrototype_);
        const fecha = new DatePrototype( datePrototype_ );

        setDates([ ...dates, fecha ]);
    
    }

    const handleSubtractEntry = ( datePrototype_ ) => {

        const newDates = [ ...dates ];
        newDates.splice( newDates.indexOf(datePrototype_), 1 );
        setDates( newDates );
        
    }


    return (
        <div style={{textAlign: 'center', padding: '1em 0'}}> 
            <h2>
                <span style={{textDecoration: 'none'}} >
                    <span style={{color: 'gray'}} >Hora actual en</span>
                    <br />Quito, Ecuador
                </span>
            </h2>

            {
                dates.map( date => (
                    
                    <Entry 
                        fecha={ date } 
                        handleAddEntry={ handleAddEntry } 
                        handleSubtractEntry={ handleSubtractEntry } 
                        key={ Math.random() } 
                    />

                ))
            } 
            

        </div>
    )
}
