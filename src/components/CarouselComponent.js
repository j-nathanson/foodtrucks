import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../redux/carouselSlice'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

function CarouselComponent() {
    const activeIndex = useSelector(state => state.carouselReducer.activeIndex);
    const carouselItems = useSelector(state => state.carouselReducer.carouselItems)
    const carouselLength = carouselItems.length;

    const dispatch = useDispatch();

    const next = () => {
        activeIndex === carouselLength - 1
            ? dispatch(setActiveIndex(0))
            : dispatch(setActiveIndex(activeIndex + 1))
    }
    const previous = () => {
        activeIndex === 0
            ? dispatch(setActiveIndex(carouselLength - 1))
            : dispatch(setActiveIndex(activeIndex - 1))
    }

    const handleSelect = (selectedIndex, e) => {
        dispatch(setActiveIndex(selectedIndex));
    }
    const slides = carouselItems.map((item) => {
        return (
            <CarouselItem key={item.src}>
                <img
                    src={item.src}
                    alt={item.altText}
                />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    })

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            next={next}
            previous={previous}
            ride='carousel'
        >
            <CarouselIndicators
                items={carouselItems}
                activeIndex={activeIndex}
                onClickHandler={handleSelect}
            />
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    );
}

export default CarouselComponent