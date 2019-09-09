import React from 'react';




export default function Summary(props) {


  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
      </section>

    )
  }


}