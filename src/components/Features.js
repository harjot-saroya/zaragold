import * as React from 'react';
import Container from '@mui/material/Container';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { productJson } from '../photos/photos';

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

const slideImages = [productJson.chai,productJson.chickenLollipop,productJson.beetRoot];

export default function Features() {
console.log(slideImages)
  return (
    <Container id="features" sx={{ pt: { xs: 8, sm: 16 } }}>
      <div className="slide-container">
        <Slide slidesToShow={2}>
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