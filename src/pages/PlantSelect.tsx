import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Header } from "../components/Header";
import { EnviromentButton } from "../components/EnviromentButton";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load";

import { plants } from "../services/plants";

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([
    { key: "all", title: "Todos" },
    { key: "living_room", title: "Sala" },
    { key: "bedroom", title: "Quarto" },
    { key: "kitchen", title: "Cozinha" },
    { key: "bathroom", title: "Banheiro" },
  ]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>(plants);
  const [loading, setLoading] = useState(true);

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment);

    if (enviroment === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(enviroment)
    );

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={enviroments}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
