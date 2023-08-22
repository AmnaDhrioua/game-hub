import { Heading } from '@chakra-ui/layout'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}
const GameHeadind = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Game`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeadind