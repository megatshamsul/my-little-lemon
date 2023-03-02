import classes from './../css/ConfirmedBooking.module.css';

function ConfirmedBooking(props) {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div className={classes.title}>It's confirmed, we'll see you on {props.selectedDate}</div>
                <div className={classes.subTitle}>Reference Number: {props.refNo}</div>
                <div className={classes.subTitle}>If you have any questions, just contact us!</div>
            </div>
        </>
    );
};

export default ConfirmedBooking;