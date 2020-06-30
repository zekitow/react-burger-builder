import React from 'react';

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'Cheese' },
  { label: 'Meat', type: 'Meat' }
]

const buildControls = (props) => (
  <div class={classes.BuildControls}>
    {
      controls.map(ctrl => {
        return <BuildControl key={ctrl.key} label={ctrl.label} />
      })
    }
  </div>
);

export default buildControls;