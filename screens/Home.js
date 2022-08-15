import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgcontainer} resizeMode="stretch" source={require('../assets/images/quiz.jpg')}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 28, color: 'blue', paddingBottom: 30, fontFamily:'DynaPuff-SemiBold' }}>Welcome to Yooquiz</Text>
          <Image style={styles.homeimg} source={require('../assets/images/home.png')} />
        </View>
        <View>
          <Text style={{ fontSize: 25, color: 'blue', paddingBottom: 25, fontFamily:'DynaPuff-Regular' }}>Quiz Rules</Text>
          <View>
            <Text style={styles.rulestext}>1. You must attempt all questions.</Text>
            <Text style={styles.rulestext}>2. Each question has only one right answer.</Text>
            <Text style={styles.rulestext}>3. The time for each question is 15 seconds.</Text>
            <Text style={styles.rulestext}>4. You can't revert to previous question.</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.homebtn}>
            <Text style={styles.hometextbtn}>Play yooquiz</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  imgcontainer: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between"
  },
  homeimg: {
    height: 250,
    width: '100%',
    borderRadius: 16
  },
  homebtn: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth:1,
    borderColor:'grey'
  },
  hometextbtn: {
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
    fontFamily:'DynaPuff-SemiBold'
  },
  rulestext: {
    fontSize: 17,
    color: 'blue',
    fontFamily:'JosefinSans-Medium'
  }
})

export default Home
