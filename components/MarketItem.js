import { useState } from "react";
import styled from "styled-components";
import { HeartIcon, HeartIconActive } from "./icons";
import { Dimensions } from "react-native";
import { images } from "../constants";

const { width } = Dimensions.get("window");
const widthOfItem = width / 2.5
const MarketItem = (props) => {
    const [wasHearted, setWasHearted] = useState(false)
    const { name, id, price, index } = props;
    return (
        <MarketItemContainer style={[(index % 2 == 0 && { marginRight: (width / 2 - widthOfItem) }), { elevation: 3 }]}>
            <MarketImageContainer>
                <props.image
                    width="100%" />
                <HeartCountContainer onPress={() => setWasHearted(prev => !prev)}>
                    {wasHearted ? <HeartIconActive /> : <HeartIcon />}
                    <HeartCount style={{ color: wasHearted ? "red" : "black" }}>{wasHearted ? 3 : 2}</HeartCount>
                </HeartCountContainer>
            </MarketImageContainer>
            <MarketTextContainer>
                <MarketNameContainer>
                    <MarketItemName>{name}</MarketItemName>
                    <MarketItemId>{id}</MarketItemId>
                </MarketNameContainer>
                <MarketPriceContainer>
                    <MarketPriceImage source={images.ethereumIcon} width={20} height={20} />
                    <MarketPrice>{price}</MarketPrice>
                </MarketPriceContainer>
            </MarketTextContainer>
        </MarketItemContainer>
    )
}

export default MarketItem;

const MarketItemContainer = styled.View`
width: ${widthOfItem}px;
margin-bottom: 15px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
box-shadow: 0px 20px 4px rgba(47, 47, 52, 0.9);
`
const MarketImageContainer = styled.View`
position: relative;
`
const HeartCountContainer = styled.Pressable`
background: rgba(47, 47, 52, 0.2);
padding: 8px 10px;
border-radius: 16px;
flex-direction: row;
align-items: center;
position: absolute;
right: 5px;
top: 4px;
`
const HeartCount = styled.Text`
margin-left: 4px;
margin-top: -2px;
`
const MarketTextContainer = styled.View`
flex-direction: row;
justify-content: space-around;
align-items: flex-end;
padding: 4px 6px 20px 6px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
background: rgba(42, 53, 71, 0.3);
`
const MarketNameContainer = styled.View``
const MarketItemName = styled.Text`
color: white;
font-family: NunitoBold;
font-size: ${widthOfItem / 8}px;
margin-bottom: 4px;
`
const MarketItemId = styled.Text`
color: white;
font-family: NunitoBold;
font-size: ${widthOfItem / 12}px
`
const MarketPriceContainer = styled.View`
flex-direction: row;
align-items: center;
`
const MarketPriceImage = styled.Image``
const MarketPrice = styled.Text`
color: white;
font-family: NunitoBold;
font-size: ${widthOfItem / 12}px;
`