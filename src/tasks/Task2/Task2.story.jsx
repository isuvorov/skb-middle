import React from 'react'
import Task2 from './Task2';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Task2', module)
    .add('default', () => {
      return <Task2 />
    })
}
