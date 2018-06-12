import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Fab, Icon } from 'native-base';
import NewTask from './NewTask';

class LandingPage extends Component {
    static navigationOptions = {
        title: 'Assistant',
    };

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