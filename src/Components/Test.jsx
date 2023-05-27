import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'
          alt="First slide"
          height='500vh'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.thehindu.com/sci-tech/agriculture/87sx5z/article30131510.ece/alternates/FREE_435/NEWS2FARMER'
          alt="Second slide"
          height='500vh'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjvFKQn2uFsh5ZfxByYukyZaeVYSDIJEnhw&usqp=CAU'
          alt="Third slide"
          height='500vh'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;