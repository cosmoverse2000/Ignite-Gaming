import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";

//REDUX and Routes
import { fetchGames } from "../actions/gameActions";
import { useDispatch } from "react-redux";



const Nav = () => {
  const inputFun = (e) => {


    setInput(e.target.value);

  }
  const dispatch = useDispatch();
  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    })
  }

  const [textInput, setInput] = useState("");
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch} >
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput}
          onChange={inputFun}
          type="text" />
        <button onClick={(e) => { e.preventDefault(); dispatch(fetchGames(textInput)); }} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
  }
`;

export default Nav;
