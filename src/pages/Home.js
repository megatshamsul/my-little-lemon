import { Link } from 'react-router-dom';
import classes1 from './../css/Home.module.css';
import classes2 from './../css/Common.module.css';
import TestimonialsPage from './Testimonials';
import imgSpecials1 from './../assets/greek salad.jpg';
import imgSpecials2 from './../assets/Bruchetta.jpg';
import imgSpecials3 from './../assets/lemon dessert.jpg';

function Home() {
    return (
        <>
            <div className={classes1.flexContainer1}>
                <div></div>
                <div className={classes2.pageText}>Specials</div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <Link to='/menu'>
                        <button className={classes1.buttons}>Online Menu</button>
                    </Link>
                </div>
            </div>
            <div className={classes1.flexContainer2}>
                <div className={classes1.specialsCard}>
                    <img src={imgSpecials1} alt="Greek Salad" title="Specials 1" className={classes1.image}></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3}>
                        <div className={classes1.specialsTitle}>Greek Salad</div>
                        <div className={classes1.specialsPrice}>$12.99</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc}>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes1.specialsCard}>
                    <img src={imgSpecials2} alt="Bruchetta" title="Specials 2" className={classes1.image}></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3}>
                        <div className={classes1.specialsTitle}>Bruchetta</div>
                        <div className={classes1.specialsPrice}>$5.99</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc}>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes1.specialsCard}>
                    <img src={imgSpecials3} alt="Lemon Dessert" title="Specials 3" className={classes1.image}></img>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.flexContainer3}>
                        <div className={classes1.specialsTitle}>Lemon Dessert</div>
                        <div className={classes1.specialsPrice}>$5.00</div>
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsDesc}>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </div>
                    <div className={classes1.blankLine}></div>
                    <div className={classes1.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
            </div>
            <TestimonialsPage />
        </>
    );
};

export default Home;