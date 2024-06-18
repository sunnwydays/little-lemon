import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
})