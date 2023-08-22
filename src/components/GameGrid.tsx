// Assuming the useGames hook returns the 'games' data
import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/layout';
import useGames, { Game, Platform } from '../hooks2/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks2/useGenres';
import { GameQuery } from '../App';
interface Props {
  gameQuery: GameQuery
  //selectedGenre: Genre | null;
  //selectedPlatform: Platform | null;
}


const GameGrid = ( { gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery); // Assuming 'data' is the property that holds the games
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={3}
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
