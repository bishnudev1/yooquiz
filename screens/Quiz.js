import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState } from 'react'
import data from '../api/data';

const Quiz = ({ navigation }) => {

  const [questions, setQuestions] = useState(data);
  const [question, setQuestion] = useState(0);
  const [ansno, setAnsno] = useState(0);
  const [score, setScore] = useState(0)

  const handleNext = () => {
    if (question < 10) {
      setQuestion(question + 1);
    }
  }

  const submitQuiz = () => {
    navigation.navigate('Result', { score, question })
  }

  const handleSubmit = () => {
    Alert.alert('Warning', 'Are you sure want to close the quiz ?', [
      { text: 'Yes', onPress: () => { submitQuiz() } },
      { text: 'No', onPress: () => null },
    ])
  }

  const handleAuth = (num) => {
    if (questions[question].corr_option === num) {
      setScore(score + 1)
      if(question < 9){
        setQuestion(question + 1);
      }
      Alert.alert('Congrats', "It's a correct answer")
    }
    else {
      setQuestion(question + 1);
      Alert.alert('Shame', "It's an incorrect answer")
    }
  }

  const showResult = () => {
    navigation.navigate('Result', { score, question })
  }

  return (
    <View>
      {
        questions ? (<>
          <View style={styles.container}>
            <ImageBackground style={styles.imgcontainer} resizeMode="stretch" source={require('../assets/images/quizbackground.jpg')}>
              <View>
                <Text style={{ fontSize: 24, color: 'white', marginBottom: 25 }}>Q. {questions[question].ques}</Text>
                <View>
                  <TouchableOpacity onPress={() => handleAuth(questions[question].options[ansno])} style={styles.anscontainer}>
                    <Text style={styles.ansstyle}>A. {questions[question].options[ansno]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAuth(questions[question].options[ansno + 1])} style={styles.anscontainer}>
                    <Text style={styles.ansstyle}>B. {questions[question].options[ansno + 1]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAuth(questions[question].options[ansno + 2])} style={styles.anscontainer}>
                    <Text style={styles.ansstyle}>C. {questions[question].options[ansno + 2]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAuth(questions[question].options[ansno + 3])} style={styles.anscontainer}>
                    <Text style={styles.ansstyle}>D. {questions[question].options[ansno + 3]}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                <TouchableOpacity onPress={handleSubmit} style={styles.quizbtn}>
                  <Text style={styles.quizbtntext}>Submit</Text>
                  <Icon name='save' size={25} color='white' />
                </TouchableOpacity>
                {
                  question < 9 ? (
                    <TouchableOpacity onPress={handleNext} style={styles.quizbtn}>
                      <Text style={styles.quizbtntext}>Next</Text>
                      <Icon name='retweet' size={25} color='white' />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={showResult} style={styles.quizbtn}>
                      <Text style={styles.quizbtntext}>Show Result</Text>
                      <Icon name='cloud' size={25} color='white' />
                    </TouchableOpacity>
                  )
                }
              </View>
            </ImageBackground>
          </View></>) : (<>
            <Text>Something went wrong!</Text>
          </>)
      }
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
  anscontainer: {
    padding: 15,
    backgroundColor: 'transparent',
    marginBottom: 15,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },
  ansstyle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 17
  },
  quizbtntext: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal:10
  },
  quizbtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection:'row',
    alignItems:'center'
  },
})

export default Quiz
