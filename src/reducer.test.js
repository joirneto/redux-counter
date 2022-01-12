import reducer from './reducer'

test("Reducer - Increment", ()=>{
    const initialState = {
        count:0
    }
    const action = {type:'INCREMENT', value:10}
    const state = reducer(initialState, action)

    expect(state).toEqual({count:10})
})

test("Reducer = Decrement", ()=>{
    const initialState = {
        count:0
    }
    const action = {type: 'DECREMENT', value: 1}
    const state = reducer(initialState, action)

    expect(state).toEqual({count:-1})
})