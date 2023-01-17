import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { owlCarousel } from "./data";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Achievement() {
  return (
   <section className="page-section bg-light" id="team">
    <title>Achievement</title>
   <div className="container">
   <OwlCarousel className="owl-theme" margin={15}  items="3"  dots loop>
    {owlCarousel.map((owlCarousel) => (
      <div className='item'>
      <a href={owlCarousel.itemURL} target={'_blank'} rel="noopener noreferrer external">
      <img src={owlCarousel.owlItemImage}  alt={owlCarousel.description} />
       <h4>{owlCarousel.title}</h4> 
       <p>{owlCarousel.description}</p>
       </a>
      </div>
    ))}
    </OwlCarousel>
   </div>
</section>
  )
}
