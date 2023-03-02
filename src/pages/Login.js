import classes from './../css/Common.module.css';
import imgLogin from './../assets/Mario and Adrian b.jpg';

function Login() {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.pageText}>Login</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2}>
                <div>
                    <img src={imgLogin} alt="Login" title="Mario and Adrian" className={classes.image}></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Login;