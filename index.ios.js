import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Dimensions } from 'react-native';
import App from './src';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
});

class EpiRN extends Component {
    isIPhoneX = () => {
        const dimen = Dimensions.get('window');
        return dimen.height === 812 || dimen.width === 812;
    };

    render() {
        if (this.isIPhoneX()) {
            return (
                <View style={styles.safeArea}>
                    <App />
                </View>
            );
        }
        return <App />;
    }
}

AppRegistry.registerComponent('epirn', () => EpiRN);
