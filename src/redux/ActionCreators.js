import * as ActionTypes from './ActionTypes';
import CATERING from "../shared/catering";
import CAROUSEL from "../shared/carousel";
import FOOD_TRUCKS from '../shared/foodTrucks';
import TEXT_OBJECTS from '../shared/textObjects';


// CAROUSEL
export const fetchCarousel = () => dispatch => {
    dispatch(addCarousel(CAROUSEL));
}

export const addCarousel = carousel => ({
    type: ActionTypes.ADD_CAROUSEL,
    payload: carousel
});

// CATERING
export const fetchCatering = () => dispatch => {
    dispatch(addCatering(CATERING));
}

export const addCatering = catering => ({
    type: ActionTypes.ADD_CATERING,
    payload: catering
});

// FOOD TRUCKS
export const fetchFoodTrucks = () => dispatch => {
    console.log("fetchFoodTrucks is being called")
    dispatch(addFoodTrucks(FOOD_TRUCKS));
}

export const addFoodTrucks = foodTrucks => ({
    type: ActionTypes.ADD_FOOD_TRUCKS,
    payload: foodTrucks
});

// FOOD TRUCKS
export const fetchTextObjects = () => dispatch => {
    dispatch(addTextObjects(TEXT_OBJECTS));
}

export const addTextObjects = textObjects => ({
    type: ActionTypes.ADD_TEXT_OBJECTS,
    payload: textObjects
});

