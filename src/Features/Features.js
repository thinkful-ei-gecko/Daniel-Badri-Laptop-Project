import React from 'react';
import Options from '../Options/Options'
import './Features.css'

export default class Features extends React.Component {
  render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map((item, idx) => <Options key={idx} item={item} feature={feature} {...this.props}/>);
      return ( 
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
        {options}
        </fieldset>
      );
    });

      return (<div>{features}</div>)
    }
  }
