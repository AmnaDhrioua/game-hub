import { HStack, List, ListItem, Button, Image, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks2/useGenres';
import getCroppedImageUrl from '../services/image.url';

// Define the Genre type
interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  
  if (error) return null;
  if (isLoading) return <Spinner />;
  
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
