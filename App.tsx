/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FormPage from './src/modules/Form/FormPage';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1}}>
        <FormPage />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
