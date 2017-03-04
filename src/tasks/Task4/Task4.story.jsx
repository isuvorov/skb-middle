import React from 'react'
import Task4 from './Task4';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Task4', module)
    .add('default', () => {
      return <Task4 />
    })
}
