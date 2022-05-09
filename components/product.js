import { View, Text, Image, StyleSheet } from 'react-native';

export default function Product(props) {

    const { title, img } = props.Product
    return (
        <View style={styles.parentDiv}>
            <Image source={{ uri: img }} style={styles.Img} />
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parentDiv: {
        width: "32%",
        alignItems: "center",
        margin: "1%",
        padding: 15,
        justifyContent: "space-around"
    },
    Img: {
        width: 75,
        height: 75
    }

});