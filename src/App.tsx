import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks2/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks2/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [GameQuery, setGameQuery]= useState<GameQuery>({} as GameQuery)
  //const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(null);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({...GameQuery,genre})} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={GameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...GameQuery, platform})} />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
