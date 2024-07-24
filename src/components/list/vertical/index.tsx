import { View, Pressable, Text, Image } from 'react-native'

import { RestaurantsProps } from '..'

import { Ionicons } from '@expo/vector-icons'

export function RestaurantItem({ restaurant }: { restaurant: RestaurantsProps}) {

  return (
    <Pressable className='flex flex-row m-2 gap-4'>
        <Image
            source={{ uri: restaurant.image}}
            className='w-24 h-24 rounded-2xl'
        />
        <View className='gap-y-2'>
            <Text className='font-semibold'>{restaurant.name}</Text>
            <View className='flex flex-row gap-1'>
              <Ionicons name='star' color='golden' size={16}/>
              <Text>{(Math.random() * (5-0) + 1).toFixed(1)}</Text>
            </View>
            <Ionicons name="heart-outline" size={20} className=''/>
        </View>
    </Pressable>
  )
}