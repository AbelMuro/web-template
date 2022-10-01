import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import referenceOne from './images/referenceOne.png';
import referenceTwo from './images/referenceTwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';


function Testimonials(){
    const tracker = useRef();

    function moveTracker(currentSlide, prevOrNextSlide) {
        let newTrackerPosition;
        currentSlide.classList.remove(styles.currentSlide)
        prevOrNextSlide.classList.add(styles.currentSlide);
        newTrackerPosition = getComputedStyle(prevOrNextSlide).left
        tracker.current.style.left = newTrackerPosition;
    }

    const changeSlide = (e) => {
        const leftOrRight = e.target.classList.toString();
        let currentSlide = document.querySelector("." + styles.currentSlide);

        if(leftOrRight == styles.arrowBackgroundLeft){
            let prevSlide = currentSlide.previousSibling;
            if(prevSlide)
                moveTracker(currentSlide, prevSlide);
        }

        else {
            let nextSlide = currentSlide.nextSibling;
            if(nextSlide)
                moveTracker(currentSlide, nextSlide);
        }
    }

    const changeSlideBasedOnDot = (e) => {
        let moveTrackerThisAmount;
        let clickedDot = e.target.closest("." + styles.dot);
        if(!clickedDot) return;
        
        moveTrackerThisAmount = getComputedStyle(clickedDot).left;
        tracker.current.style.left = moveTrackerThisAmount;

        const allSlides = Array.from(tracker.current.children);

        allSlides.forEach((slide) => {
            slide.classList.remove(styles.currentSlide)
        })

        allSlides.forEach((slide) => {
            if(getComputedStyle(slide).left == getComputedStyle(clickedDot).left){
                 slide.classList.add(styles.currentSlide);
            }
        })
    }

    const onResize = () => {
        if(tracker.current.style.left != "0px")
            tracker.current.style.left = '0px';
    }

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => {window.removeEventListener("resize", onResize)}
    })

    return(
        <section className={styles.background}>
            <h1 className={styles.testimonials}>
                Testimonials
            </h1>

            <div className={styles.container}>                

                <div className={styles.window}>
                    <div className={styles.tracker} ref={tracker}>
                        <div className={[styles.slide, styles.currentSlide].join(" ")} id={styles.slidePositionOne}>
                            <img src={referenceOne} className={styles.slideImage}/>
                            <p className={styles.desc}>
                                "Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris."                                
                            </p>
                            <h2 className={styles.title}>
                                Samuel Schick
                            </h2>
                            <p className={styles.position}>
                                President, CEO
                            </p>
                        </div>
                        <div className={styles.slide} id={styles.slidePositionTwo}>
                            <img src={referenceTwo} className={styles.slideImage}/>
                            <p className={styles.desc}>
                                "Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco."                            
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
                <div className={styles.arrowBackgroundLeft} onClick={changeSlide}>
                    <span className={styles.eventBubbling}>
                       <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowLeft}/> 
                    </span>
                </div>

                <div className={styles.arrowBackgroundRight} onClick={changeSlide}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/> 
                    </span>                   
                </div>

                <div className={styles.dotNav} onClick={changeSlideBasedOnDot}>
                    <div className={styles.dot} id={styles.slidePositionOne}></div>
                    <div className={styles.dot} id={styles.slidePositionTwo}></div>
                </div> 
            
            </div>

        </section>
        )

}

export default Testimonials;
