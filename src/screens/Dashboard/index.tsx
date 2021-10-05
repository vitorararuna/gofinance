import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HIghlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {Container,Header,UserWrapper,UserInfo,Photo,User,UserGreeting,UserName,Icon,HighlightCards,Transactions,Title,TransactionsList} from './styles';
export interface DataListProps extends TransactionCardProps {
    id: string;
  }

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Projeto de Desenvolvimento de sistema",
            amount: "R$ 12.000,00",
            category: { name: 'Vendas', icon: 'dollar-sign' },
            date: "13/04/2021",
        },
        {
            id: '2',
            type: 'negative',
            title: "Projeto de Desenvolvimento de sistema",
            amount: "R$ 12.000,00",
            category: { name: 'Vendas', icon: 'dollar-sign' },
            date: "13/04/2021",
        },
        {
            id: '3',
            type: 'negative',
            title: "Projeto de Desenvolvimento de sistema",
            amount: "R$ 12.000,00",
            category: { name: 'Vendas', icon: 'dollar-sign' },
            date: "13/04/2021",
        },
    ]

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
            <HighlightCards>
                <HIghlightCard title="entradas" amount="R$ 17.400,00" lastTransaction="Última entrada em 13 de abril" type="up" />
                <HIghlightCard title="saídas" amount="R$ 1.259,00" lastTransaction="Última saída em 3 de abril" type="down" />
                <HIghlightCard title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" type="total" />
            </HighlightCards>
            <Transactions>
                <Title>Transações</Title>
                <TransactionsList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    keyExtractor={item => item.id}
                />
            </Transactions>
        </Container>
    );
};