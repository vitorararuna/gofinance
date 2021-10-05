import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { DataListProps } from '.'
import { FlatList } from 'react-native';


export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: flex-start;
  flex-direction: row;
  /* margin-top: 90px; */
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 10px 24px;
  flex-direction: row;
  justify-content:space-between;
  /* margin-bottom: 19px; */
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View` 
  margin-left: 16px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
 `;

export const Icon = styled(Feather)`
color: ${({ theme }) => theme.colors.secondary};
font-size: ${RFValue(24)}px;

`;

export const HighlightCards = styled.ScrollView.attrs({ //ATTRS -> Acessa propriedades da scrollview pelo styled-components
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFValue(95)}px;
`;

export const Transactions = styled.View`
/* color: ${({ theme }) => theme.colors.secondary};
font-size: ${RFValue(24)}px; */
flex:1;
padding: 0 14px;
margin-top: ${RFPercentage(10)}px;

`;

export const Title = styled.Text`
/* color: ${({ theme }) => theme.colors.secondary}; */
font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.regular};

`;


export const TransactionsList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 15 }
})` 
`