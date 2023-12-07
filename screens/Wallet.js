import { Dimensions } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/theme'
const { width } = Dimensions.get("window");
const Wallet = () => {
  return (
    <WalletContainer>
      <WalletHeader>WALLET</WalletHeader>
    </WalletContainer>
  )
}

export default Wallet

const WalletContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background: ${COLORS.primaryBackground}
`
const WalletHeader = styled.Text`
font-size: ${width / 5}px;
color: white;
letter-spacing: 5px;
transform: rotate(-90deg);
font-family: NunitoBold`