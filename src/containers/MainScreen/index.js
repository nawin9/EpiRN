import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

class MainScreen extends Component {
    handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.dispatch(
                NavigationActions.navigate({
                    routeName: 'Auth',
                })
            );
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: '50%',
                }}
            >
                <Button title="Log Out" onPress={this.handleLogout} />
            </View>
        );
    }
}

export default MainScreen;
