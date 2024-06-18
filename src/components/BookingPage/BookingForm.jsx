import { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('')
    
    const handleDateChange = (e) => {
        setDate(e.target.value)
        props.dispatch(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(availableTimes)
        submitForm(e)
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={time} onChange={e => setTime(e.target.value)}>
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

// fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date 

// submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.