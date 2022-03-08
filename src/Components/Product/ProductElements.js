import styled from 'styled-components';

export const ProductContainer = styled.div`
    ${'' /* width: 100vw; */}
    min-height: 100vh;
    padding: 4rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;
    background: #150f0f;
`;
export const ProductWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const ProductCard = styled.div`
    padding: 0 2rem;
    line-height: 1.5;
    width: 300px;
`;
export const ProductHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 2.5rem;
`;
export const ProductImg = styled.img`
    height: 230px;
    min-width: 230px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem ;
`;
export const ProductTitle = styled.div`
    font-weight: 600;
    font-size: 1rem;
`;
export const ProductDes = styled.p`
    margin-bottom: 1rem;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
`;
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`;
export const ProductButton = styled.button`
    margin-bottom: 2rem;
    background: #e31837;
    padding: 1rem 3rem;
    border: none;
    color: #fff;
    display: block;
    transition: .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #ffc500;
        transition: .2s ease-in-out;
        color: #000;
    }
`;