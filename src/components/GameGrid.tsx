// Assuming the useGames hook returns the 'games' data
import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/layout';
import useGames, { Game } from '../hooks2/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const skeletons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames(); // Assuming 'data' is the property that holds the games

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game: Game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
