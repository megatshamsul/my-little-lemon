import { Link } from 'react-router-dom';
import classes1 from './../css/Home.module.css';
import classes2 from './../css/Common.module.css';
import TestimonialsPage from './Testimonials';
import imgSpecials1 from './../assets/greek salad.jpg';
import imgSpecials2 from './../assets/Bruchetta.jpg';
import imgSpecials3 from './../assets/lemon dessert.jpg';

function Home() {
    const ifShowTestimonials = false;
    return (
        <>
            <div className={classes1.flexContainer1} aria-label="specials-section">
                <div></div>
                <div className={classes2.pageText} aria-label="specials-title">Specials</div>
                <div></div>
                <div></div>
                <div></div>
                <div aria-label="menu-button-section">
                    <Link to='/menu'>
                        <button className={classes1.buttons} aria-label="Click to view online menu">Online Menu</button>
                    </Link>
                </div>
            </div>
            <div className={classes1.flexContainer2} aria-label="specials-details-section">
                <div className={classes1.specialsCard} aria-label="specials1-section">
                    <img src={imgSpecials1} alt="Greek Salad" title="Specials 1" className={classes1.image} aria-label="Greek Salad"></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3} aria-label="greek-salad-details">
                        <div className={classes1.specialsTitle} aria-label="Greek Salad">Greek Salad</div>
                        <div className={classes1.specialsPrice} aria-label="Greek Salad price">$12.99</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc} aria-label="Greek Salad description">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle} aria-label="Click to order Greek Salad">
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes1.specialsCard} aria-label="specials2-section">
                    <img src={imgSpecials2} alt="Bruchetta" title="Specials 2" className={classes1.image} aria-label="Bruchetta"></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3} aria-label="bruchetta-details">
                        <div className={classes1.specialsTitle} aria-label="Bruchetta">Bruchetta</div>
                        <div className={classes1.specialsPrice} aria-label="Bruchetta price">$5.99</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc} aria-label="Bruchetta description">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle} aria-label="Click to order Bruchetta">
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes1.specialsCard} aria-label="specials3-section">
                    <img src={imgSpecials3} alt="Lemon Dessert" title="Specials 3" className={classes1.image} aria-label="Lemon Dessert"></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3} aria-label="lemon-dessert-details">
                        <div className={classes1.specialsTitle} aria-label="Lemon Dessert">Lemon Dessert</div>
                        <div className={classes1.specialsPrice} aria-label="Lemon Dessert price">$5.00</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc} aria-label="Lemon Dessert description">
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle} aria-label="Click to order Lemon Dessert">
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
            </div>
            {ifShowTestimonials ? <TestimonialsPage /> : null}
        </>
    );
};

export default Home;