import React from 'react'
import { FeatureContent, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContent>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContent>
    )
}

export default Feature