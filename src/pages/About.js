import classes from './../css/Common.module.css';
import imgAbout from './../assets/Mario and Adrian A.jpg';

function About() {
    return (
        <>
            <div className={classes.flexContainer1} aria-label="about-page">
                <div></div>
                <div className={classes.pageText} aria-label="about-title">About</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2} aria-label="about-page-image">
                <div>
                    <img src={imgAbout} alt="About" title="Mario and Adrian" className={classes.image} aria-label="about-image"></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default About;