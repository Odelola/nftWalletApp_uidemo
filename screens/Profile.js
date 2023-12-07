import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/theme'

const { width } = Dimensions.get("window");
const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>PROFILE</ProfileHeader>
    </ProfileContainer>
  )
}

export default Profile

const ProfileContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background: ${COLORS.primaryBackground}
`
const ProfileHeader = styled.Text`
font-size: ${width / 5}px;
color: white;
letter-spacing: 5px;
transform: rotate(-90deg);
font-family: NunitoBold`