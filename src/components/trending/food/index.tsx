import { View, Text, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FoodProps } from '..'


export function HorizontalCardFood({ food }: { food: FoodProps}) {
  return (
    <Pressable className='flex flex-col rounded-xl relative'>
        <Image
          source={{ uri: food.image }}
          className='w-36 h-36 rounded-xl'
        />

        <View className='absolute top-1 left-1 px-2 flex flex-row bg-neutral-900/90 gap-1 rounded-full'>
          <Ionicons name='star-sharp' size={14} color="gold"></Ionicons>
          <Text className='text-white text-sm'>{food.rating}</Text>
        </View>

        <Text className='absolute bottom-8 px-2 flex flex-row bg-slate-800 text-white gap-1 rounded-full'>{food.name}
        </Text>

        <Text className='text-green-800 font-semibold flex flex-row'>
          R$ {food.price}
        </Text>

    </Pressable>
  )
}