

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];


const todoReduce = ( state = initialState, action) => {

    if ( action?.type === 'agregar' ) {
        return [...state, action.payload ];
    }
    return state;
}


let todo = todoReduce();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const addNewAction = {
    type: 'agregar',
    payload: newTodo
}

todo = todoReduce( todo, addNewAction );

console.log(`🚀 ~ todo`, todo);
