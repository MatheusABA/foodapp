import { View, Text, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    return (
        <View className="w-full h-36 md:h-60 rounded-2xl px-5 mt-5">
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>

                <Pressable
                    className="w-full h-36 md:h-60 rounded-xl justify-center items-center"
                    key={1}
                    onPress={() => console.log('Banner 1')}
                >
                    <Image
                        source={require("../../assets/banner1.jpg")}
                        className="w-full h-36 justify-center rounded-2xl"
                    />
                </Pressable>

                <Pressable
                    className="w-full h-36 md:h-60 rounded-xl justify-center items-center"
                    key={2}
                    onPress={() => console.log('Banner 1')}
                >
                    <Image
                        source={require("../../assets/banner2.jpg")}
                        className="w-full h-36 justify-center rounded-2xl"
                    />
                </Pressable>

            </PagerView>
        </View>
    )
}