import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App;