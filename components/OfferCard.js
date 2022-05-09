import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Offre(props) {

    const { note, description, price, oldPrice, quatity, img } = props.Offre
    const PriceOffre = (price - oldPrice).toFixed(2)

    return (
        <View style={{ width: 175, margin: 5 }}>
            <View style={styles.headerCard}>
                <View style={styles.FirstContainer}>
                    {quatity > 0 ?
                        <Text style={styles.Priseoffre}>{PriceOffre} LBP</Text> :
                        <Text style={styles.outOfStock}>OUT OF STOCK</Text>
                    }
                    <AntDesign name="heart" size={20} color="#d0d9d2" style={styles.heartIcon} />
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: img }} style={styles.img} />
                </View>
                <View>
                    <Text>{note}</Text>
                </View>
            </View>
            <View>
                {quatity > 0 ?
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.button}>ADD TO CART</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.button}>ADD TO WISHLIST</Text>
                    </TouchableOpacity>

                }
                <Text style={styles.descriptionData}>{description}</Text>
                <Text style={styles.oldprice}>{oldPrice} LBP</Text>
                <Text style={styles.Price}>{price} LBP</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#54be91'
    },
    headerCard: {
        margin: "1%",
        padding: 15,
        backgroundColor: 'white',
    },
    FirstContainer: {
        height: 25
    },
    Priseoffre: {
        fontSize: 12,
        color: '#54be91'
    },
    outOfStock: {
        transform: [{ rotate: '-40deg' }],
        fontSize: 8,
        backgroundColor: "orange",
        color: "white",
        position: 'absolute',
        left: -25,
        top:13,
       borderRadius:50,
        width: "68%",
        textAlign: 'center'
    },
    heartIcon: {
        position: 'absolute', right: 0
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    descriptionData: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    oldprice: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationStyle: 'solid',
        textDecorationColor: '#54be91',
        textDecorationLine: 'line-through',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        height: 40,
        backgroundColor: '#c3c7c4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 15,
        textAlign: 'center',
        color: '#54be91'
    }
});