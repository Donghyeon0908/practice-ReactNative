import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';
import styled from 'styled-components/native';
import useTodoStore from '../libs/store/useTodoStore';

const InputForm = () => {
  const addTodo = useTodoStore(state => state.addTodo);
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const handleSumbit = () => {
    if (value) {
      addTodo(value);
      navigation.navigate('Todo');
      setValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container>
        <TextContainer
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleSumbit}
          placeholder="오늘 할일 작성"
        />
        <Pressable onPress={handleSumbit}>
          <ButtonContainer>등록</ButtonContainer>
        </Pressable>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.TextInput`
  width: 250px;
  height: 50px;
  font-size: 25px;
  border: 1px solid #0e0e0e;
  background-color: #beddf9;
`;

const ButtonContainer = styled.Text`
  margin-left: 20px;
  font-size: 25px;
  border: 1px solid #0e0e0e;
  border-radius: 15px;
  overflow: hidden;
  background-color: #74b3f6;
  padding: 10px;
`;
