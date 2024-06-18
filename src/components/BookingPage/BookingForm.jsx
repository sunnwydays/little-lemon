import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';

BookingForm.propTypes = {
    availableTimes: PropTypes.array,
    dispatch: PropTypes.func,
    submitForm: PropTypes.func
};

const sum = (a,b) => a + b;

const bookingValidation = yup.object().shape({
    date: yup.date().min(new Date(), 'You cannot reserve a table for the past!').required('Date is required'),
    time: yup.string().required('Booking time is required'),
    guests: yup.number().integer().required('Number of guests is required').min(1, 'There must be at least 1 guest').max(12, 'Please contact us for parties of 13 or more'),
    occasion: yup.string().oneOf(['Regular', 'Birthday', 'Anniversary', 'Victory'], 'Invalid occasion')
});

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: 'Regular'
        },
        validationSchema: bookingValidation,
        onSubmit: (values, { setSubmitting }) => {
            dispatch({ type: 'UPDATE_TIMES', date: new Date(values.date) });
            submitForm(values);
            setSubmitting(false);
        }
    });

    const isFormUntouched = () => {
        return Object.keys(formik.values).every(
            key => formik.values[key] === formik.initialValues[key]
        );
    };

    const isDisabled = isFormUntouched() || !formik.isValid || formik.isSubmitting || Object.keys(formik.errors).length > 0;

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Booking Details</h2>
            <label htmlFor="date">Date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.date && formik.touched.date ? 'input-error' : ''}
            />
            {formik.errors.date && formik.touched.date && <p className="input-error-message">{formik.errors.date}</p>}

            <label htmlFor="time">Time</label>
            <select
                id="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.time && formik.touched.time ? 'input-error' : ''}
            >
                <option></option>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {formik.errors.time && formik.touched.time && <p className="input-error-message">{formik.errors.time}</p>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                value={formik.values.guests}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min="1"
                max="12"
                className={formik.errors.guests && formik.touched.guests ? 'input-error' : ''}
            />
            {formik.errors.guests && formik.touched.guests && <p className="input-error-message">{formik.errors.guests}</p>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formik.values.occasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.occasion && formik.touched.occasion ? 'input-error' : ''}
            >
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Victory</option>
            </select>
            {formik.errors.occasion && formik.touched.occasion && <p className="input-error-message">{formik.errors.occasion}</p>}

            <button type="submit" disabled={!formik.isValid || formik.isSubmitting} aria-label="On Click" className={!isDisabled ? "" : "disabled"}>
                Reserve
            </button>
        </form>
    );
}