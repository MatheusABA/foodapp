import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="bg-slate-100 rounded-full p-2 w-full flex flex-row items-center justify-between">

            {/* Menu Home */}
            <Pressable className="w-10 h-10 bg-slate-100 rounded-full flex justify-center items-center">
                <Ionicons name="apps" size={25} color="#121212"/>
            </Pressable>

            {/* GPS */}
            <View className="flex flex-col items-center justify-center">
                <Text className="text-center text-sm">Localização</Text>
                
                <View className="flex-row items-center justify-between gap-1">
                    <Ionicons name="navigate" size={15} color="darkred"></Ionicons>
                    <Text className="text-lg font-bold">Rio de Janeiro</Text>
                </View>
            </View>

            {/* Notificação e Perfil do usuário */}
            <Pressable className="w-10 h-10 bg-slate-100 rounded-full flex-row items-center justify-end gap-4 mr-2">
                <Ionicons name="notifications" size={25} color="black"></Ionicons>
                <Ionicons name="person" size={25} color="black"></Ionicons>
            </Pressable>
            
        </View>

    )

}