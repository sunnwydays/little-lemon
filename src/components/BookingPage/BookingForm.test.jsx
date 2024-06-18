import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm submit button', () => {
    render(<BookingForm />);
    const submitButton = screen.getByValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
});