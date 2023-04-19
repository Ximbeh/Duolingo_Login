import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'

export default function App() {
  const [fonteLoaded] = useFonts({
    VarelaRound_400Regular
  });

  if(!fonteLoaded){
    return null;
  }


  return (
    <View style={styles.container}>
      <Image style={styles.mascote} source={require('./assets/img/Duolingo_Mascote.png')} />

      <Image style={styles.logo} source={require('./assets/img/Duolingo_logo.png')} />
      <View style={styles.textos}>
        <Text style={styles.p}>Learn a language for free.</Text>
        <Text style={styles.p}>Forever.</Text>
      </View>

      <StatusBar style="auto" />

      <View style={styles.button}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>I Already have an account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascote:{
    height: 100,
    width: 111,

  },
  logo:{
    marginTop: 30,
    height: 30,
    width: 130,
  },

  textos:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30, 
  },

  p:{
    color: '#BEBEBE',
    fontSize: 18,
    fontFamily: 'VarelaRound_400Regular'
  },

  button:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '8%',

  },

  button1:{
    backgroundColor: '#79AE14',
    borderRadius: 25,
    paddingVertical: 15,
    width: '100%',
    borderColor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#437700',


  },

  buttonText1:{
    color: '#fff',
    fontFamily: 'VarelaRound_400Regular',
    fontSize: 20,

  },

  buttonText2:{
    color: '#79AE14',
    fontFamily: 'VarelaRound_400Regular',
    fontSize: 20,
  },

  button2:{
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    width: '100%',
    borderColor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#B8B8B8',
    borderWidth: 2,
    marginBottom: 40,
    borderBottomWidth: 5,
    borderBottomColor: '#B8B8B8',
  }
});
