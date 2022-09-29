import React from 'react';
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';
import TextBoxes from './TextBoxes';
import DesignerPortfolio from './DesignerPortfolio';
import ImageCarousel from './ImageCarousel';
import './styles.css';

function App(){

    return(
    <>
        <NavigationBar/>
        <Introduction/>
        <TextBoxes/>
        <DesignerPortfolio/>
        <ImageCarousel/>
    </>
    )

}

export default App;