import * as React from 'react';
import Container from '@mui/material/Container';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideShowImages } from '../photos/slideshow';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  alignItems:'center',
  height:'40em',
  marginLeft:"auto",
  marginRight:"auto",
  backgroundRepeat:'no-repeat'
}

const slideImages = [slideShowImages.main,slideShowImages.slide1,slideShowImages.slide2,slideShowImages.slide3,slideShowImages.slide4,slideShowImages.slide5];

export default function Features() {
  return (
    <Container id="slideShow" sx={{ pt: { xs: 8, sm: 16 } }}>
      <div className="slide-container">
        <Slide slidesToShow={1} arrows={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{display:'flex',flexDirection:'row'}}>
              <img src={`${slideImage.src}`} style={{...divStyle}}/>
            </div>
          ))} 
        </Slide>
      </div>
    </Container>
  );
}