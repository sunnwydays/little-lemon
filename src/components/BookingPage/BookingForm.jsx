import { useState } from 'react';
import PropTypes from 'prop-types';

BookingForm.propTypes = {
    availableTimes: PropTypes.array,
    dispatch: PropTypes.func,
    submitForm: PropTypes.func
};

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('')    //may need default values
    
    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value)
        setDate(newDate.toISOString().split('T')[0])
        dispatch({ type: 'UPDATE_TIMES', date: newDate })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        submitForm(e) //should be form data but whatever, it always returns true
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={time} onChange={e => setTime(e.target.value)}>
                {/* {console.log("avail", availableTimes)} */}
                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                value={guests}
                min="1"
                max="10"
                onChange={e => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" aria-label="On Click" />
        </form>
    );
}