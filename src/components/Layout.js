import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';
import classes from './../css/Layout.module.css';

function Layout(props) {
  return (
    <>
      <Nav />
      <Hero />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;