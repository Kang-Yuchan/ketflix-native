import * as React from "react";
import { View, Text } from "react-native";
import { NavigationStackProp } from "@react-navigation/stack";
import { tvAPI } from "../api";

type TvProps = {
  navigation: NavigationStackProp<{}>;
};

type TvStates = {
  today: Array<{}>;
  todayError: string | null;
  onAirWeek: Array<{}>;
  onAirWeekError: string | null;
  topRated: Array<{}>;
  topRatedError: string | null;
  popular: Array<{}>;
  popularError: string | null;
};

const Tv: React.FC<TvProps> = ({ navigation }: TvProps) => {
  const [tv, setTv] = React.useState<TvStates>({
    today: [],
    todayError: null,
    onAirWeek: [],
    onAirWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
  });

  const getApiData = async () => {
    const [today, todayError] = await tvAPI.today();
    const [onAirWeek, onAirWeekError] = await tvAPI.onAirWeek();
    const [topRated, topRatedError] = await tvAPI.topRated();
    const [popular, popularError] = await tvAPI.popular();
    setTv({
      today,
      todayError,
      onAirWeek,
      onAirWeekError,
      topRated,
      topRatedError,
      popular,
      popularError,
    });
  };

  React.useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{tv.today?.length}</Text>
    </View>
  );
};

export default Tv;
