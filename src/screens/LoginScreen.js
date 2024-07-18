


import Icon from 'react-native-vector-icons/FontAwesome'; // You can replace 'FontAwesome' with the desired icon set
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground, Alert } from 'react-native';
// import axios from 'axois'
import { auth } from '..//..//FirebaseConfig'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  sendPasswordResetEmail } from "firebase/auth";
import {  signOut } from "firebase/auth";




const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleforget=()=>{

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        Alert.alert('Password reset link sucessfully send')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    // updateProfile(user, { displayName: 'DefaultDisplayName' })

      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user) {
          navigation.navigate('Main', { user });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  const handleSignup = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.body}>
      <Text style={{marginTop:100,fontSize:30,fontWeight:'700', alignSelf:'center'}}>Sign in now</Text>
      <Text style={{marginTop:10,fontSize:15,fontWeight:'500',alignSelf:'center'}}> Please sign in to continue </Text>

      <View style={{margin:20}}>
      <TextInput placeholder='email'  style={{
        width:335,
        height:56,
        backgroundColor:'#E5E2E2',
        borderRadius:15,
        marginBottom:20,
        paddingLeft:15,
      }}
      value={email}
      onChangeText={text => setEmail(text)}/>
        <TextInput placeholder='password' secureTextEntry style={{
        width:335,
        height:56,
        backgroundColor:'#E5E2E2',
        borderRadius:15,
        paddingLeft:15,
      }}
      value={password}
      onChangeText={text => setPassword(text)}/>
      </View>
      <TouchableOpacity
          style={{ marginLeft: "60%", marginTop: 15, }}
          onPress={handleforget}        >
          <Text style={{ fontSize: 15,fontWeight:'500'  }}>Forget password ?</Text>
        </TouchableOpacity>



<TouchableOpacity
onPress={handleLogin}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "red",
            width: 335,
            height: 56,
            borderRadius: 20,
            marginTop: 40,
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>
            {" "}
            Get started
          </Text>
          
        </TouchableOpacity>
        <View
        style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
      >
        <Text style={{fontWeight:'500'}}> Don't have account ?</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={handleSignup}        >
          <Text style={{ fontSize: 15, color: "red",fontWeight:'700' }}>Signup</Text>
        </TouchableOpacity>
      </View>
        <View style={{flexDirection:'row',marginTop:100,alignSelf:'center'}}>
          <Text> Or connect social media account</Text>
          {/* <TouchableOpacity
          style={{ marginLeft:10,  }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ fontSize: 15, color: "#3A79D9" }}>Skip</Text>
        </TouchableOpacity> */}

        

        </View>
        {/* <Text style={{alignSelf:'center',marginTop:10}}>Or connect</Text> */}
        <View style={styles.Iconcontainer}>
          <TouchableOpacity>
      <Icon name="facebook" size={30} color="blue" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon name="google" size={30} color="blue" style={styles.icon} />
      </TouchableOpacity>
      {/* <Icon name="instagram" size={30} color="#fff" style={styles.icon} /> */}
      {/* Add more social media icons as needed */}
    </View>

    </View>
  )
}


const styles = StyleSheet.create({
  body:{
    justifyContent:'center',
    alignSelf:'center'
  },
  Iconcontainer:{
    flexDirection: 'row',  // Align icons horizontally
    // backgroundColor: '#3498db',  // Set a colorful background
    padding: 10,  // Add padding for better appearance
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginTop:20
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: 'white', 
    width:80,
    height:50,
    alignItems:'center', 
    paddingHorizontal:25,
    paddingVertical:10,
    borderRadius:20
    
  },
})
export default Login;
// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground, Alert } from 'react-native';
// // import axios from 'axois'
// import { auth } from '..//..//FirebaseConfig'
// import {  signInWithEmailAndPassword } from "firebase/auth";
// import {  sendPasswordResetEmail } from "firebase/auth";
// import {  signOut } from "firebase/auth";




// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleforget=()=>{

//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         // Password reset email sent!
//         // ..
//         Alert.alert('Password reset link sucessfully send')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
//   }


// const handleLogin=()=>{
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       if(user){
//       navigation.navigate('Home');
//       }

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Alert.alert(errorMessage);

//     });

//   }

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
//   const handleSignup = () => {
//     navigation.navigate('Register');
//   };


//   return (
//     // <ImageBackground source={require('../assets/loginback.png')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <Text
//         style={{color:'black',marginRight:"80%",fontSize:15,marginBottom:10}}
//         >Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//         />
//                 <Text
//         style={{color:'black',marginRight:"80%",fontSize:15,marginBottom:10}}
//         >Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={text => setPassword(text)}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity  onPress={handleforget}>
//           <Text style={styles.button1}>forget Password</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleSignup}>
//           <Text style={styles.registerLink}>Don't have an account? Register</Text>
//         </TouchableOpacity>
//          {/* <Button title="Signup" onPress={handleSignup} /> */}

//       </View>
//       // </ImageBackground>
//   );
// };


// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     //justifyContent: 'center',
//     //alignItems: 'center',
//   },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//       marginTop:370,
//     },
//     input: {
//       width: '100%',
//       height: 60,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 20,
//       fontSize:15,
//       padding: 10,
//       marginBottom: 7,
//       justifyContent:'center',
//       alignItems:'center',
//       color:'#000',
//       backgroundColor:"#f0f2f5",
//     },
  
 
  
//   button: {
//     width: '90%',
//     height: 50,
//     backgroundColor: '#6e665a',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 1,
//     paddingHorizontal: 95,
//     marginTop:10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   button1:{
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',

//   },
//   registerLink: {
//     color: '#888',
//     //textDecorationLine: 'underline',
//     marginTop: 10,
//     fontSize:18,
//   },
// });

// export default LoginScreen;