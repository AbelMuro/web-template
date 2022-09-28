import React from 'react';
import styles from './styles.module.css';

function Introduction () {

    return(
        <section className={styles.container}>
            <p className={styles.text}>
                Random text can appear here. 
                This doesn't hold any special meaning at all
                Just trying to make this text box a little bit
                bigger
            </p>
            <p className={styles.imageCredit}>
                Image from  
                <a className={styles.freepik} 
                    href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword">
                    {" "}FREEPIK
                </a>
            </p>
            <div className={styles.purpleBox}>
                We help people strive to become better.
                Tomorrow is a version of you that will 
                surpass you today. Hold on to that ideal.
            </div>
        </section>
    )

}

export default Introduction;