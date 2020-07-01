import * as React from "react";
import { View, Text } from "react-native";
import { NavigationStackProp } from "@react-navigation/stack";
import { moviesAPI } from "../api";

type HomeProps = {
  navigation: NavigationStackProp<{}>;
};

type MoviesState = {
  nowPlaying: Array<{}>;
  nowPlayingError: string | null;
  popular: Array<{}>;
  popularError: string | null;
  upComing: Array<{}>;
  upComingError: string | null;
};

const Movies: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const [movies, setMovies] = React.useState<MoviesState>({
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upComing: [],
    upComingError: null,
  });

  const getApiData = async () => {
    const [nowPlaying, nowPlayingError] = await moviesAPI.nowPlaying();
    const [popular, popularError] = await moviesAPI.popular();
    const [upComing, upComingError] = await moviesAPI.upComing();
    setMovies({
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upComing,
      upComingError,
    });
  };

  React.useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.nowPlaying?.length}</Text>
    </View>
  );
};

export default Movies;
