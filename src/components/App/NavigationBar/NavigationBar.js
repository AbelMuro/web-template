import React from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'; 


function NavigationBar() {

    const displayMenu = () => {
        const sideMenu = document.querySelector("." + styles.sideMenu);
        sideMenu.style.left =  "0px";
        
    }

    const closeMenu = () => {
        document.querySelector("." + styles.sideMenu).style.left = "-100%";
    }

    return(
        <>
            <nav className={styles.navigation}>
                <section className={styles.hamburger} onClick={displayMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </section>
                <section className={styles.sideMenu}>
                    <FontAwesomeIcon onClick={closeMenu}className={styles.close} icon={faX}/>
                    <div className={styles.home}>Home</div>
                    <div className={styles.about}>About</div>
                    <div className={styles.contact}>Contact</div>
                </section>

            </nav>
        </>
    )
}

export default NavigationBar;