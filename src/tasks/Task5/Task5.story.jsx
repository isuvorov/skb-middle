import React from 'react';
import Task5 from './Task5';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Task5', module)
    .add('default', () => {
      return <Task5 />;
    });
};
