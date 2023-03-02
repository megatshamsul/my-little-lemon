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
            const enteredResGuests = resGuestsRef.current.value;
            const enteredResOccasion = resOccasionRef.current.value;
            const submitData = {
                resDate: enteredResDate,
                resTime: enteredResTime,
                resGuests: enteredResGuests,
                resOccasion: enteredResOccasion,
            };
            props.onSubmit({submitData},{enteredResTime});
        }
    }

    function handleChangeResDate(event) {
        setResDate(event.target.value);
        props.selectedResDate(resDateRef.current.value);
    }

    return (
        <>
            <form className={classes.bookingForm} onSubmit={handleSubmit}>
                <div className={classes.bookingFields}>
                    <div>
                        <label htmlFor="resDate">Choose date</label>
                        <span>*</span>
                    </div>
                    <div>
                        <input type="date" id="resDate" required 
                            onChange={handleChangeResDate} 
                            ref={resDateRef} 
                            aria-label="Select reservation date" aria-required="true" />
                    </div>
                </div>
                <div className={classes.bookingFields}>
                    <div>
                        <label htmlFor="resTime">Choose time</label>
                        <span>*</span>
                    </div>
                    <div>
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
                <div className={classes.bookingFields}>
                    <div>
                        <label htmlFor="resGuests">Number of guests</label>
                        <span>*</span>
                    </div>
                    <div>
                        <input type="number" min="1" max="10" id="resGuests" required 
                            onChange={event => setResGuests(event.target.value)} 
                            ref={resGuestsRef} 
                            aria-label="Select number of guests" aria-required="true" />
                    </div>
                </div>
                <div className={classes.bookingFields}>
                    <div>
                        <label htmlFor="resOccasion">Occasion</label>
                        <span>*</span>
                    </div>
                    <div>
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
                <div>
                    <button type="submit" className={classes.buttons} 
                        aria-label="Click to submit your reservation" 
                        disabled={isDisabled}>Make Your Reservation</button>
                </div>
            </form>
        </>
    );
};

export default BookingForm;