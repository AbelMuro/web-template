import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import referenceOne from './images/referenceOne.png';
import referenceTwo from './images/referenceTwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';


function ImageCarousel(){
    const allSlides = useRef();

    useEffect(() => {


    })


    return(
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.window}>

                    <div className={styles.tracker} ref={allSlides}>
                        <div className={[styles.slideContainer, styles.currentSlide].join(" ")}>
                            <img src={referenceOne} className={styles.slideImage}/>
                            <p className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.                                
                            </p>
                            <h2 className={styles.title}>
                                Samuel Schick
                            </h2>
                            <p className={styles.position}>
                                President, CEO
                            </p>
                        </div>
                        <div className={styles.slideContainer}>
                            <img src={referenceTwo} className={styles.slideImage}/>
                            <p className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.                                
                            </p>
                            <h2 className={styles.title}>    
                                Jennie Roberts
                            </h2>
                            <p className={styles.position}>
                                Top manager
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.dotNav}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </section>
        )

}

export default ImageCarousel;