import React from 'react';
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction} from './styles';

export function HIghlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Header>
            <Footer>
                <Amount>R$ 17.000,00</Amount>
                <LastTransaction>Última transação em 19 de abril</LastTransaction>
            </Footer>
        </Container>
    )
}