import * as React from "react";
import { View, Text } from "react-native";
import { NavigationStackProp } from "@react-navigation/stack";
import { moviesAPI } from "../api";

type FavsProps = {
  navigation: NavigationStackProp<{}>;
};

type FavsStates = {
  movies: Array<{}>;
  error: string | null;
};

const Favs: React.FC<FavsProps> = ({ navigation }: FavsProps) => {
  const [favs, setFavs] = React.useState<FavsStates>({
    movies: [],
    error: null,
  });

  const getApiData = async () => {
    const [movies, error] = await moviesAPI.discover();
    setFavs({
      movies,
      error,
    });
  };

  React.useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{favs.movies?.length}</Text>
    </View>
  );
};

export default Favs;
