import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadGames } from "../actions/gameActions";

/// style & animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from "../animations";
//components
import Game from "../components/Game";
import Gamedetail from "../components/Gamedetail";
import { useLocation } from "react-router-dom";



const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { Popular, upcomingGames, newGames, search } = useSelector((state) => state.gameRedu);


    return (<GameList variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathId && <Gamedetail layoutId={pathId} />}</AnimatePresence>
            {search.length ? (
                <div>
                    <h2>Searched Games</h2>
                    <Games>
                        {search.map((game) => (
                            <Game
                                name={game.name}
                                released={game.released}
                                id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </Games>
                </div>
            )
                : null
            }
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {Popular.map((game) => (
                    <Game

                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
        </AnimateSharedLayout>
    </GameList>
    );


};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 0.5fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;