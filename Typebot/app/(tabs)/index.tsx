import { StyleSheet,View } from 'react-native';
import { Bubble } from "@typebot.io/react";


export default function HomeScreen() {
  return (
 
<View style={styles.container}>
<text style={styles.title}>Olha que legal o que foi feito</text>
<Bubble
      typebot="my-typebot-qmyr6mq"
      previewMessage={{
        message: "Ei posso te ajudar ?",
        avatarUrl:
          "https://i.pinimg.com/736x/a7/42/77/a74277e4601af5adb969288da85b91f3.jpg",
      }}
      theme={{ button: { backgroundColor: "#0042DA", customIconSrc: "🍻" } }}
    />
</View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    padding:30,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#333',
    marginBottom:20,
  }
  
});
