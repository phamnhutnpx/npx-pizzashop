import React from 'react'
import { dataProduct as data } from './data.js'
import {
    ProductCard,
    ProductContainer,
    ProductHeading,
    ProductWrap,
    ProductImg,
    ProductTitle,
    ProductDes,
    ProductPrice,
    ProductButton,
    ProductInfo
} from './ProductElements';

const Products = ({ headingProduct }) => {
    return (
        <ProductContainer>
            <ProductHeading >{headingProduct}</ProductHeading>
            <ProductWrap>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle >{product.title}</ProductTitle>
                                <ProductDes >{product.des}</ProductDes>
                                <ProductPrice >{product.price}</ProductPrice>
                                <ProductButton >{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrap>
        </ProductContainer>
    )
}

export default Products;