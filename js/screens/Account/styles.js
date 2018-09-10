import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    firstView: {
        marginTop: 30
    },
    optionsText: {
        fontSize: 20,
        fontFamily: 'Proxima Nova Alt',
        backgroundColor: '#F3FCFC',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9E7ED'
    },
    signOutText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'BalooBhai-Regular',
        fontSize: 18
    },
    signOutButton: {
        backgroundColor: '#5D5BA0',
        paddingVertical: 13,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 30

    }
   
})

export default styles;