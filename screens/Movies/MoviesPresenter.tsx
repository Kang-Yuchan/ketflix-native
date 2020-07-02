import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { MoviesState } from "./MoviesContainer";
import styled from "styled-components";
import Swiper from "react-native-web-swiper";

const { width, height } = Dimensions.get("screen");

const Header = styled(View)`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled(View)`
  background-color: red;
  height: 100%;
`;

const MainText = styled(Text)`
  color: white;
`;

type MoviesProps = {
  movies: MoviesState;
};

const MoviesPresenter: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <Header>
      <Swiper>
        <Section>
          <MainText>{movies.nowPlaying?.length}</MainText>
        </Section>
        <Section>
          <MainText>{movies.nowPlaying?.length}</MainText>
        </Section>
        <Section>
          <MainText>{movies.nowPlaying?.length}</MainText>
        </Section>
      </Swiper>
    </Header>
  );
};

export default MoviesPresenter;
