import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ></input>

            <h1>Hey {counter}</h1>

            <button onClick={() => { dispatch({ type: "SIGN_IN" }) }}>SIGN IN</button>
        </div>
    )
};

export default Search;