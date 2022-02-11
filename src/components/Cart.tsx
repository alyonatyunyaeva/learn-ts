import React, {MouseEvent, MouseEventHandler} from 'react'
import {FiShoppingCart} from "react-icons/fi";
import CartCss from './Cart.module.css'
import {AppStateContext} from "./AppState";

interface Props {
}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            console.log('---->', (e.target as HTMLElement).offsetHeight)
        }
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                return <div className={CartCss.cartContainer}>
                    <button className={CartCss.button} type='button' onClick={this.handleClick}>
                        <FiShoppingCart></FiShoppingCart>
                        <span>{state.cart.items.length} pizza(s)</span>
                    </button>
                    <div
                        className={CartCss.cartDropDown}
                        style={{display: this.state.isOpen ? 'block' : 'none'}}
                    >
                        <ul>
                            {state.cart.items.map(item => {
                                return <li key={item.id}>{item.name} &times; {item.quantity}</li>
                            })}
                        </ul>
                    </div>
                </div>
            }}</AppStateContext.Consumer>

        )
    }
}

export default Cart;