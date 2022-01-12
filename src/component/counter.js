import React from "react"
import { connect } from "react-redux";
import { decrement, increment } from "../actions";


const Counter = ({count, increment, decrement}) =>{
    return(
       <div>
           <p>Contador {count}</p>
           <div>
               <button onClick={() => increment(1)}>+</button><br></br>
               <button onClick={() => decrement(1)} >-</button>
           </div>
       </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)