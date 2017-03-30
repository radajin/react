import * as types from '../actions/ActionTypes';

const initalState = {
    number: 0,
    dummy: "dumbdumb",
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3,
    }
};

export default function counter(state = initalState, action) {

    switch(action.type) {
        case types.INCREMENT:
            // return { number: state.number + 1 };
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {
                    ...state.dumbObject,
                    u: 0
                }
            }; // 기존에 있던 state 값을 덮어 쓰게 됌
        case types.DECREMENT:
            return{
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }

}
