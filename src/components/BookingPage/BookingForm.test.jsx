import { render, screen } from "@testing-library/react";
import React from 'react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Occasion");
    expect(headingElement).toBeInTheDocument();
})