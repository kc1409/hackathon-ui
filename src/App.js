import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';

const App = () => {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  )
}

export default App;