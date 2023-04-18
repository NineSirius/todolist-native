import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export const ListItem = ({ item }) => {
    return (
        <TouchableHighlight>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
})
