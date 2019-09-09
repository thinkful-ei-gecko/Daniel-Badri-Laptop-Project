import React from 'react';
import Selections from './Options'


export default function Features(props) {





  render() {
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>

        //
        <Options />
      </fieldset>
    );
    
  
  }
  
}