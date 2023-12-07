import { Dimensions } from "react-native"
import styled from 'styled-components/native';
import { COLORS } from "../constants/theme";


const { width } = Dimensions.get("window")
const TransactionActionButton = ({ buttonText, icon, primaryType }) => {
  return (
    <TransactionButtonWrapper>
      <TransactionButton style={{ backgroundColor: primaryType ? "#0061FF" : COLORS.darkButtonColor }}>
        {icon}
      </TransactionButton>
      <TransactionButtonText>{buttonText}</TransactionButtonText>
    </TransactionButtonWrapper>
  )
}

export default TransactionActionButton;

const TransactionButtonWrapper = styled.View`
flex-direction: column
align-items: center;
`
const TransactionButton = styled.TouchableOpacity`
width: ${width ? width / 4.5 : 30}px;
height: ${width ? width / 4.5 : 30}px;
border-radius: ${width ? width / 4.5 : 30}px;
display: flex;
justify-content: center;
align-items: center;
`
const TransactionButtonText = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 16px;
text-align: center;
margin-top: 6px;
`