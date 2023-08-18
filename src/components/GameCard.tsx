import React from 'react';
import { Game } from '../hooks2/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList'; // You need to import PlatformIconList if it's not imported already
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image.url';
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        {/* Assuming PlatformIconList is a properly defined component */}
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score = {game.metacritic}/>
        </HStack>
        
      </CardBody>
    </Card>
  );
}

export default GameCard;
