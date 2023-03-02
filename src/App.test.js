import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from './pages/Reservations';
import BookingForm from './components/BookingForm';

/*
test('Renders the BookingForm heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
}); */

/*
test('BookingForm is disabled due to missing mandatory fields', () => {
  let availableTimes = [
      { value: "17:00" },
      { value: "18:00" },
      { value: "19:00" },
      { value: "20:00" },
      { value: "21:00" },
      { value: "22:00" }
  ]
  const resDate = "23/02/2023";
  const resTime = "18:00";
  const resGuests = "";
  const resOccasion = "Anniversary";
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />);
  const resDateInput = screen.getByLabelText("Choose date");
  fireEvent.change(resDateInput, {target: {value: resDate}});
  const resTimeInput = screen.getByLabelText("Choose time");
  fireEvent.change(resTimeInput, {target: {value: resTime}});
  const resGuestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(resGuestsInput, {target: {value: resGuests}});
  const resOccasionInput = screen.getByLabelText("Occasion");
  fireEvent.change(resOccasionInput, {target: {value: resOccasion}});
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
}); */

/*
test('Confirm the default value & total options of reservation times', () => {
  render(<Reservations />);
  const resTimeInput = screen.getByLabelText("Choose time");
  expect(resTimeInput.value).toBe("");  //default value ""
  let optionsresTime = screen.getAllByTestId("options-resTime");
  expect(optionsresTime).toHaveLength(7); //7 including ""
}); */

test('Reservation times updated based on changed reservation date', () => {
  render(<Reservations />);
  const resDateInput = screen.getByLabelText("Choose date");
  fireEvent.change(resDateInput, {target: {value: "2023-03-10"}});
  let optionsresTime = screen.getAllByTestId("options-resTime");
  expect(optionsresTime).toHaveLength(8); //8 including ""
});