import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    signUpContainer: {
        flex: 1,
        top: 65,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    signUpText: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});
