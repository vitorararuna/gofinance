import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HIghlightCard } from '../../components/HighlightCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/49912005?v=4' }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Vitor</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards
            // horizontal
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{paddingHorizontal: 24}}
            >
                <HIghlightCard title="entradas" amount="R$ 17.400,00" lastTransaction="Última entrada em 13 de abril" type="up"/>
                <HIghlightCard title="saídas" amount="R$ 1.259,00" lastTransaction="Última saída em 3 de abril" type="down"/>
                <HIghlightCard title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" type="total"/>
            </HighlightCards>
        </Container>
    );
};