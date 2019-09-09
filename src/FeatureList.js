import React from 'react';
import Features from './Features'

export default class FeatureList extends React.Component {
  render() {

    return (
      <div className='FeatureList'>
        <form className="main__form">
          <h2>Customize Your Laptop</h2>
            <Features {...this.props}
          />
      </form>
      </div>
    )
  }
}