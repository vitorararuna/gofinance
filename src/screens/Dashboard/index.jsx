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
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 24}}
            >
                <HIghlightCard />
                <HIghlightCard />
                <HIghlightCard />
            </HighlightCards>
        </Container>
    );
};