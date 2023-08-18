import React from 'react';
import { Game } from '../hooks2/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList'; // You need to import PlatformIconList if it's not imported already

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        {/* Assuming PlatformIconList is a properly defined component */}
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
