import * as React from 'react';
import Container from '@mui/material/Container';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import chai from '../photos/Chai.jpg';
import beatroot from '../photos/Beatroot-Latte.jpg';
import chicken from '../photos/Chicken-Lollypop.jpg';

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

const slideImages = [
  {
    url: chai,
    caption: 'Slide 1'
  },
  {
    url: beatroot,
    caption: 'Slide 2'
  },
  {
    url: chicken,
    caption: 'Slide 3'
  },
];

export default function Features() {

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <div className="slide-container">
        <Slide slidesToShow={2}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{display:'flex',flexDirection:'row'}}>
              <img src={`${slideImage.url}`} style={{...divStyle}}/>
            </div>
          ))} 
        </Slide>
      </div>
    </Container>
  );
}