
export const todoReducer = (state = [], action) => {

    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];

        case 'remove':
            return state.filter( t => t.id !== action.payload );

        case 'toogle':
            return state.map( todo => 
                ( todo.id === action.payload )
                ? { ...todo, done: !todo.done }
                : todo
            )

        case 'toogle-old':
            return state.map( t => {
                if ( t.id === action.payload ) {
                    return {...t, done: !t.done};
                } else {
                    return t;
                }
            })

        default:
            return state;
    }
}