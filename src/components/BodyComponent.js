import React from 'react';
import Carousel1 from '../img/mysore1.jpg';
import Carousel2 from '../img/mysore2.jpg';
import { Carousel } from 'react-responsive-carousel';

function BodyComponent(){
  return (

    <div>
    <Carousel  autoPlay  transitionTime={5000}  showThumbs={false}>
        <div>
            <img src={Carousel1 } height= "520" width = "-10"/>
            <p className="legend">Mysuru Aramane</p>
        </div>
        <div>
            <img src={Carousel2 }  height= "520" width = "-10" />
            <p className="legend">Chamundi Temple</p>
        </div>

    </Carousel>
    </div>

  );

}

export default BodyComponent;
