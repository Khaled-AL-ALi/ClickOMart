import { FlatList, SafeAreaView } from 'react-native';
import Product from './product'

const categories =
    [
        {
            id: 1,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 2,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 3,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 4,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 5,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 6,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 7,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 8,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 9,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        },
        {
            id: 10,
            title: "Ramadan",
            img: 'https://clickomart.imgix.net/categories/icons/1617030600401_file.png?fit=contain&h=45&w=45&auto=format,compress'
        }
    ]

export default function Categories() {

    return (
        <SafeAreaView>
            <FlatList
                numColumns={3}
                data={categories}
                key={categories.id}
                renderItem={({ item }) => (<Product Product={item} />)}
            >
            </FlatList>
        </SafeAreaView>
    );
}