import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.93,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    mainText: {
        alignSelf: 'center',
        marginBottom: 15,
        color: '#35377B',
        fontSize: 20
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    text: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
        color: '#35377B',
        fontSize: 20,
        fontFamily: 'Proxima Nova Alt'
    }
})

export default styles;
