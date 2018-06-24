import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import { View, Text, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';

import { ButtonSubmit, UserInput } from '../../components';
import * as actions from './actions';

import styles from './styles';
import images from '../../utils/images';

class AuthScreen extends Component {
    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // this.props.userChange({ uid: user.uid, ...user._user });
                this.props.navigation.dispatch(
                    NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({
                                routeName: 'Main',
                            }),
                        ],
                    })
                );
            }
        });
    }

    componentWillUnmount() {
        if (this.authSubscription) {
            this.authSubscription();
        }
    }

    handleOnPress = () => {
        console.log(this.state);
        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    };

    render() {
        return (
            <ImageBackground style={styles.rootContainer} source={images.wallpaper}>
                <View style={styles.container}>
                    <Image source={images.logo} style={styles.image} />
                    <Text style={styles.text}>EPIRN</Text>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <UserInput
                        source={images.userIcon}
                        secureTextEntry={false}
                        placeholder="Username"
                        autoCapitalize="none"
                        returnKeyType="done"
                        autoCorrect={false}
                        onChangeText={email => this.setState({ email })}
                    />
                    <UserInput
                        source={images.passwordIcon}
                        secureTextEntry
                        placeholder="Password"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={password => this.setState({ password })}
                    />
                </KeyboardAvoidingView>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Create Account</Text>
                    <Text style={styles.signUpText}>Forgot Password?</Text>
                </View>

                <ButtonSubmit onPress={() => this.handleOnPress()} />
            </ImageBackground>
        );
    }
}

function mapStateToProps(state) {
    return {
        authState: state.authReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: user => dispatch(actions.login(user)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthScreen);
