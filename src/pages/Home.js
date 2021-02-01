import React,{ useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGame } from '../actions/gameAction';
import Game from '../components/Game';
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGame());
  }, [dispatch])
  // Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
 return (
  <GameList>
   <h2>Popular Games</h2>
   <Games>
    {popular.map(game => (
      <Game 
        id={game.id}
        name={game.name}
        released={game.released}
        background_image={game.background_image}
        key={game.id}
      />
    ))}
   </Games>
   <h2>newGames Games</h2>
   <Games>
    {newGames.map(game => (
      <Game 
        id={game.id}
        name={game.name}
        released={game.released}
        background_image={game.background_image}
        key={game.id}
      />
    ))}
   </Games>
   <h2>upcoming Games</h2>
   <Games>
    {upcoming.map(game => (
      <Game 
        id={game.id}
        name={game.name}
        released={game.released}
        background_image={game.background_image}
        key={game.id}
      />
    ))}
   </Games>
  </GameList>
 )
}

const GameList = Styled(motion.div)`
   padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`;
const Games = Styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home
