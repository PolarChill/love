import React, { PropTypes } from 'react';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import './Carousel.css';
// import CSSTransitionGroup from 'react-transition-group';

// /* 定义参数类型 */
// const propTypes = {
//   imageSrc: PropTypes.array.isRequired,
//   currentIndex: PropTypes.number.isRequired,
//   enterDelay: PropTypes.number.isRequired,
//   leaveDelay: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   component: PropTypes.string.isRequired
// };

/* 轮播图片组件 */
function CarouselImage(props) {
  let { imageSrc, currentIndex, enterDelay, leaveDelay, name, component } = props;

  return (
    <ul className="carousel-image">
      <TransitionGroup component={component}>
        <CSSTransition timeout={1500} classNames={name}>
          <img src={imageSrc[currentIndex]} key={imageSrc[currentIndex]} />
        </CSSTransition>
      </TransitionGroup>
    </ul>
  );
}

// CarouselImage.propTypes = propTypes;

export default CarouselImage;