import React from 'react';
import styles from './styles.module.css';
import bumpingFistsImage from  './images/bumping fists.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';

    const theme = createTheme({
        palette: {
            purple:{
                main: '#9884a9',
                contrastText: '#FFFFFF'
            }
        }
    })




function DesignerPortfolio() {
    return(
        <>
            <div className={styles.header}> 
                <p className={styles.greeting}>
                    Hello!
                </p>
                <p className={styles.desc}> 
                    I'm a creative, multi talented, graphic designer
                </p>
            </div>
        <section className={styles.outerContainer}>
            
            <div className={styles.container}>
                <div className={styles.designerInfo}>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            N A M E
                        </p>
                        <p className={styles.info}>
                            Abel Muro
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            B I R T H D A Y
                        </p>
                        <p className={styles.info}>
                            07. 22. 1993
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            R O L E
                        </p>
                        <p className={styles.info}>
                            Front End Developer
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            E M A I L
                        </p>
                        <p className={styles.info}>
                            developer@example.com
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            P H O N E
                        </p>
                        <p className={styles.info}>
                            (123) 456 7899
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            L O C A T I O N
                        </p>
                        <p className={styles.info}>
                            San Francisco, USA
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            I N T E R E S T S
                        </p>
                        <p className={styles.info}>
                            Games, Programming, Working out
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.title}>
                            S O C I A L
                        </p>
                        <p className={styles.info} id={styles.socialMedia}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                            <FontAwesomeIcon icon={faYoutube} className={styles.icon}/>
                        </p>
                    </div>                
                </div>

                <img src={bumpingFistsImage} className={styles.designerImage}/>

                <div className={styles.stats}>
                    <div className={styles.awardsWon}>
                        <p className={styles.statsTitle}>
                            A W A R D S&nbsp;&nbsp; W O N
                        </p>
                        <p className={styles.data}>
                            17
                        </p>
                    </div>
                    <div className={styles.xpYears}>
                        <p className={styles.statsTitle}>
                            X P&nbsp;&nbsp; Y E A R S
                        </p>
                        <p className={styles.data}>
                            12+
                        </p>
                    </div>
                    <div className={styles.clients}>
                        <p className={styles.statsTitle}>
                            C L I E N T S
                        </p>
                        <p className={styles.data}>
                            108
                        </p>
                    </div>
                    <div className={styles.projects}>
                        <p className={styles.statsTitle}>
                            P R O J E C T S
                        </p>
                        <p className={styles.data}>
                            150
                        </p>
                    </div>
                </div>
                
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="purple" className={styles.MUIbutton}>DOWNLOAD CV</Button> 
                </ThemeProvider>
                
            </div>        
        </section>
        
        
        
        
        </>

    )
}

export default DesignerPortfolio;