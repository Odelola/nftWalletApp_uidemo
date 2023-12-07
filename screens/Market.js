import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image } from 'react-native'
import styled from 'styled-components/native';
import { COLORS, MEASUREMENTS } from '../constants/theme';
import { images } from '../constants';
import { MarketFiltersList, MarketItem } from '../components';
import { BanditLikeMonkeyImage, BeebopMonkeyImage, CybertronMonkeyImage, FemaleCharacterImage, FlyAndMonkeyImage, PirateBanditLikeMonkeyImage, RingBackgroundImage } from '../components/icons/svgImages';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';


const { paddingHorizontal } = MEASUREMENTS;
const { width, height } = Dimensions.get("screen")

const Market = () => {
  const tabHeight = useBottomTabBarHeight();
  const ListOfFilters = [
    "All NFTs",
    "Art",
    "Collectibles",
    "Music",
    "Photography",
  ]
  const ListOfMarketNfts = [
    {
      image: FemaleCharacterImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
    {
      image: BeebopMonkeyImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
    {
      image: CybertronMonkeyImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
    {
      image: PirateBanditLikeMonkeyImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
    {
      image: FlyAndMonkeyImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
    {
      image: BanditLikeMonkeyImage,
      name: "Super Influencers",
      id: "#1267",
      ethereumPrice: "6.64",
    },
  ]
  const [activeId, setActiveId] = useState(0);
  return (
    <>
      <StatusBar style="light" />
      <MarketContainer
        style={{ paddingBottom: tabHeight }}
      >
        <RingBackgroundImageContainer>

          <RingBackgroundImage />
        </RingBackgroundImageContainer>

        <MarketItems
          data={ListOfMarketNfts}
          ListHeaderComponent={() => (
            <>
              <Nav>
                <NavInner>
                  <NavScreenName>
                    Market
                  </NavScreenName>
                  <Image source={images.notificationImage} width={20} height={20} style={{ position: "absolute", right: 15, top: -5 }} />
                </NavInner>
              </Nav>
              <MarketFilters
                horizontal
                showsHorizontalScrollIndicator={false}>
                {ListOfFilters.map((filter, index) => (
                  <MarketFiltersList key={index} activeId={activeId} setActiveId={setActiveId} filterTitle={filter} index={index} />
                ))}
              </MarketFilters>
            </>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item} ${index}`}
          renderItem={({ item, index }) => {
            return (<MarketItem image={item.image} name={item.name} id={item.id} price={item.ethereumPrice} index={index} />)
          }}
          numColumns={2}
        />
      </MarketContainer>
    </>
  )
}

export default Market

const MarketContainer = styled.View`
flex: 1;
background-color: ${COLORS.primaryBackground};
`
const RingBackgroundImageContainer = styled.View`
position: absolute;
`;
const Nav = styled.View`
width: 100%;
padding: 45px 0px 25px 0;
`
const NavInner = styled.View`
align-items: center;
`
const NavScreenName = styled.Text`
color: white;
text-align: center;
font-size: 25px;
font-family: NunitoBold;
`
const MarketInnerContainer = styled.View``
const MarketFilters = styled.ScrollView`
margin-bottom: 30px;
`
const MarketItems = styled.FlatList`
padding: 0 0 0 ${paddingHorizontal}px;
`