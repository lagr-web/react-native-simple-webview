//import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview'

const App = () => {
  return (
   <>  
    <StatusBar  
    hidden = {true}    
  />  

  <WebView 
   source={{ uri: 'https://lagr-ninja.pages.dev/' }}
   />
</>
  
  );
}

export default App;

