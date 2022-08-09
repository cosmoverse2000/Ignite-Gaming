import React from "react";
//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux imports
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import scaleImg from "../util";
//imges of platforms
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import playstation from "../img/playstation.svg";
// stars...
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";





const GameDetail = ({ layoutId }) => {
    const navigate = useNavigate();
    //exit detaail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate("/Axios-Redux");
        }
    };

    // PLATFORM TO IMG
    const GamePlatforms = (platform) => {
        switch (platform) {
            case ("PlayStation 5" || "PlayStation 4"):
                return playstation;
            case ("Xbox Series S/X" || "Xbox One"):
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "macOS":
                return apple;
            default:
                return gamepad;
        }
    }


    const { detail, screen, isLoading } = useSelector(state => state.detailRedu);


    // ratings to star
    const getStars = () => {
        const rating = Math.floor(detail.rating);
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={starFull} alt="star" key={i} />);
            }
            else {
                stars.push(<img src={starEmpty} alt="Emptystar" key={i} />);

            }
        }
        return stars;
    }
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={layoutId}>
                        <Stats><div className="rating">
                            <motion.h2 layoutId={`text ${layoutId}`}>{detail.name}</motion.h2>
                            <p>Rating: {detail.rating}</p>
                            {getStars()}
                        </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {detail.platforms.map(data => (
                                        <img key={data.platform.id} src={GamePlatforms(data.platform.name)} alt={data.platform.name} />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`img ${layoutId}`} src={scaleImg(detail.background_image, 1280)} alt={detail.background_image} />
                        </Media>
                        <Desc>
                            <p>{detail.description_raw}</p>
                        </Desc>
                        <div className="gallery">
                            {screen.results.map(screen => (
                                <img src={scaleImg(screen.image, 1280)} alt={screen.image} key={screen.id} />
                            ))}
                        </div>
                    </Detail>


                </CardShadow>
            )}
        </>
    );
}

const CardShadow = styled(motion.div)`
width:100%;
min-height: 100vh;
overflow-y:scroll;
background: rgba(0,0,0,0.5);
position: fixed;
cursor: pointer;
top:0;
left: 0;

&::-webkit-scrollbar{
    width:0.5rem;
}
&::-webkit-scrollbar-thumb{
    background-color : red;
}
&::-webkit-scrollbar-track{
    background:white;
}   
`;

const Detail = styled(motion.div)`
width:80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
cursor: auto;
z-index: 10;
img{
    width:100%;
}
`;
const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content : space-between;
img{
    width: 2rem;
    height: 2rem;
    display: inline;
}
`;
const Info = styled(motion.div)`
 text-align :center;

`;
const Platforms = styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
    margin-left: 3rem;
}
`;
const Media = styled(motion.div)`
margin-top: 5rem;
img{
    width: 100%;
}
`;

const Desc = styled(motion.div)`
margin: 5rem 0rem;

`;



export default GameDetail;