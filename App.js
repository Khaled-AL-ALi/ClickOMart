import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import home from './components/homepage';

const Stack = createBottomTabNavigator();;

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 0,
          backgrounfColor: '#ffffff',
          borderRadius: 15,
          height: 90
        }
      }}>

        <Stack.Screen name="home" component={home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Entypo name="home" size={30} color="#54be91" />
            </View>
          )
        }} />

        <Stack.Screen name="wish" component={home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <AntDesign name="heart" size={30} color="#54be91" />
            </View>
          )
        }} />

        <Stack.Screen name="shop" component={home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.shopContainer}>
              <View style={styles.subShopContainer}>
                <MaterialIcons name="shopping-cart" size={34} color="white" />
              </View>
            </View>
          )
        }} />

        <Stack.Screen name="Search" component={home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Ionicons name="search-sharp" size={30} color="#54be91" />
            </View>
          )
        }} />

        <Stack.Screen name="user" component={home} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <FontAwesome5 name="user-alt" size={30} color="#54be91" />
            </View>
          )
        }} />

      </Stack.Navigator>
      <View style={styles.underLine} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 2
  },
  shopContainer: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subShopContainer: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#54be91",
    justifyContent: 'center',
    alignItems: 'center',
  },
  underLine: {
    height: 15,
    backgroundColor: '#54be91'
  }
});