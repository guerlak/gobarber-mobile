import React from 'react';
import {Avatar, Name} from './styles';

export default function Provider(data) {
  const {name, email} = data;
  console.tron.log(name);

  return (
    <Provider>
      <Avatar
        source={{
          uri: data.avatar,
        }}
      />
      <Name>{name}</Name>
      <Name>{email}</Name>
    </Provider>
  );
}
