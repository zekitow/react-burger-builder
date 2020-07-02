import React from 'react';

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Total: <strong>$ {props.totalPrice.toFixed(2)}</strong></p>
    {
      controls.map(ctrl => {
        return <BuildControl
          key={ctrl.key}
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          removeIngredient={() => props.removeIngredient(ctrl.type)} />
      })
    }

    <button
      className={classes.OrderButton}
      onClick={props.ordered}
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;