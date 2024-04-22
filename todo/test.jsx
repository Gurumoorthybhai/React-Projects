import React, {useState} from 'react';

export default function ComponentA() {

    const [count, setCount] = useState(0);

    function handleCounter() {
        setCount((prevCount) => prevCount+1);
    }

    return(
        <>
        <div className="parent">
            <h1>Hello World!</h1>
            <label htmlFor='input'>UserName</label>
            <input name='username' value={count} onClick={handleCounter}/>
        </div>
        </>
    )
}