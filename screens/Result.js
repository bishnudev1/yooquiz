import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Result = ({ navigation, route }) => {

    const { score, question } = route.params;
    console.log(score, question)

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgcontainer} resizeMode="stretch" source={require('../assets/images/quizbackground.jpg')}>
                <View>
                    <Text style={styles.resultheadtext}>Yooquiz Results</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.resulttext}>Question Attempted : {question+1}</Text>
                    <Text style={styles.resulttext}>Question Correct : {score}</Text>
                    <Text style={styles.resulttext}>Question False : {(question+1) - score}</Text>
                    <Text style={styles.resulttext}>Total Percentage : {score * 10}</Text>
                </View>
                <View>
                    {
                        score * 10 > 25 ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.resulttext}>You've passed 😀 !</Text>
                            </View>
                        ) : (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.resultmaintext}>You're failed 😢 !</Text>
                            </View>
                        )
                    }
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.quizbtn}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'wheat',textAlign:'center' }}>Go home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.buymeacoffee.com/bishnudevk8')} style={styles.quizbtn}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'wheat',textAlign:'center' }}>Buy me a coffe</Text>
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
        justifyContent: "space-between",
        alignItems: 'center'
    },
    resultheadtext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28
    },
    resulttext: {
        color: 'white',
        fontSize: 22,
        padding: 10
    },
    quizbtn: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical:7
    },
    resultmaintext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 27
    }
})

export default Result
