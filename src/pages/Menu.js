import classes from './../css/Common.module.css';
import imgMenu from './../assets/restaurant chef B.jpg';

function Menu() {
    return (
        <>
            <div className={classes.flexContainer1} aria-label="menu-page">
                <div></div>
                <div className={classes.pageText} aria-label="menu-title">Menu</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2} aria-label="menu-page-image">
                <div>
                    <img src={imgMenu} alt="Menu" title="Restaurant Chef" className={classes.image} aria-label="menu-image"></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Menu;