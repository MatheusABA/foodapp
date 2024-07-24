import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export function Search() {
  return (
    <View className='bg-slate-100 rounded-full mt-5 mx-5 p-4 flex flex-row gap-4 items-center'>
      <Ionicons name='search' size={25} color="black"></Ionicons>
      <TextInput placeholder='Procure comidas ou restaurantes...'
        className='font-light text-ls w-full h-full flex-1'
      />
    </View>
  )
}