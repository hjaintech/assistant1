import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Fab, Icon } from 'native-base';
import NewTask from './NewTask';
import AppHeader from './AppHeader';

class LandingPage extends Component {
    state = {
        active: false,
        isAddWindowOpen: false
    }

    onAddItemPress = () => {
        this.props.navigation.navigate('NewTask');
        /*this.setState({
            isAddWindowOpen: true
        });*/
    }

    render() {
        let content = null;
        if (this.state.isAddWindowOpen) {
            content = <NewTask />;
        }

        return (
            <Container>
                <AppHeader />
                {content}
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={this.onAddItemPress}>
                    <Icon name="add" onPress={this.onAddItemPress} />
                </Fab>
            </Container>
        );
    }
}

export default LandingPage;