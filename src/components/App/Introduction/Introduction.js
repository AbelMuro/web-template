import React from 'react';
import styles from './styles.module.css';

function Introduction () {

    return(
        <section className={styles.background}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Sample text. Click to select the text box. 
                    Click again or double click to start editing the text.
                </p>
                <p className={styles.imageCredit}>
                    Image from  
                    <a className={styles.freepik} 
                        href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword">
                        {" "}FREEPIK
                    </a>
                </p>
                <h1 className={styles.purpleBox}>
                    We design People Inspired Experiences 
                    that create positive change in people's lives.
                </h1>
            </div>

        </section>

    )

}

export default Introduction;