import React from 'react'
import Task1 from './Task1';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Task1', module)
    .add('default', () => {
      return <Task1 />
    })
}
