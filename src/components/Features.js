import * as React from 'react';
import Container from '@mui/material/Container';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideShowImages } from '../photos/slideshow';

const slideImages = [slideShowImages.main,slideShowImages.slide1,slideShowImages.slide2,slideShowImages.slide3,slideShowImages.slide4,slideShowImages.slide5];

export default function Features() {
  const [currWidth, setWidth] = React.useState(window.innerWidth);

React.useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
   // subscribe to window resize event "onComponentDidMount"
   window.addEventListener("resize", handleResizeWindow);
   return () => {
     // unsubscribe "onComponentDestroy"
     window.removeEventListener("resize", handleResizeWindow);
   };
 }, []);
 let divStyle = {display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 backgroundSize: 'contain',
 alignItems:'center',
 height:'40em',
 marginLeft:"auto",
 marginRight:"auto",
 backgroundRepeat:'no-repeat',};

 if (currWidth < 1000){
  divStyle = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    alignItems:'center',
    height:'20em',
    marginLeft:"auto",
    marginRight:"auto",
    backgroundRepeat:'no-repeat',
    objectFit:'cover',
    width:'100%'
  }
}

  return (
    <Container id="slideShow" sx={{ pt: { xs: 8, sm: 16 }, width: {xs:'100%'} }}>
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