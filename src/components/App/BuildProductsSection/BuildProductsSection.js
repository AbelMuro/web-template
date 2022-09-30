import React from 'react';
import styles from './styles.module.css';
import imageOne from './images/imageOne.jpg';
import imageTwo from './images/imageTwo.jpg';
import imageThree from './images/imageThree.jpg';
import imageFour from './images/imageFour.jpg';
import imageFive from './images/imageFive.jpg';
import imageSix from './images/imageSix.jpg';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
      palette: {
            purple: {
                 main: '#9884a9',                                    
                 contrastText: '#FFFFFF'                                
            }
      }        
})



function BuildProductsSection() {
    return(
        <section className={styles.container}>
            <div className={styles.imageCollection}>
                <h1 className={styles.title}>
                    Build Great Products
                </h1>
                <div className={styles.imageBox}>
                    <img src={imageOne} className={styles.imageItem}/>                    
                </div>
                <div className={styles.imageBox}>
                    <img src={imageTwo} className={styles.imageItem}/>                    
                </div>
                <div className={styles.imageBox}>
                    <img src={imageThree} className={styles.imageItem}/>                    
                </div>
                <div className={styles.imageBox}>
                    <img src={imageFour} className={styles.imageItem}/>
                </div>
                <div className={styles.imageBox}>
                    <img src={imageFive} className={styles.imageItem}/>
                </div>
                <div className={styles.imageBox}>
                    <img src={imageSix} className={styles.imageItem}/>  
                </div>
                <p className={styles.imagesFromFreePik}>
                    Images from
                    <a className={styles.link}>
                        Freepik
                    </a>
                </p>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="purple" className={styles.button}>
                        CONTACT US
                    </Button>
                </ThemeProvider>
                
            </div>
        </section>
    )
}

export default BuildProductsSection;