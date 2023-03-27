import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import InputForm from '../components/InputForm';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <TextContainer>할일 작성</TextContainer>
      <View style={{top: 150}}>
        <InputForm />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const TextContainer = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 10px;
`;
