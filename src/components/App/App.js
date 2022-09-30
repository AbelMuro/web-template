import React from 'react';
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';
import NumberedTextBoxes from './NumberedTextBoxes';
import DesignerPortfolio from './DesignerPortfolio';
import Testimonials from './Testimonials';
import EleganceTextSection from './EleganceTextSection';
import BuildProductsSection from './BuildProductsSection';
import './styles.css';

function App(){

    return(
    <>
        <NavigationBar/>
        <Introduction/>
        <NumberedTextBoxes/>
        <DesignerPortfolio/>
        <Testimonials/>
        <EleganceTextSection/>
        <BuildProductsSection/>
    </>
    )

}

export default App;