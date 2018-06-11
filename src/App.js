import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import LandingPage from './components/LandingPage';
import NewTask from './components/NewTask';

/*class HomeScreen extends Component {
    render() {
        return (
            <LandingPage />
        );
    }
}*/

// Exporting directly LandingPage component for now. Can change it back to Homescreen later, if required.
const RootStack = createStackNavigator(
    {
        Home : LandingPage,
        NewTask : NewTask
    },
    {
        initialRouteName : 'Home'
    }
);

// Export the App component which has the Root Stack component
export default class App extends Component{
    render(){
        return <RootStack />
    }
}

