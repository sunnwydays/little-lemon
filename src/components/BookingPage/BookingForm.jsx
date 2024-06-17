export default function BookingForm({ state, dispatch }) {
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
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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