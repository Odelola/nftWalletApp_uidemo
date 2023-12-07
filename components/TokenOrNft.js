import styled from 'styled-components/native';
import { COLORS, MEASUREMENTS } from '../constants/theme';
import { useState } from 'react';
import { ChevronUpIcon, EthereumIcon } from './icons';
import { BitcoinGraphImage, BitcoinImage, EthereumGraphImage, EthereumImage, SolanaGraphImage, SolanaImage, GreenNftMonkeyImage, YellowNftMonkeyImage } from './icons/svgImages';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const { paddingHorizontal } = MEASUREMENTS;

const TokensData = [
    {
        currencyImage: BitcoinImage,
        currency: "BTC",
        currencyName: "Bitcoin",
        graphImage: BitcoinGraphImage,
        price: "$36,590.00",
        percentage: "+6.21%"
    },
    {
        currencyImage: EthereumImage,
        currency: "ETH",
        currencyName: "Ethereum",
        graphImage: EthereumGraphImage,
        price: "$2,590.00",
        percentage: "+5.21%"
    },
    {
        currencyImage: SolanaImage,
        currency: "SOL",
        currencyName: "Solana",
        graphImage: SolanaGraphImage,
        price: "$390.00",
        percentage: "+2.21%"
    },
]
const NftsData = [
    {
        nftImage: GreenNftMonkeyImage,
        nftId: "#1957",
        nftName: "Bored Ape Yacht Club",
        nftEthereumPrice: " 6.64",
        nftDollarPrice: " $ 23,114.57",
    },
    {
        nftImage: YellowNftMonkeyImage,
        nftId: "#6513",
        nftName: "Bored Ape Yacht Club",
        nftEthereumPrice: " 199.8",
        nftDollarPrice: " $ 45,114.57",
    },
    {
        nftImage: GreenNftMonkeyImage,
        nftId: "#1957",
        nftName: "Bored Ape Yacht Club",
        nftEthereumPrice: " 6.64",
        nftDollarPrice: " $ 23,114.57",
    },
    {
        nftImage: YellowNftMonkeyImage,
        nftId: "#6513",
        nftName: "Bored Ape Yacht Club",
        nftEthereumPrice: " 199.8",
        nftDollarPrice: " $ 45,114.57",
    },
]

const TokenListDisplay = () => (
    (TokensData.map(item => (
        <CurrencyContainer style={{ marginBottom: TokensData.indexOf(item) == TokensData.length - 1 ? 0 : 30, borderBottomWidth: TokensData.indexOf(item) == TokensData.length - 1 ? 0 : 3, borderBottomColor: COLORS.darkBackground }} key={`${item.currency}, ${item.currencyName}`}>
            <item.currencyImage />
            <CurrencyNameContainer>
                <Currency>
                    {item.currency}
                </Currency>
                <CurrencyName>
                    {item.currencyName}
                </CurrencyName>
            </CurrencyNameContainer>
            <item.graphImage />
            <CurrencyPriceContainer>
                <CurrencyPrice>
                    {item.price}
                </CurrencyPrice>
                <CurrencyPercentage>
                    {item.percentage}
                </CurrencyPercentage>

            </CurrencyPriceContainer>
        </CurrencyContainer>
    )))
)
const NftListDisplay = () => (
    (NftsData.map(item => (
        <NftContainer style={{ marginBottom: NftsData.indexOf(item) == NftsData.length - 1 ? 0 : 30, borderBottomWidth: NftsData.indexOf(item) == NftsData.length - 1 ? 0 : 3, borderBottomColor: COLORS.darkBackground }} key={`${item.nftId}, ${NftsData.indexOf(item)}`}>
            <item.nftImage />
            <NftNameContainer>
                <NftId>
                    {item.nftId}
                </NftId>
                <NftName>
                    {item.nftName}
                </NftName>
            </NftNameContainer>
            <NftPriceContainer>
                <NftEthereumPrice>
                    <EthereumIcon />
                    {item.nftEthereumPrice}
                </NftEthereumPrice>
                <NftDollarPrice>
                    <ChevronUpIcon />
                    {item.nftDollarPrice}
                </NftDollarPrice>
            </NftPriceContainer>
        </NftContainer>
    )))
)
const TokenOrNft = () => {
  const tabHeight = useBottomTabBarHeight();

    const TogglerTabList = ["Tokens", "NFTs"];
    const [stateOfToggle, _stateToggler] = useState("Tokens");
    const _toggleState = (tabName) => {
        _stateToggler(prev => prev = tabName);
    }
    const TokenOrNftToggler = () => {
        return (
            <TokenOrNftTogglerContainer>
                {TogglerTabList.map(tabName => (<TokenOrNftToggleButton key={tabName} onPress={() => _toggleState(tabName)} style={{ backgroundColor: stateOfToggle.toLowerCase() == tabName.toLowerCase() ? COLORS.lighterDarkBackground : "transparent" }}>
                    <TokenOrNftToggleButtonText style={{ color: stateOfToggle == tabName ? "white" : COLORS.grayText }}>{tabName}</TokenOrNftToggleButtonText>
                </TokenOrNftToggleButton>))}
            </TokenOrNftTogglerContainer>
        )
    }

    return (
        <TokenOrNftContainer style={{ paddingBottom: tabHeight }}>
            <TokenOrNftToggler />
            <TokenOrNftDisplay>
                {stateOfToggle.toLowerCase() == "tokens" && (<TokenListDisplay />)}
                {stateOfToggle.toLowerCase() == "nfts" && (<NftListDisplay />)}
            </TokenOrNftDisplay>
        </TokenOrNftContainer>
    )
}

export default TokenOrNft;

const TokenOrNftTogglerContainer = styled.View`
flex-direction: row;
justify-content: space-between;
background: ${COLORS.darkBackground};
border-radius: 45px;
padding: 4px;
height: 55px;
`
const TokenOrNftToggleButton = styled.TouchableOpacity`
background: ${COLORS.lighterDarkBackground};
flex-basis: 50%;
border-radius: 35px;
justify-content: center;
align-items: center;
`
const TokenOrNftToggleButtonText = styled.Text`
font-family: NunitoBold;
font-size: 20px;
`
const TokenOrNftContainer = styled.View`
padding: 0 ${paddingHorizontal}px;
`
const TokenOrNftDisplay = styled.View`
margin-top: 35px;
`
const CurrencyContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: 15px;
`
const CurrencyNameContainer = styled.View``
const CurrencyPriceContainer = styled.View``
const Currency = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 18px;
margin-bottom: 4px;
`
const CurrencyName = styled.Text`
color: ${COLORS.grayParagraphText};
`
const CurrencyPrice = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 18px;
margin-bottom: 4px;
`
const CurrencyPercentage = styled.Text`
color: white;
text-align: right;
`
const NftContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: 15px;
`
const NftNameContainer = styled.View`
flex: 1;
margin-left: 12px;
`
const NftPriceContainer = styled.View``
const NftId = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 18px;
margin-bottom: 4px;
`
const NftName = styled.Text`
color: ${COLORS.grayParagraphText};
`
const NftEthereumPrice = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 18px;
margin: 0px 0px 4px 0px;
text-align: right;
`
const NftDollarPrice = styled.Text`
font-family: NunitoBold;
font-size: 18px;
color: ${COLORS.greenText}
`