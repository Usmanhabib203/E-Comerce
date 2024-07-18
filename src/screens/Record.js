// import { useState } from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Audio } from 'expo-av';

// export default function App() {
//   const [recording, setRecording] = useState();
//   const [permissionResponse, requestPermission] = Audio.usePermissions();

//   async function startRecording() {
//     try {
//       if (permissionResponse.status !== 'granted') {
//         console.log('Requesting permission..');
//         await requestPermission();
//       }
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });

//       console.log('Starting recording..');
//       const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
//       );
//       setRecording(recording);
//       console.log('Recording started');
//     } catch (err) {
//       console.error('Failed to start recording', err);
//     }
//   }

//   async function stopRecording() {
//     console.log('Stopping recording..');
//     setRecording(undefined);
//     await recording.stopAndUnloadAsync();
//     await Audio.setAudioModeAsync(
//       {
//         allowsRecordingIOS: false,
//       }
//     );
//     const uri = recording.getURI();
//     console.log('Recording stopped and stored at', uri);
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title={recording ? 'Stop Recording' : 'Start Recording'}
//         onPress={recording ? stopRecording : startRecording}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 10,
//   },
// });


// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function App() {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraType() {
//     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// // import Device from 'expo-device';
// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android' && !Device.isDevice) {
//         setErrorMsg(
//           'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
//         );
//         return;
//       }
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });



// import { useEffect } from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import * as ScreenCapture from 'expo-screen-capture';
// import * as MediaLibrary from 'expo-media-library';

// export default function ScreenCaptureExample() {
//   useEffect(() => {
//     if (hasPermissions()) {
//       const subscription = ScreenCapture.addScreenshotListener(() => {
//         alert('Thanks for screenshotting my beautiful app 😊');
//       });
//       return () => subscription.remove();
//     }
//   }, []);

//   const hasPermissions = async () => {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     return status === 'granted';
//   };

//   const activate = async () => {
//     await ScreenCapture.preventScreenCaptureAsync();
//   };

//   const deactivate = async () => {
//     await ScreenCapture.allowScreenCaptureAsync();
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Activate" onPress={activate} />
//       <Button title="Deactivate" onPress={deactivate} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React, { useState } from 'react';
// import { View, TextInput, ScrollView, FlatList, Text } from 'react-native';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [data, setData] = useState([
//     { id: '1', name: 'Apple' },
//     { id: '2', name: 'Banana' },
//     { id: '3', name: 'Orange' },
//     { id: '4', name: 'Mango' },
//     { id: '5', name: 'Grapes' },
//   ]);

//   return (
//     <ScrollView>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
//         placeholder="Search"
//         onChangeText={text => setSearch(text)}
//         value={search}
//       />
//       <FlatList
//         data={data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 10 }}>{item.name}</Text>
//         )}
//       />
//     </ScrollView>
//   );
// };

// export default App;


import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};


export default App;


    
    