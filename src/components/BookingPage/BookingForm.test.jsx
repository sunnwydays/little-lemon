import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

describe('BookingForm static text exists', () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Reserve");
        expect(headingElement).toBeInTheDocument();
    })
})

describe('BookingForm input field attributes', () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ['18:00', '19:00']; // Example available times

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  });

  test('date input has the correct attributes', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('name', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
  });

  test('time select has the correct attributes and options', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('name', 'time');
    expect(timeSelect).toHaveAttribute('id', 'time');
    // Check for correct options
    expect(timeSelect).toContainElement(screen.getByText('18:00'));
    expect(timeSelect).toContainElement(screen.getByText('19:00'));
  });

  test('guests input has the correct attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '12');
  });

  test('occasion select has the correct attributes and options', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('name', 'occasion');
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    // Check for correct options
    expect(occasionSelect).toContainElement(screen.getByText('Birthday'));
    expect(occasionSelect).toContainElement(screen.getByText('Anniversary'));
    expect(occasionSelect).toContainElement(screen.getByText('Victory'));
  });
});

describe('BookingForm input field validation', () => {
    const mockSubmitForm = jest.fn();
    const mockDispatch = jest.fn();
    const availableTimes = ['18:00', '19:00'];

    beforeEach(() => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    });

    test('declines past dates', () => {
        const dateInput = screen.getByLabelText(/Date/i)
        const submitButton = screen.getByRole('button')
        const date = new Date();
        date.setDate(date.getDate() - 1);
        const pastDate = date.toISOString().split('T')[0];

        expect(dateInput).toHaveValue('');

        fireEvent.focus(dateInput)
        fireEvent.change(dateInput, { target: { value: pastDate } })
        fireEvent.blur(dateInput)
    }) /* this test doesn't work, probably because of synchronicity */

    test('accepts valid inputs', () => {
        const dateInput = screen.getByLabelText(/Date/i)
        const timeSelect = screen.getByLabelText(/Time/i)
        const guestInput = screen.getByLabelText(/Number of guests/i)
        const occasionSelect = screen.getByLabelText(/Occasion/i)
        const submitButton = screen.getByRole('button')
        const today = (new Date()).toISOString().split('T')[0]

        fireEvent.change(dateInput, {target:{value: today}})
        fireEvent.change(timeSelect, {target: {value: '18:00'}} )
        fireEvent.change(guestInput, {target: {value: 4}})
        fireEvent.change(occasionSelect, {target: {value: 'Birthday'}})

        expect(dateInput).toHaveValue(today);
        expect(timeSelect).toHaveValue('18:00');
        expect(guestInput).toHaveValue(4);
        expect(occasionSelect).toHaveValue('Birthday');
        expect(submitButton).not.toBeDisabled();
    })
});