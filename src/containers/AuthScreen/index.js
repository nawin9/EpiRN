import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import { View, Text, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import { ButtonSubmit, UserInput } from '../../components';
import * as actions from './actions';

import styles from './styles';
import images from '../../utils/images';

class AuthScreen extends Component {
    state = {
        email: '',
        password: '',
        rePassword: '',
        isLogin: true,
    };

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.dispatch(
                    NavigationActions.navigate({
                        routeName: 'Main',
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
        if (this.state.isLogin) {
            this.props.login({
                email: this.state.email,
                password: this.state.password,
            });
        } else if (this.state.password === this.state.rePassword) {
            this.props.register({
                email: this.state.email,
                password: this.state.password,
            });
        }
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
                        placeholder="Email"
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
                    {!this.state.isLogin && (
                        <UserInput
                            source={images.passwordIcon}
                            secureTextEntry
                            placeholder="Re password"
                            returnKeyType="done"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={rePassword => this.setState({ rePassword })}
                        />
                    )}
                </KeyboardAvoidingView>

                <TouchableOpacity
                    style={styles.signUpContainer}
                    onPress={() => {
                        this.setState({ isLogin: !this.state.isLogin });
                    }}
                >
                    <Text style={styles.signUpText}>
                        {this.state.isLogin ? 'Create Account' : 'Already registered'}
                    </Text>
                </TouchableOpacity>

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
        register: user => dispatch(actions.register(user)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthScreen);
