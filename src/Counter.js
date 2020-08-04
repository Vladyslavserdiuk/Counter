import React from 'react';


function Counter(props) {
    return (
        <div>
            <button onClick={()=>props.plus(props.index, 1)}>+1</button>
            <button onClick={()=>props.plus(props.index, 2)}>+2</button>
            <button onClick={()=>props.plus(props.index, 3)}>+3</button>
            {props.count}
            <button onClick={()=>props.plus(props.index, -1)}>-1</button>
            <button onClick={()=>props.plus(props.index, -2)}>-2</button>
            <button onClick={()=>props.plus(props.index, -3)}>-3</button>
            <button onClick={()=>props.delete(props.index)}>Delete</button>
            <button onClick={()=>props.reset(props.index)}>Reset</button>
        </div>
    );
}

export default Counter;
