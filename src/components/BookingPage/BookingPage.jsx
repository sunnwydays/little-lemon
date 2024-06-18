import BookingForm from "./BookingForm"
import restaurant from '../../assets/restaurant.jpg';
import PropTypes from 'prop-types';

BookingPage.propTypes = {
    availableTimes: PropTypes.array,
    dispatch: PropTypes.func,
    submitForm: PropTypes.func
};

export default function BookingPage(props) {
    return (
        <div className="booking-page">
            <div className="hero">
                <div className="content">
                    <div>
                        <h1>Reserve a table</h1>
                        <h2 className="markazi-32">Find a table for any occasion</h2>
                    </div>
                    <img src={restaurant} alt="restaurant" />
                </div>
            </div>
            <div className="content">
                <BookingForm
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    submitForm={props.submitForm}
                />
                <p>fname</p>
                <p>lname</p>
                <p>phone email</p>
            </div>

            <button>Reserve</button>
        </div>
    );
}