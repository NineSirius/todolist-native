import { View, Text, StyleSheet } from 'react-native'

export const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список задач</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },

    text: {
        fontSize: 18,
        color: '#444',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
})
