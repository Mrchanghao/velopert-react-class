import {List, Map} from 'immutable';

import types from '../actionTypes';


const reviews = (state = List(), action) => {
    switch(action.type) {
        case types.reviews.ADD_REVIEW:
            const newReview = Map(
                {
                    id: action.id,
                    item_id: action.item_id,
                    reviewer: action.reviewer,
                    text: action.text,
                    rating: action.rating,
                    flag: false
                }
            )
            return state.push(newReview);
        
        case types.reviews.DELETE_REVIEW:
            return state.filter(review => review.id !== action.id);

        case types.reviews.FLAG_REVIEW:
            return state.map(review => review.id === action.id ? Object.assign({}, reviews, {flag: action.flag}): reviews);

        case types.reviews.RATE_REVIEW:
            return state.map(review => review.id === action.id ? {...reviews, rating: action.rating} : reviews);
        default:
            return state;
    };
};

export default reviews;