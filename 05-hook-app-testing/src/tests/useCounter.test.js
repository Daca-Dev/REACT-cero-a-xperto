import { renderHook, act  } from '@testing-library/react-hooks';

import { useCounter } from './../hooks/useCounter';


describe('Custom Hook - useCounter', () => {
    
    test('Se debe de tener el hook con los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    })

    test('Debe de tener un valor inicializado y funcion increment', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        expect( result.current.counter ).toBe( 100 );
        
        act( () => increment() );
        expect( result.current.counter ).toBe( 101 );
    })

    test('Funcionamiento de decrement', () => {

        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;
        
        act( () => decrement() );
        expect( result.current.counter ).toBe( 9 );
    })

    test('Funcionamiento de reset', () => {

        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;
        
        act( () => {
            increment()
            increment()
            reset()
        });
        expect( result.current.counter ).toBe( 10 );
    })
    
    
})
