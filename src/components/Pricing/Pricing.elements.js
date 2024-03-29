import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const PricingSection = styled.section `
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  background: #F79F1F;
`

export const PricingWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const PricingHeading = styled.h2 `
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    font-size: 40px;
    text-align: center;    
    line-height: 1;
    margin-bottom: 30px;
  }
`

export const PricingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const PricingCard = styled(Link) `
  background: #242424;
  box-shadow: 0 6px 20px rgb(255 195 18 / 50%);
  width: 280px;
  height: 500px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.7s ease-out;
    color: #1c2237
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`

export const PricingCardInfo = styled.div `
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center; 
  color: #fff;
`

export const PricingCardIcon = styled.div `
  margin: 24px 0;  
`

export const PricingCardPlan = styled.h3 `
  margin-bottom: 5px;
  font-size: 24px;

  @media screen and (max-width: 960px) {
    font-size: 20px;    
  }
`

export const PricingCardCost = styled.h4 `
  font-size: 40px;   
`

export const PricingCardLength = styled.p `
  font-size: 14px;
  margin-bottom: 24px;  
`

export const PricingCardFeatures = styled.ul `
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column; 
  align-items: center;
  color: #a9b3c1;
`

export const PricingCardFeature = styled.li `
  margin-bottom: 10px;
`