
import { SimpleGrid, Text } from '@chakra-ui/layout';
import useGames from '../hooks2/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const skeletons = [1, 2, 3, 4, 5, 6];
 
const GameGrid = () => {
    const {games, error, isLoading} = useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid 
    columns={{ sm: 1, md: 2, lg: 3, xl: 5}} 
    padding = '10px' 
    spacing={10}>
      {isLoading && 
      skeletons.map((skeleton) => (
      <GameCardContainer>
        <GameCardSkeleton key={skeleton}/>
      </GameCardContainer>
      ))}
        {games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}/>
            </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid