import { StatusBar } from 'expo-status-bar';
import { Image, Dimensions, Alert } from 'react-native';
import { COLORS, MEASUREMENTS } from '../constants/theme';
import { RingBackgroundImage, RingBackgroundImage_ellipse } from "../components/icons/svgImages"
import styled from 'styled-components/native';
import { images } from '../constants';
import { TransactionActionButton, TokenOrNft } from "../components"
import { PlusIcon, ReceiveMoneyIcon, SendMoneyIcon } from '../components/icons';
import { LinearGradient } from 'expo-linear-gradient';

const { paddingHorizontal } = MEASUREMENTS;
const { width, height } = Dimensions.get("screen")
const Home = () => {

  const HomeButtons = [
    {
      buttonText: "Send",
      icon: <SendMoneyIcon />,
      primaryType: false,
    },
    {
      buttonText: "Buy",
      icon: <PlusIcon />,
      primaryType: true,
    },
    {
      buttonText: "Receive",
      icon: <ReceiveMoneyIcon />,
      primaryType: false,
    },
  ]
  return (
    <>
      <StatusBar style="light" />
      <HomeContainer
        showsVerticalScrollIndicator={false}
        bounces={false}
>
        <RingBackgroundImageContainer>
          <RingBackgroundImage />
          <RingBackgroundImageEllipse>

              <RingBackgroundImage_ellipse />
            </RingBackgroundImageEllipse>
          <LinearGradient
            colors={['#0F111E', 'rgba(15, 17, 30, 0.9)',]}
            locations={[0.9, 0.8]}
            style={{ width: width, height: height / 0.5, position: "absolute", zIndex: -1 }}>
          </LinearGradient>
        </RingBackgroundImageContainer>
        <Nav>
          <NavInner>
            <NavAccount>
              <Image source={images.accountImage} width={20} height={20} />
              <AccountName>Account_1</AccountName>
            </NavAccount>
            <Image source={images.notificationImage} width={20} height={20} />
          </NavInner>
        </Nav>
        <Hero>
          <HeroInner>
            <HeroHeaderText>Current Wallet Balance</HeroHeaderText>
            <HeroHeaderBalanceContainer>
              <HeroHeaderBalance>$5,323.00</HeroHeaderBalance>
              <Image
                source={images.chevronDownImage}
                width={20}
                height={20}
                style={{ marginBottom: 10, marginLeft: 5}}
              />
            </HeroHeaderBalanceContainer>
          </HeroInner>
          <BTCBalanceContainer>
            <BTCBalance>BTC: 0,00335</BTCBalance>
            <BTCRiseContainer>
              <Image
                source={images.chevronUpImage}
                width={20}
                height={20}
              />
              <BTCRise>+6.54%</BTCRise>
            </BTCRiseContainer>
          </BTCBalanceContainer>
          <TransactionActionContainer>
            {HomeButtons.map(item => (
              <TransactionActionButton key={item.buttonText} buttonText={item.buttonText} icon={item.icon} primaryType={item.primaryType} />
            ))}
          </TransactionActionContainer>
        </Hero>
        <TokenOrNft />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.ScrollView`
flex: 1;
background-color: ${COLORS.primaryBackground};
`;

const RingBackgroundImageContainer = styled.View`
position: absolute;
top: ${-(height * 0.05)}px;
right: ${-(width / 5)}px;
`;

const RingBackgroundImageEllipse = styled.View`
position: absolute;
top: ${(height * 0.15)}px;
left: ${(width / 5)}px;
`;

const Nav = styled.View`
  width: 100%;
  padding: 45px 20px;
`;

const NavInner = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavAccount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AccountName = styled.Text`
  color: white;
  font-size: 18px;
  margin-left: 6px;
`;

const Hero = styled.View`
padding: 0 ${paddingHorizontal}px;
`;

const HeroInner = styled.View`
`;

const HeroHeaderText = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-family: NunitoRegular;
`;

const HeroHeaderBalanceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const HeroHeaderBalance = styled.Text`
  color: white;
  font-size: 40px;
  text-align: center;
  font-family: NunitoBold;
`;

const BTCBalanceContainer = styled.View`
  background: #2F2F34;
  border-radius: 24px;
  margin: 20px auto;
  padding: 8px 12px;
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BTCBalance = styled.Text`
  color: white;
  font-family: NunitoBold;
`;
const BTCRiseContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const BTCRise = styled.Text`
  background: #2F2F34;
  color: #00FFA3;
  border-radius: 4px;
`;
const TransactionActionContainer = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 25px 0 45px 0;
`;
