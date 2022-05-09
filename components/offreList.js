import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Offre from './OfferCard'

export default function Offers() {

    const offredata =
        [
            {
                id: 1,
                title: "Persil",
                note: "8kg",
                description: "persil Deep cleen Original 8Kg",
                price: '250000',
                oldPrice: '300000',
                quatity: '0',
                img: 'https://clickomart.imgix.net/files/1627398909458_image.jpg?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max',
            },
            {
                id: 2,
                title: "Persil",
                note: "8kg",
                description: "persil Deep cleen Original 8Kg",
                price: '82000',
                oldPrice: '100000',
                quatity: '3',
                img: 'https://clickomart.imgix.net/files/1627398909458_image.jpg?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max',
            },
            {
                id: 3,
                title: "Persil",
                note: "8kg",
                description: "persil Deep cleen Original 8Kg",
                price: '15000',
                oldPrice: '35000',
                quatity: '17',
                img: 'https://clickomart.imgix.net/files/1627398909458_image.jpg?w=180&h=150&auto=enhance%2Cformat&sharp=30&trim=auto&trim-sd=2&fit=max',
            },
        ]


    const renderItem = ({ item }) => (
        <Offre key={item.id} Offre={item} />
    );

    return (
        <View style={styles.parentDiv}>
            <View>
                <Text style={styles.sectionTitle}>Offers</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={offredata}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
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
        marginTop:15,
        fontSize: 18,
        fontWeight: 'bold'
    }
});