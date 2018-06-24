import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

const Loader = ({ isLoading }) => (
    <Modal transparent animationType="none" visible={isLoading}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator animating={isLoading} />
            </View>
        </View>
    </Modal>
);

export default Loader;
