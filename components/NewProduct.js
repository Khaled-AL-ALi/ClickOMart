import { View, Text, FlatList, StyleSheet } from 'react-native';
import NewProd from './NewProd'

const NewItem =
    [
        {
            id: 1,
            note: "1L",
            description: "Cortina Premium Pistachios 1 L",
            price: '50000',
            oldprice: '60000',
            quatity: '5',
            img: 'https://clickomart.imgix.net/files/1651229889017_image.png?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max'
        },
        {
            id: 2,
            note: "1L",
            description: "Cortina Premium Pistachios 1 L",
            price: '75000',
            oldprice: '85000',
            quatity: '5',
            img: 'https://clickomart.imgix.net/files/1651229889017_image.png?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max'
        },
        {
            id: 3,
            note: "1L",
            description: "Cortina Premium Pistachios 1 L",
            price: '50000',
            quatity: '5',
            img: 'https://clickomart.imgix.net/files/1651229889017_image.png?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max'
        },
    ]
export default function Products() {
    return (
        <View style={styles.parentDiv}>
            <View>
                <Text style={styles.sectionTitle}>New Products</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={NewItem}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<NewProd key={item.id} NewProd={item} />)}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    parentDiv: {
        flex: 1,
        backgroundColor: '#dcdedc'
    },
    sectionTitle: {
        marginLeft: "1%",
        marginBottom: 30,
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    }
});