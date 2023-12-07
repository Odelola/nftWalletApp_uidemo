import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


const MarketFiltersList = ({ filterTitle, index, activeId, setActiveId }) => {
    return (
        <LinearGradient colors={ index == activeId ? ['#0AFF96', '#00E0FF'] : ['#2F2F34', '#2F2F34']} style={{ marginRight: 20, borderRadius: 36, padding: 2 }}>
            <FilterTab onPress={() => {
                setActiveId(prev => prev = index);

            }}>
                <FilterTabText>{filterTitle}</FilterTabText>
            </FilterTab>
        </LinearGradient>
    )
}

export default MarketFiltersList;

const FilterTab = styled.Pressable`
background: #2F2F34;
border-radius: 36px;
padding: 10px 20px;
`
const FilterTabText = styled.Text`
color: white;
font-family: NunitoBold;
font-size: 15px;
`