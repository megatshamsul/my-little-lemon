import classes from './../css/Common.module.css';
import imgOrder from './../assets/greek salad.jpg';

function Order() {
    return (
        <>
            <div className={classes.flexContainer1} aria-label="order-online-page">
                <div></div>
                <div className={classes.pageText} aria-label="order-online-title">Order Online</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2} aria-label="order-online-page-image">
                <div>
                    <img src={imgOrder} alt="Order" title="Greek Salad" className={classes.image} aria-label="order-online-image"></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Order;