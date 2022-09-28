import React from 'react';
import styles from './styles.module.css';

function Introduction () {

    return(
        <section className={styles.background}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Never forget who you were yesterday.
                    We continue to strive to achieve our 
                    dreams. So becoming better is the first step
                </p>
                <p className={styles.imageCredit}>
                    Image from  
                    <a className={styles.freepik} 
                        href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword">
                        {" "}FREEPIK
                    </a>
                </p>
                <h1 className={styles.purpleBox}>
                    We help people strive to become better.
                    Tomorrow is a version of you that will 
                    surpass you today. Hold on to that ideal.
                </h1>
            </div>

        </section>

    )

}

export default Introduction;