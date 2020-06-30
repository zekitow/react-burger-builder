import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
      let updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedIngredients[type] + 1;
      this.setState({ ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type) => {
      let updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedIngredients[type] - 1;
      if (updatedIngredients[type] >= 0) {
        this.setState({ ingredients: updatedIngredients });
      }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                  addIngredient={this.addIngredientHandler}
                  removeIngredient={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;