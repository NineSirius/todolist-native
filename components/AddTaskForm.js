import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Button,
} from 'react-native'

export const AddTaskForm = ({ setList }) => {
    const [taskData, setTaskData] = useState()

    const change = (text) => {
        setTaskData(text)
    }

    return (
        <View style={styles.formWrap}>
            <TextInput
                style={styles.textField}
                onChangeText={change}
                placeholder="Введите название задачи..."
            />

            <Button
                title="Добавить задачу"
                onPress={() =>
                    setList((list) => {
                        return [
                            ...list,
                            {
                                text: taskData,
                                key: +list[list.length - 1].key + 1 || 0,
                            },
                        ]
                    })
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formWrap: {
        margin: 20,
    },
    textField: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
})
