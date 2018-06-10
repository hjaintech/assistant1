import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon} from 'native-base';

const AppHeader = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Assistant</Title>
            </Body>
            <Right />
        </Header>
    );
}

export default AppHeader;