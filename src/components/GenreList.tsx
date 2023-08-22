import { HStack, List, ListItem, Button, Image, Spinner, Heading } from '@chakra-ui/react';
import useGenres from '../hooks2/useGenres';
import getCroppedImageUrl from '../services/image.url';
import genres from '../data/genres';
// Define the Genre type
interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre,onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  
  if (error) return null;
  if (isLoading) return <Spinner />;
  
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image 
            boxSize='32px' 
            borderRadius={8} 
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)} />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList;
