import { Image, View, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5;

const images =
    [
        'https://clickomart.imgix.net/files/1648651274001_image.gif?fit=contain&auto=format%2Ccompress&w=1920',
        'https://clickomart.imgix.net/files/1643816462576_image.jpg?fit=contain&auto=format%2Ccompress&w=1920',
    ]

export default function SliderCarousal() {
    return (
        <View style={{ width, height}}>
            <FlatList
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
                data={images}
                renderItem={({ item }) => <Image
                    source={{ uri: item }}
                    style={{ width, height, resizeMode: 'cover' }} />}
            />
        </View>
    );
}