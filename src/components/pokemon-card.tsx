import { useDispatch } from "react-redux";
import { addToCart, cartCount } from "../store/cartSlice";

interface Props {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
}

export const PokemonCard = (props:Props) => {

    const dispatch = useDispatch();

    const { name, imageUrl, id, price} = props
    const pokemon = {id: id , name: name ,price: price ,quantity: 1}

    const handleClick = () =>{
        dispatch(addToCart(pokemon));
        dispatch(cartCount());
    }


    return (
        <div className=" bg-slate-300 rounded-lg mb-4 w-48 h-64 grid justify-items-center items-center ">
            <h2 >{name} - ${price}</h2>
            <img  src={imageUrl} width="150"/>
            <button className=" bg-sky-600 rounded-md w-32 h-10 mb-2 border-double border-8" onClick={handleClick}>Add to Cart</button>
        </div>
    );
}