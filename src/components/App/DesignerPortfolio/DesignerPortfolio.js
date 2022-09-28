import React from 'react';
import styles from './styles.module.css';

function DesignerPortfolio() {
    return(
        <section className={styles.container}>
            <h1 className={styles.header}> 
                <p className={styles.greeting}>
                    Hello!
                </p>
                <p className={styles.desc}> 
                    I'm a creative Front-end developer
                </p>
            </h1>
        </section>
    )
}

export default DesignerPortfolio;