import classes from './../css/Testimonials.module.css';
import imgTestimonials1 from './../assets/IMG_20170427_1.jpg';
import imgTestimonials2 from './../assets/IMG_20170110_1.jpg';
import imgTestimonials3 from './../assets/20230304_005014.png';
import imgTestimonials4 from './../assets/20230304_005233.png';

function Testimonials() {
    return (
        <>
            <div className={classes.blankLine}></div>
            <div className={classes.flexContainer1} aria-label="testimonials-section">
                <div className={classes.pageText} aria-label="testimonials-title">Testimonials</div>
            </div>
            <div className={classes.flexContainer2} aria-label="testimonials-details-section">
                <div className={classes.testimonialsCard} aria-label="testimonials1-section">
                    <div className={classes.flexContainer3}>
                        <div>
                            <img src={imgTestimonials1} alt="Testimonials1" title="Testimonials1" className={classes.image} aria-label="Testimonials1"></img>
                        </div>
                        <div>
                            <div className={classes.flexContainer4}>
                                <div className={classes.detailsText}>Title1</div>
                                <div className={classes.detailsText}>Desc1</div>
                                <div className={classes.detailsText}>From1</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonialsCard} aria-label="testimonials2-section">
                    <div className={classes.flexContainer3}>
                        <div>
                            <img src={imgTestimonials2} alt="Testimonials2" title="Testimonials2" className={classes.image} aria-label="Testimonials2"></img>
                        </div>
                        <div>
                            <div className={classes.flexContainer4}>
                                <div className={classes.detailsText}>Title2</div>
                                <div className={classes.detailsText}>Desc2</div>
                                <div className={classes.detailsText}>From2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonialsCard} aria-label="testimonials3-section">
                    <div className={classes.flexContainer3}>
                        <div>
                            <img src={imgTestimonials3} alt="Testimonials3" title="Testimonials3" className={classes.image} aria-label="Testimonials3"></img>
                        </div>
                        <div>
                            <div className={classes.flexContainer4}>
                                <div className={classes.detailsText}>Title3</div>
                                <div className={classes.detailsText}>Desc3</div>
                                <div className={classes.detailsText}>From3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonialsCard} aria-label="testimonials4-section">
                    <div className={classes.flexContainer3}>
                        <div>
                            <img src={imgTestimonials4} alt="Testimonials4" title="Testimonials4" className={classes.image} aria-label="Testimonials4"></img>
                        </div>
                        <div>
                            <div className={classes.flexContainer4}>
                                <div className={classes.detailsText}>Title4</div>
                                <div className={classes.detailsText}>Desc4</div>
                                <div className={classes.detailsText}>From4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Testimonials;