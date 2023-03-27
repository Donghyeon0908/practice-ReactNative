import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styled from 'styled-components/native';
import useTodoStore from '../libs/store/useTodoStore';
import CheckIcon from 'react-native-vector-icons/Fontisto';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  id: number;
  text: string;
  state: string;
}

const TodoItem = ({id, text, state}: Props) => {
  const updateTodo = useTodoStore(state => state.updateTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleUpdate = () => {
    updateTodo(id);
  };

  return (
    <Container>
      <Pressable hitSlop={10} onPress={handleUpdate}>
        <CheckIcon
          name={state === 'todo' ? 'checkbox-passive' : 'checkbox-active'}
          size={20}
        />
      </Pressable>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, marginHorizontal: 30}}>{text}</Text>
        <Pressable hitSlop={10} onPress={handleDelete}>
          <DeleteIcon name="delete" size={20} />
        </Pressable>
      </View>
    </Container>
  );
};

export default TodoItem;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;
