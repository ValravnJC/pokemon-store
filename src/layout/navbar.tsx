import { Link } from "react-router-dom"
import PokemonLogo from "../assets/pokemon-23.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons'
import { MiniCart } from "../components/mini-cart"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import {  toggleCart  } from "../store/cartSlice"
import { useDispatch } from "react-redux"



export const Navbar = () => {


    const count = useSelector((state: RootState) => state.cart.cartCount);
    const cartClicked = useSelector((state: RootState) => state.cart.cartClicked);
    const dispatch = useDispatch();

    const handleClick = () =>{
        console.log(cartClicked);
        dispatch(toggleCart(!cartClicked));
    }

    return (
        <div className="">
        <div className="grid grid-cols-2 bg-slate-300 shadow-sm shadow-slate-500 h-20 items-center">
            <Link to="/" className="ml-4"> <img src={PokemonLogo} alt="Pokemon Logo" width="150px" /></Link>
            <div className="flex relative justify-end mr-6 gap-2">
            <p>{count}</p>
            <FontAwesomeIcon icon={faCartShopping} size="lg" className=" text-sky-800" onClick={handleClick}/>
            </div>
                
             
        </div>
        
            <div className=" absolute mx-auto left-0 right-0 w-6/12 place-self-center">
                    { cartClicked ? <MiniCart  /> : ""}
                </div>
        </div>
    );
}