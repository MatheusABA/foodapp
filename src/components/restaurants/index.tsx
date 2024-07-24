import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { HorizontalCardRestaurant } from './horizontal';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}



export function Restaurants() {


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
        <FlatList
            data={restaurants}
            renderItem={ ({ item }) => <HorizontalCardRestaurant restaurant={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 10, paddingLeft: 22, paddingRight: 22}}
            showsHorizontalScrollIndicator={false}
        />
    );
}