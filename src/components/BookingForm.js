import { useState, useRef } from 'react';
import classes from './../css/BookingForm.module.css';

function BookingForm(props) {
    const resDateRef = useRef();
    const resTimeRef = useRef();
    const resGuestsRef = useRef();
    const resOccasionRef = useRef();
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState("");
    const [resOccasion, setResOccasion] = useState("");
    const isDisabled = resDate.length <=0 || resTime.length <=0 || resGuests.length <=0 || resOccasion.length <=0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure to submit this reservation?")) {
            const enteredResDate= resDateRef.current.value;
            const enteredResTime = resTimeRef.current.value;
            let currDate = new Date();
            let selDate = new Date(enteredResDate + " " + enteredResTime);
            const enteredResGuests = resGuestsRef.current.value;
            const enteredResOccasion = resOccasionRef.current.value;
            if (selDate > currDate) {
                const submitData = {
                    resDate: enteredResDate,
                    resTime: enteredResTime,
                    resGuests: enteredResGuests,
                    resOccasion: enteredResOccasion,
                };
                props.onSubmit({submitData});
            }
            else {
                alert("Please select future date for reservations.")
            }
        }
    }

    function handleChangeResDate(event) {
        setResDate(event.target.value);
        props.selectedResDate(resDateRef.current.value);
    }

    return (
        <>
            <form className={classes.bookingForm} onSubmit={handleSubmit}>
                <div className={classes.bookingFields} aria-label="choose-date-section">
                    <div aria-label="label-choose-date">
                        <label htmlFor="resDate" aria-label="label-choose-date">Choose date</label>
                        <span>*</span>
                    </div>
                    <div aria-label="input-choose-date">
                        <input type="date" id="resDate" required 
                            onChange={handleChangeResDate} 
                            ref={resDateRef} 
                            aria-label="Select reservation date" aria-required="true" />
                    </div>
                </div>
                <div className={classes.bookingFields} aria-label="choose-time-section">
                    <div aria-label="label-choose-time">
                        <label htmlFor="resTime" aria-label="label-choose-time">Choose time</label>
                        <span>*</span>
                    </div>
                    <div aria-label="input-choose-time">
                        <select id="resTime" required 
                            onChange={event => setResTime(event.target.value)} 
                            ref={resTimeRef} 
                            aria-label="Select reservation time" aria-required="true" >
                            <option data-testid="options-resTime"></option>
                            {props.availableTimes.map((times) => <option data-testid="options-resTime" 
                                key={times.value} value={times.value}>{times.value}</option>)}
                        </select>
                    </div>
                </div>
                <div className={classes.bookingFields} aria-label="number-of-guests-section">
                    <div aria-label="label-num-of-guests">
                        <label htmlFor="resGuests" aria-label="label-num-of-guests">Number of guests</label>
                        <span>*</span>
                    </div>
                    <div aria-label="input-num-of-guests">
                        <input type="number" min="1" max="10" id="resGuests" required 
                            onChange={event => setResGuests(event.target.value)} 
                            ref={resGuestsRef} 
                            aria-label="Select number of guests" aria-required="true" />
                    </div>
                </div>
                <div className={classes.bookingFields} aria-label="choose-occasion-section">
                    <div aria-label="label-occasion">
                        <label htmlFor="resOccasion" aria-label="label-occasion">Occasion</label>
                        <span>*</span>
                    </div>
                    <div aria-label="input-occasion">
                        <select id="resOccasion" required 
                            onChange={event => setResOccasion(event.target.value)} 
                            ref={resOccasionRef} 
                            aria-label="Select 0ccasion" aria-required="true">
                            <option></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className={classes.blankLine}></div>
                <div aria-label="submit-button-section">
                    <button type="submit" className={classes.buttons} 
                        aria-label="Click to submit your reservation" 
                        disabled={isDisabled}>Make Your Reservation</button>
                </div>
            </form>
        </>
    );
};

export default BookingForm;