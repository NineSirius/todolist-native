import {
    View,
    Text,
    FlatList,
    Alert,
    Button,
    TouchableOpacity,
} from 'react-native'
import { Header } from './components/Header'
import { useState } from 'react'
import { ListItem } from './components/ListItem'
import { AddTaskForm } from './components/AddTaskForm'

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: 'Купить молоко', key: 0 },
        { text: 'Помочь маме', key: 1 },
        { text: 'Заработать денег', key: 2 },
    ])

    const deleteItem = (item) => {
        Alert.alert(
            'Удаление задачи',
            'Вы действительно хотите удалить задачу',
            [
                {
                    text: 'Да',
                    onPress: () => {
                        setListOfItems((itemsList) => {
                            const list = itemsList.filter(
                                (elem) => elem.key !== item.key,
                            )
                            return list
                        })
                    },
                },
                {
                    text: 'Отмена',
                    onPress: () => console.log('Отменено'),
                },
            ],
        )
    }

    return (
        <View>
            <Header />
            <View
                style={{
                    backgroundColor: '#f2f2f2',
                    paddingTop: 50,
                    paddingBottom: 50,
                    paddingHorizontal: 10,
                }}
            >
                <AddTaskForm setList={setListOfItems}></AddTaskForm>
                <FlatList
                    data={listOfItems}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => deleteItem(item)}>
                            <ListItem item={item}></ListItem>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}
