import React from 'react';

export default function BookingForm({ state, dispatch, availableTimes, availableTimesDispatch }) {
    const handleChange = (e) => {
        const { id, value } = e.target;
        let actionType = '';

        switch (id) {
            case 'date':
                actionType = 'SET_DATE';
                break;
            case 'time':
                actionType = 'SET_TIME';
                break;
            case 'numDiners':
                actionType = 'SET_NUM_DINERS';
                break;
            case 'occasion':
                actionType = 'SET_OCCASION';
                break;
            default:
                return;
        }
        dispatch({ type: actionType, payload: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={state.date} onChange={handleChange} />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={state.time} onChange={handleChange}>
                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}

            </select>
            <label htmlFor="numDiners">Number of guests</label>
            <input
                type="number"
                id="numDiners"
                value={state.numDiners}
                min="1"
                max="10"
                onChange={handleChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

// fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date 

// submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.