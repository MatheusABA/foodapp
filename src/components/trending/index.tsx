import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { HorizontalCardFood } from "./food";

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}



export function TrendingFoods() {

    const [foods, setFoods] = useState<FoodProps[]>([])  // inicia o array vazio com tipagem

    useEffect(() => {
        // função asincrona para pegar dados da api
        async function getFoods() {
            const response = await fetch("http://192.168.101.162:3000/foods")
            const data = await response.json()  // transformando dados em json
            setFoods(data);                     // setando as comidas na useState
        }

        getFoods()
    }, [])

    return (
        <FlatList
            data={foods}
            renderItem={ ({ item }) => <HorizontalCardFood food={item}/> }
            horizontal={true}
            contentContainerStyle={{ gap: 10, paddingLeft: 22, paddingRight: 22 }}
            showsHorizontalScrollIndicator={false}
            className="mt-5"
        />
    )
}