import React from 'react';

/*
const summary = Object.keys(this.state.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = this.state.selected[feature];

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
});
*/
export default class Summary extends React.Component {


  render() {
    return (
      null
      /*
      <section className="main__summary">
        <h2>Your cart</h2>
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
      </section>
      */
    )
  }
}