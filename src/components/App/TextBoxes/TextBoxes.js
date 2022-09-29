import React from 'react';
import styles from './styles.module.css';

function TextBoxes() {

    return(
        <ol className={styles.container}>
            <div className={styles.background}>
                <li data-value="1" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>
            </div>
                <li data-value="2" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>                

                <li data-value="3" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>                


                <li data-value="4" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>                

                <li data-value="5" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>                
            <div className={styles.background}>
                <li data-value="6" className={styles.textbox}>
                Recruitment Agency that strives to help businesses 
                put together a staff of highly efficient and skilled 
                professionals, and also serve employees by opening up 
                new vistas of job opportunities for them.
                </li>                
            </div>
        </ol>
    )
}

export default TextBoxes;