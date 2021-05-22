import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState( 0 );
    //handleAdd
        const handleAdd = (e) =>{
            //console.log(e);
            setCounter((c) => c + 1);
        }
        const handleRest = (e)=>{
            setCounter((c)=> value);
        }
        const handleDecr = (e)=>{
            setCounter((c)=> c - 1);
        }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>Reset</button>
            <button onClick={handleDecr}>-1</button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;