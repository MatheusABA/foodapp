import { Text, View, ScrollView } from "react-native";

import { Header } from "../components/header"

import Constants from "expo-constants"

import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { VerticalListRestaurant } from "../components/list";

const statusBarHeight = Constants.statusBarHeight



export default function Index() {
  return (
    
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      
      <View className="w-full px-3" style={{ marginTop: statusBarHeight + 4 }}>
        
        <Header/>

        <Banner/>

        <Search/>

      </View>

      <Section
      name="Comidas em alta"
      size="text-2xl"
      label="Veja mais..."
      action={ () => console.log("Veja mais clicado")}
      />
      <TrendingFoods/>

      <Section
      name="Famosos no FlashFood"
      size="text-2xl"
      label="Veja todos..."
      action={ () => console.log("Veja todos clicado")}
      />
      <Restaurants />

      <Section
      name="Restaurantes"
      label=""
      size="text-2xl"
      action={ () => console.log("Todos os restaurantes")}
      />
      <VerticalListRestaurant/>

    </ScrollView>
  );
}
