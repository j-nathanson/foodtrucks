import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { carouselReducer } from './carouselReducer';
import { cateringReducer } from './cateringReducer';
import { foodTrucksReducer } from './foodTrucksReducer';
import { TextObjectsReducer } from './textObjectsReducer';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            carousel: carouselReducer,
            catering: cateringReducer,
            foodTrucks: foodTrucksReducer,
            textObjects: TextObjectsReducer
        }),
        applyMiddleware(thunk, logger))

    return store;
}