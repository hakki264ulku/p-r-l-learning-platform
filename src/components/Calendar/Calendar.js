import React,{useState} from 'react'
import Calendar from 'react-calendar';
 const EventInfo = ()=> {
    const [value, onChange] = useState(new Date());
    return (
        <div className="calander__wr">
             <h4>Calendar</h4>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
export default EventInfo