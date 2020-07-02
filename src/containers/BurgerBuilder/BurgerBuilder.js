import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const PRICE_TABLE = {
  salad:  0.3,
  bacon:  1.5,
  cheese: 0.5,
  meat:   2
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
        },
        price: 4.0,
        purchasable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
      let updatedIngredients = { ...this.state.ingredients };
      let price = this.state.price;

      updatedIngredients[type] = updatedIngredients[type] + 1;
      price = price + PRICE_TABLE[type];
      this.setState({ ingredients: updatedIngredients, price: price});
      this.updatePushableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
      if (this.state.ingredients[type] <= 0) {
        return;
      }
      let updatedIngredients = { ...this.state.ingredients };
      let price = this.state.price;

      updatedIngredients[type] = updatedIngredients[type] - 1;
      price = price - PRICE_TABLE[type];
      this.setState({ ingredients: updatedIngredients, price: price});
      this.updatePushableState(updatedIngredients);
    }

    updatePushableState = (ingredients) => {
      const sum = Object.keys( ingredients )
      .map( igKey => {
          return ingredients[igKey];
      } )
      .reduce( ( sum, el ) => {
          return sum + el;
      }, 0 );
      this.setState( { purchasable: sum > 0 } );
    }

    purchaseHandler = () => {
      this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    render () {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                  totalPrice={this.state.price}
                  purchasable={this.state.purchasable}
                  addIngredient={this.addIngredientHandler}
                  ordered={this.purchaseHandler}
                  removeIngredient={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;