import * as React from "react";
import { NavigationStackProp } from "@react-navigation/stack";
import { moviesAPI } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

type HomeProps = {
  navigation: NavigationStackProp<{}>;
};

export interface MoviesState {
  loading: boolean;
  nowPlaying: Array<{}>;
  nowPlayingError: string | null;
  popular: Array<{}>;
  popularError: string | null;
  upComing: Array<{}>;
  upComingError: string | null;
}

const MoviesContainer: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const [movies, setMovies] = React.useState<MoviesState>({
    loading: true,
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
      loading: false,
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

  return <MoviesPresenter movies={movies} />;
};

export default MoviesContainer;
