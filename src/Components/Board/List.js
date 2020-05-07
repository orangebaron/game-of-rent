import React from 'react';
import { connect } from 'react-redux';

const select = (state) => ({ players: state.players });

const ConnectedList = ({ players }) => (
  <ul>
    {players.map((el) => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(select)(ConnectedList);

export default List;
