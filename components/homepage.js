import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SliderCarousal from '../components/slide Carousel'
import Categories from '../components/categories'
import Offers from "../components/offreList"
import Products from "../components/NewProduct"
import TopNav from "../components/topNav"
import { SpeedDial } from 'react-native-elements';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopNav />
      <ScrollView style={styles.container}>

        <SliderCarousal />
        <Categories />
        <Offers />
        <Products />
      </ScrollView>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'chat', color: 'white' }}
        openIcon={{ name: 'chat', color: 'white' }}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        buttonStyle={{ backgroundColor: '#54be91' }}
      >
        <SpeedDial.Action icon={{ name: 'call', color: '#fff' }} buttonStyle={{ backgroundColor: '#54be91' }} />
        <SpeedDial.Action icon={{ name: 'mail', color: '#fff' }} buttonStyle={{ backgroundColor: '#54be91' }} />
        <SpeedDial.Action icon={{ name: 'chat', color: '#fff' }} buttonStyle={{ backgroundColor: '#54be91' }} />

      </SpeedDial>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

