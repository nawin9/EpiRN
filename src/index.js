import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import configureStore from './store';
import MainScreen from './containers/MainScreen';
import AuthScreen from './containers/AuthScreen';

const Routes = createStackNavigator(
    {
        Auth: {
            screen: AuthScreen,
        },
        Main: { screen: MainScreen },
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none',
    }
);

const prevGetStateForAction = Routes.router.getStateForAction;
Routes.router.getStateForAction = (action, state) => {
    if (state && action.type === 'Navigation/NAVIGATE') {
        const index = state.routes.findIndex(item => item.routeName === action.routeName);
        if (index > -1) {
            const routes = state.routes.slice(0, index + 1);
            return {
                routes,
                index,
            };
        }
    }
    return prevGetStateForAction(action, state);
};

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
