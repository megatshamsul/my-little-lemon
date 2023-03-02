import { useReducer, useState } from 'react';
import BookingForm from './../components/BookingForm';
import ConfirmedBooking from './../components/ConfirmedBooking';
import classes from './../css/Common.module.css';
import imgReservations from './../assets/restaurant.jpg';

const initialTimes = [
    { value: "17:00" },
    { value: "18:00" },
    { value: "19:00" },
    { value: "20:00" },
    { value: "21:00" },
    { value: "22:00" },
];
let updatedTimes = [];

const reducer = (state, action) => {
    return action;
};

function Reservations() {
    const [times, dispatch] = useReducer(reducer, initialTimes);
    let selResDate = (new Date()).toISOString().split('T')[0];
    const [ifSubmit, setIfSubmit] = useState(false);
    const [refNo, setRefNo] = useState("");

    const reIntializeTimes = (selResDate) => {
        updatedTimes = (window['fetchLocalAPI'](selResDate)).map(value => ({value})); //convert array to array of objects
        dispatch(updatedTimes);
    }

    const handleSubmit = (submitData) => {
        console.log(submitData);
        if (window['submitLocalAPI'](submitData)) {
            setIfSubmit(true);
            let num = Math.floor((Math.random() * 10000) + 1);    //random number between 0 & 10000
            setRefNo(num.toString().padStart(5, '0'));  //pad '0' for 5 chars
        }
        else
            alert("Error submitting the form!");
    };

    function selectResDate(enteredResDate) {
        reIntializeTimes(enteredResDate);
    }

    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.pageText}>Reservations</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2}>
                <div>
                    <img src={imgReservations} alt="Reservations" title="Little Lemon Restaurant restaurnt" className={classes.image}></img>
                </div>
                <div></div>
                <div>
                    {!ifSubmit ? 
                        <BookingForm availableTimes={times} selectedResDate={selectResDate} onSubmit={handleSubmit} />
                        : 
                        <ConfirmedBooking selectedDate={selResDate} refNo={refNo} />
                    }
                </div>
            </div>
        </>
    );
};

export default Reservations;