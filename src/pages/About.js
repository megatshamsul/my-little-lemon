import classes from './../css/Common.module.css';
import imgAbout from './../assets/Mario and Adrian A.jpg';

function About() {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.pageText}>About</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2}>
                <div>
                    <img src={imgAbout} alt="About" title="Mario and Adrian" className={classes.image}></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default About;