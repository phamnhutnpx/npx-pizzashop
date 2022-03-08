import styled from "styled-components";
import FeatureImg from "../../images/featured3.jpg"

export const FeatureContent = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(${FeatureImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    max-height: 400px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    h1{
        font-size: clamp(3rem, 5vw, 5rem);
    }
    p{
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;
export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: .2s ease-out;
    &:hover {
        background: #e31837;
        color: #fff;
        cursor: pointer;
        transition: .2s ease-out;
    }
`;
