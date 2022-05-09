import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function TopNav(props) {
    const [open, setOpen] = useState(true);

    return (
        <View style={styles.parentDiv}>
            <View style={styles.imgContainer}>
                <View style={styles.subImgContainer}>
                    <Image source={require('../assets/output-onlinepngtools.png')} style={styles.imgLogo} />
                </View>
            </View>
            <TouchableOpacity style={styles.IconPlus} onPress={() => setOpen(!open)}>
                {open ?
                    <Entypo name="plus" size={24} color="white" /> :
                    <AntDesign name="minus" size={24} color="white" />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    parentDiv: {
        height: 50,
        backgroundColor: '#54be91',
        justifyContent: 'center',
        zIndex: 1
    },
    imgLogo: {
        width: 30,
        height: 50,

    },
    IconPlus: {
        position: 'absolute',
        right: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    imgContainer: {
        bottom: -15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subImgContainer: {
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#54be91',
    }
});