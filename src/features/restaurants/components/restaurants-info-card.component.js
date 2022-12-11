import React from "react";
import { Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: "#FFF";
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: "#FFF";
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "",
    photos = ["https://picsum.photos/200"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
