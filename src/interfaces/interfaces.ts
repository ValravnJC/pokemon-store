export interface Pokemon {
    id: string;
    name: string;
    quantity: number ;
}

export interface CartState {
    cartItems: Pokemon[],
    cartClicked: boolean;
    cartCount: number;
}