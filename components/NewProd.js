import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function NewProd(props) {

    const { note, description, oldprice, price, img } = props.NewProd
    const PriceOffre = ((price - oldprice) * 100 / price).toFixed(2)
    return (
        <View style={styles.parentDiv}>
            <View style={styles.headerContainer}>
                <View style={styles.firstItem}>
                    {oldprice ?
                        <Text style={styles.priceOffre}>{PriceOffre} %</Text> :
                        null
                    }
                    <AntDesign name="heart" size={20} color="#d0d9d2" style={styles.iconStyle} />
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: img }} style={styles.itemImg} />
                </View>
                <View>
                    <Text>{note}</Text>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>ADD TO CART</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionData}>{description}</Text>
                {oldprice ?
                    <Text style={styles.oldprice}>{oldprice} LBP</Text> :
                    null
                }
                <Text style={styles.Price}>{price} LBP</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    parentDiv: {
        width: 175,
        margin: 5
    },
    headerContainer: {
        padding: 10,
        backgroundColor: 'white'
    },
    firstItem: {
        height: 25
    },
    priceOffre: {
        fontSize: 13,
        color: '#54be91'
    },
    iconStyle: {
        position: 'absolute',
        right: 0
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    secondContainer: {
        paddingBottom: 30
    },
    oldprice: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationStyle: 'solid',
        textDecorationColor: '#54be91',
        textDecorationLine: 'line-through',
    },
    descriptionData: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    Price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#54be91'
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