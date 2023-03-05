import classes from './../css/Common.module.css';
import imgLogin from './../assets/Mario and Adrian b.jpg';

function Login() {
    return (
        <>
            <div className={classes.flexContainer1} aria-label="login-page">
                <div></div>
                <div className={classes.pageText} aria-label="login-title">Login</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.flexContainer2} aria-label="login-page-image">
                <div>
                    <img src={imgLogin} alt="Login" title="Mario and Adrian" className={classes.image} aria-label="login-image"></img>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Login;