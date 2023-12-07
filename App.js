import React from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Market, Wallet, Profile } from './screens';
import { ArrowSwapIcon, HomeIcon, HomeIconActive, MarketIcon, MarketIconActive, ProfileIcon, ProfileIconActive, WalletIcon, WalletIconActive } from './components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Alert } from 'react-native';
import styled from 'styled-components';

const App = () => {
  const [loaded] = useFonts({
    // Nunito-Sans Fonts
    NunitoRegular: require('./config/fonts/Nunito/static/Nunito-Regular.ttf'),
    NunitoBold: require('./config/fonts/Nunito/static/Nunito-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const SwapIcon = () => {
    const SwapButton = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    margin-top: -32px;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background-color: #0061FF;
    `
    return (
      <SwapButton>
        <ArrowSwapIcon />
      </SwapButton>
    )
  }
  const AppBottomTabNavigator = () => {
    return (
      <AppBottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "Home":
                return focused ? <HomeIconActive /> : <HomeIcon />
              case "Wallet":
                return focused ? <WalletIconActive /> : <WalletIcon />
              case "Swap":
                return <SwapIcon />
              case "Market":
                return focused ? <MarketIconActive /> : <MarketIcon />
              case "Profile":
                return focused ? <ProfileIconActive /> : <ProfileIcon />
              default:
                break;
            }
          },
          headerShown: false,
          tabBarIconStyle: { marginBottom: 5, },
          tabBarLabelStyle: { color: "white", fontSize: 16, height: 15, },
          tabBarStyle: { border: "none", borderTopLeftRadius: 40, borderTopRightRadius: 40, position: "absolute" },
          tabBarItemStyle: {
            flex: 1,
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={['rgba(42, 53, 71, .8)', 'rgba(68, 68, 68, 0.5)', '#2A3547']}
              style={{ flex: 1, backgroundColor: "none" }}
            >

              <BlurView
                tint='dark'
                intensity={100}
              />
            </LinearGradient>
          ),
        })
        }>

        <AppBottomTab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: "Home",
            title: "Home",
          }}
        />
        <AppBottomTab.Screen name="Wallet" component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            title: "Wallet",
          }}
        />
        <AppBottomTab.Screen children={() => Alert.alert("NFT Swapped")} name="Swap"
          options={{
            tabBarLabel: "Swap",
            title: "Swap",
          }}
        />
        <AppBottomTab.Screen name="Market" component={Market}
          options={{
            tabBarLabel: "Market",
            title: "Market",
          }}
        />
        <AppBottomTab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel: "Profile",
            title: "Profile",
          }}
        />

      </AppBottomTab.Navigator >
    );
  }
  const AppStack = createNativeStackNavigator();
  const AppBottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="AppBottomTabNavigator" component={AppBottomTabNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
