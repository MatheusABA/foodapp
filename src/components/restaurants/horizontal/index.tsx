import { View, Pressable, Text, Image } from 'react-native'
import { RestaurantsProps } from '..'

export  function HorizontalCardRestaurant({ restaurant } : { restaurant : RestaurantsProps }) {
  return (
    <Pressable className='flex flex-col items-center justify-center mt-4'
      onPress={() => console.log(`Clicou em ${restaurant.name}` )}
    >
      <Image
        source={{ uri: restaurant.image }}
        className='w-24 h-24 rounded-full'
      />
      
      <Text
        className='font-semibold mt-2 text-sm text-center leading-2' 
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>

    </Pressable>
    
  )
}