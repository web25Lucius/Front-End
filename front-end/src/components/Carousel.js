import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import cook from './img/cook.jpg'
import plant from './img/plant.jpg'
import code from  './img/code.jpg'


const items = [
  {
    src: {cook},
    altText: 'I never cook, but I made this amazing meal for our aniversary.',
    caption: 'I never cook.  Look what I made my partner for our anniversary.',
    header: 'How To: Cook like a chef',
    key: '1'
  },
  {
    src: {plant},
    altText: 'living plant, proof you can learn how to get a green thumb',
    caption: 'this is the first plant I did not kill.',
    header: 'How To: Grow a Green Thumb',
    key: '2'
  },
  {
    src: {code},
    altText: 'computer programming',
    caption: 'I made my own webpage.',
    header: 'How To: build a single page application',
    key: '3'
  }
];

const Carousel = (props) => <UncontrolledCarousel items={items} />;

export default Carousel;