import React from 'react';
import Options from './Options'
import slugify from 'slugify';


export default class Features extends React.Component {
  render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        console.log(features)
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Options />
        );
      });
    });

      return (
        null
        /*
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
      */
      );
    }
  }
