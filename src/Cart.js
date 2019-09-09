import React from 'react'
import Summary from './Summary'
import Total from './Total'

export default class Cart extends React.Component {

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    <div className='Cart'>
                        <Summary {...this.props}/>
                        <Total {...this.props}/>
                    </div>
             </section>
        )
    }
}