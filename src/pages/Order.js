import classes from './../css/Common.module.css';
import imgOrder from './../assets/greek salad.jpg';

function Order() {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.pageText}>Order Online</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2}>
                <div>
                    <img src={imgOrder} alt="Order" title="Greek Salad" className={classes.image}></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Order;