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
    const [ifSubmit, setIfSubmit] = useState(false);
    const [refNo, setRefNo] = useState("");
    const [resDate, setResDate] = useState((new Date()).toISOString().split('T')[0]);
    const [resTime, setResTime] = useState("");

    const reIntializeTimes = (selResDate) => {
        setResDate(selResDate);
        updatedTimes = (window['fetchLocalAPI'](selResDate)).map(value => ({value})); //convert array to array of objects
        dispatch(updatedTimes);
    }

    const handleSubmit = (submitData) => {
        // if (window['submitLocalAPI'](submitData)) {
        //     //console.log(submitData);    //submitData:{resDate: '2023-03-09', resTime: '18:00', resGuests: '2', resOccasion: 'Birthday'} [[Prototype]]:Object
        //     setIfSubmit(true);
        //     let num = Math.floor((Math.random() * 10000) + 1);    //random number between 0 & 10000
        //     setRefNo(num.toString().padStart(5, '0'));  //pad '0' for 5 chars
        //     let data = Object.values(submitData);
        //     //console.log(data);  //0:{resDate: '2023-03-09', resTime: '18:00', resGuests: '2', resOccasion: 'Birthday'} length:1 [[Prototype]]:Array(0)
        //     setResTime(data[0]["resTime"]);
        // }
        // else
        //     alert("Error submitting the form!");
        if (window['submitLocalAPI'](submitData)) {
            fetch(
                'https://little-lemon-restaurant-46d49-default-rtdb.asia-southeast1.firebasedatabase.app//reservations.json',
                {
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
                }
            )
            .then((response) => response.json())
            .then((data) => {
                let resData = Object.values(data);
                setRefNo(resData[0]);
                resData = Object.values(submitData);
                setResTime(resData[0]["resTime"]);
                setIfSubmit(true);
            })
            .catch(error => {
                //console.log(error.message);
                alert("Error fetching data! Please try again later.");
            });
        }
        else
            alert("Error submitting the form! Please try again later.");
    };

    function selectResDate(enteredResDate) {
        reIntializeTimes(enteredResDate);
    }

    return (
        <>
            <div className={classes.flexContainer1} aria-label="reservations-page">
                <div></div>
                <div className={classes.pageText} aria-label="reservations-title">Reservations</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2} aria-label="reservations-form">
                <div>
                    <img src={imgReservations} alt="Reservations" title="Little Lemon Restaurant restaurnt" className={classes.image} 
                        aria-label="reservations-image"></img>
                </div>
                <div></div>
                <div aria-label="reservations-details">
                    {!ifSubmit ? 
                        <BookingForm availableTimes={times} selectedResDate={selectResDate} onSubmit={handleSubmit} />
                        : 
                        <ConfirmedBooking selectedDate={resDate} selectedTime={resTime} refNo={refNo} />
                    }
                </div>
            </div>
        </>
    );
};

export default Reservations;