import React from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import TodoItem from '../components/TodoItem';
import styled from 'styled-components/native';
import useTodoStore from '../libs/store/useTodoStore';

const TodoScreen = () => {
  const todos = useTodoStore(state => state.todos);
  const todoList = todos.filter(item => item.state === 'todo');
  const doneList = todos.filter(item => item.state === 'done');

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ListContainer>
        <Text style={{fontSize: 20}}>할 일</Text>
        {!!todoList.length && (
          <FlatList
            data={todoList}
            renderItem={({item}) => <TodoItem {...item} />}
            keyExtractor={item => item.id + item.state}
          />
        )}
      </ListContainer>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 25,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,0.2)',
        }}
      />
      <DoneContainer>
        <Text style={{fontSize: 20}}>완료</Text>
        {!!doneList.length && (
          <FlatList
            data={doneList}
            renderItem={({item}) => <TodoItem {...item} />}
            keyExtractor={item => item.id + item.state}
          />
        )}
      </DoneContainer>
    </SafeAreaView>
  );
};

export default TodoScreen;

const ListContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 200px;
`;

const DoneContainer = styled.View`
  margin-top: 30px;
`;
