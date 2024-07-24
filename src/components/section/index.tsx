import { Pressable, Text, View } from "react-native";

interface Props{
    name: string;
    size: "text-xl" | "text-2xl" | "text-3xl"
    label: string;
    action: () => void;
}

// Componente dinamico

export function Section({name, size, label, action}: Props) {
    return (
        <View className="w-full mt-5 mx-6 flex flex-row items-center justify-between">
            <Text
            className={`font-bold ${size} self-start`}
            > {name} </Text>

            
            <Pressable className="pr-10" onPress={action}>
                <Text className="italic">{label}</Text>
            </Pressable>
        </View>

    )
}