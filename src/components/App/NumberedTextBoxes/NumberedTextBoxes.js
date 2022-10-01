import React from 'react';
import styles from './styles.module.css';

function NumberedTextBoxes() {

    return(
        <ul className={styles.container}>
                <li className={[styles.gridItem, styles.background].join(" ")}>
                    <p className={styles.number}>
                        1
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>

                </li>
                <li className={styles.gridItem}>
                    <p className={styles.number}>
                        2
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>
                </li>                
                <li className={styles.gridItem}>
                    <p className={styles.number}>
                        3
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>
                </li>                
                <li className={styles.gridItem}>
                    <p className={styles.number}>
                        4
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>

                </li>                

                <li className={styles.gridItem}>
                    <p className={styles.number}>
                        5
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>

                </li>                
                <li className={[styles.gridItem, styles.background].join(" ")}>
                    <p className={styles.number}>
                        6
                    </p>
                    <p className={styles.textbox}>
                        Recruitment Agency that strives to help businesses 
                        put together a staff of highly efficient and skilled 
                        professionals, and also serve employees by opening up 
                        new vistas of job opportunities for them.                        
                    </p>

                </li>                
        </ul>
    )
}

export default NumberedTextBoxes;