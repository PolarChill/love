import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Carousel.css';

/* 轮播图片组件 */
function CarouselImage(props) {
  let { imageSrc, currentIndex, enterDelay, leaveDelay, name, component } = props;

  return (
    <ul className="carousel-image">
      <TransitionGroup className="carousel-image-item" component={component}>
        <CSSTransition // appear
          in={true}
          timeout={{ enter: enterDelay, exit: leaveDelay }}
          classNames={name} // unmountOnExit
          key={imageSrc[currentIndex]}>
          <img src={imageSrc[currentIndex]} alt="" />
        </CSSTransition>
      </TransitionGroup>
    </ul>
  );
}

export default CarouselImage;
