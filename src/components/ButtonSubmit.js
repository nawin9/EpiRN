import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, Animated, Easing, Image, View } from 'react-native';

import images from '../utils/images';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -100,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default class ButtonSubmit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
    }

    onPress = () => {
        if (this.state.isLoading) return;
        this.props.onPress();
        this.setState({ isLoading: true });
        Animated.timing(this.buttonAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            Animated.timing(this.growAnimated, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
            }).start();
        }, 2000);

        setTimeout(() => {
            // Actions.secondScreen();
            this.setState({ isLoading: false });
            this.buttonAnimated.setValue(0);
            this.growAnimated.setValue(0);
        }, 2300);
    };

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN],
        });

        return (
            <View style={styles.container}>
                <Animated.View style={{ width: changeWidth }}>
                    <TouchableOpacity style={styles.button} onPress={this.onPress} activeOpacity={1}>
                        {this.state.isLoading ? (
                            <Image source={images.spinner} style={styles.image} />
                        ) : (
                            <Text style={styles.text}>LOGIN</Text>
                        )}
                    </TouchableOpacity>
                    <Animated.View style={[styles.circle, { transform: [{ scale: changeScale }] }]} />
                </Animated.View>
            </View>
        );
    }
}
