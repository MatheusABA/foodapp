import { View, Text, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { RestaurantItem } from './vertical';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}


export function VerticalListRestaurant() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])  // inicia o array vazio com tipagem

    useEffect(() => {
        // função asincrona para pegar dados da api
        async function getRestaurants() {
            const response = await fetch("http://192.168.101.162:3000/restaurants")
            const data = await response.json()  // transformando dados em json
            setRestaurants(data);                     // setando as comidas na useState
        }

        getRestaurants()
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-2'>
            {restaurants.map( restaurants => (
                <RestaurantItem restaurant={restaurants} key={restaurants.id}/>
            ))}
        </View>
    );
}