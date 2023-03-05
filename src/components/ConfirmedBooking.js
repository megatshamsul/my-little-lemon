import classes from './../css/ConfirmedBooking.module.css';

function ConfirmedBooking(props) {
    return (
        <>
            <div className={classes.flexContainer1} aria-label="confirmed-booking-details">
                <div className={classes.title} aria-label="confirmed-booking-date-time">It's confirmed, we'll see you on {props.selectedDate} at {props.selectedTime}</div>
                <div className={classes.subTitle} aria-label="confirmed-booking-refno">Reference Number: {props.refNo}</div>
                <div className={classes.subTitle} aria-label="confirmed-booking-contact-us">If you have any questions, just contact us!</div>
            </div>
        </>
    );
};

export default ConfirmedBooking;