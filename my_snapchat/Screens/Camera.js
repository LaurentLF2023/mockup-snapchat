import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, MaterialCommunityIcons } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import PickerApp from './Picker';

const CameraApp = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const ref = useRef(null)
  const cameraRef = React.createRef();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await cameraRef.current.takePictureAsync()
    console.debug(photo.uri)
    setImage(photo.uri);
    console.log(photo.uri);
    navigation.navigate("CameraPreview", {snap: photo.uri})
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Pas d'accés à la caméra</Text>;
  }
  else{
  return (
    <View style={styles.container}>
		<TouchableOpacity style={styles.flash}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off);
            }}>
        <Ionicons style={styles.flashButton} name="flash" size={30} color="#ffdd00" />
          </TouchableOpacity>
      <Camera flashMode={flash} ref ={cameraRef} style={styles.camera} type={type}>
      
      </Camera>
        <View style={styles.buttonContainer} >

          <TouchableOpacity
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <MaterialIcons style={styles.flip} name="flip-camera-android" size={50} color="#ffdd00" />
          </TouchableOpacity>

		  <TouchableOpacity
			style={styles.snapButton}		  
            onPress={takePhoto}
          >
          <Ionicons name="radio-button-on" size={80} color="#ffdd00" />
             
          </TouchableOpacity>
		  <TouchableOpacity
			style={styles.pickButton}		  
            onPress={ () =>{ navigation.navigate("Picker")}}
          > 
          <MaterialIcons style={styles.pickButton} name="photo-library" size={50} color="#ffdd00" />
          </TouchableOpacity>
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	camera: {
	  flex: 1,
	},
	flash: {
    alignItems: "center",
	},
  flip: {
    marginLeft: 20
  },
  
	buttonContainer: {
	  flex: 0.2,
	  backgroundColor: 'transparent',
	  alignItems: "center",
	  flexDirection: "row",
	  justifyContent: "space-between",
	  margin: 20,
	},
	pickButton: {
    marginRight: 10
	},
	text: {
	  fontSize: 18,
	  color: 'black',
	},
  });

export default CameraApp;