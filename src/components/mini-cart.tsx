import { PokemonCard } from "./pokemon-card";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



export const MiniCart = () =>{


    
    const cartItems = useSelector((state: RootState) => state.cart.cartItems) 


    return(
        <div className=" block h-80 bg-slate-200 rounded-md overflow-auto gap-y-4  scroll-pb-4 snap-y">
            <div className=" grid divide-y divide-solid divide-slate-400 ">
                {cartItems.map((item) => (<div key={item.id} className="pl-4"><h2>{item.quantity} - {item.name}</h2><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png `} /> </div>))} 
                
            </div>
            <button className="bg-sky-600 rounded-md w-32 h-10 border-double border-4 border-slate-50 justify-self-center mb-4">Go to Cart</button>
        </div>);
}