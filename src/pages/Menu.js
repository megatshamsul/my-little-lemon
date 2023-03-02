import classes from './../css/Common.module.css';
import imgMenu from './../assets/restaurant chef B.jpg';

function Menu() {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.pageText}>Menu</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2}>
                <div>
                    <img src={imgMenu} alt="Menu" title="Restaurant Chef" className={classes.image}></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Menu;