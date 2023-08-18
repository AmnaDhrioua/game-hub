import { HStack, List, ListItem, Text } from '@chakra-ui/layout';
import useGenres from '../hooks2/useGenres';
import { Image, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image.url';

const GenreList = () => {
  const {data, isLoading, error} = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner/>;
  return (
    <List>
      {data.map(genre => (
      <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize='lg'>
            {genre.name}
          </Text>
        </HStack>
        </ListItem>
        ))}
    </List>
  )
}

export default GenreList