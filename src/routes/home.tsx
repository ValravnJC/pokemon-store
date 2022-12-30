import axios from 'axios';
import { useState, useEffect } from 'react';
import { PokemonCard } from '../components/pokemon-card';
import { useDispatch } from 'react-redux';
import { cartCount } from '../store/cartSlice';

export const Home = () =>{


    interface PokeApi {
        id: string;
        name: string;
        url: string;
        price: number;
    }

    const [pokemons,setPokemons] = useState([{
        id: "",
        name: "",
        image: "",
        price: 0,
    }]);

    const dispatch = useDispatch();

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20').then((response) => {
            const results = response.data.results;
            setPokemons(results.map((result:PokeApi) => {
              return   {name: result.name, image: result.url.slice(-3,result.url.lastIndexOf('/')), price: Math.floor(Math.random() * 10) + 1 }
            }))
        })
        
        dispatch(cartCount());
        
    },[]);

    

    return(
        <div className='grid grid-cols-4 justify-items-center pt-8' >
            {pokemons.map((pokemon,index) => 
                <PokemonCard key={index} name={pokemon.name} price={pokemon.price} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.image}.png `} id={pokemon.image} />
            )}
        </div>
    );


}