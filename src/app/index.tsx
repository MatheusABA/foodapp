import { Text, View, ScrollView } from "react-native";

import { Header } from "../components/header"

import Constants from "expo-constants"

import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Rated } from "../components/section";

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

        <Rated
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais..."
        action={ () => console.log("Veja mais clicado")}
        />

      </View>

      
    </ScrollView>
  );
}
