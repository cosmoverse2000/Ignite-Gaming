import React from "react";
//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from "../animations";
//redux imports
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";
import scaleImg from "../util";


const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const detailLoader = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  }
  return (
    <StyledGame variants={popup} initial="hidden" animate="show" layoutId={id.toString()} onClick={detailLoader}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`text ${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`img ${id.toString()}`} src={scaleImg(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;

    }
  `;

export default Game;