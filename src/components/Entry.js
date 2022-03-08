import { useState } from 'react'

export const Entry = ({ fecha, handleAddEntry, handleSubtractEntry }) => {

    console.log(fecha);

    const [ { day, hour, month, minute, second, year }, setFecha ] = useState( fecha );

    const handleHourChange = () => {
        
        const newHour = fecha.hour.addNumberHour();
        setFecha( { ...fecha, hour: newHour } );

    }

    const handleSubtractHourChange = () => {

        const newHour = fecha.hour.subtractHour();
        setFecha( { ...fecha, hour: newHour } );

    }

    return (
        <div className="clock large" id="clock">
            <div className="list-group-item">

                <div className="time">
                        <span className="hour">{ hour.numberHour }</span>:
                        <span className="minute">{ minute.numberMinute }</span>:
                        <span className="second">{ second.numberSecond }</span>
                </div>
                <div className="date">{ day.nameDay }, { day.numberDay }. { month.numberMonth } { year.numberYear }</div>
                <div >
                    <div>
                        <button className="btn btn-dark" onClick={ () => handleAddEntry( fecha ) }>+</button>
                        <button className="btn btn-outline-dark" onClick={ () => handleSubtractEntry( fecha ) }>-</button>
                    </div>
                    <span className="change-hour">
                        <button className="btn btn-dark" onClick={ handleHourChange }>+</button>
                        <button className="btn btn-outline-dark" onClick={ handleSubtractHourChange }>-</button>
                    </span>

                </div>
            </div>
        </div>
    )
}
