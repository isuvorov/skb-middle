import React from 'react'
import Task3 from './Task3';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Task3', module)
    .addHtml(<link rel="stylesheet" type="text/css" href="http://yastatic.net/bootstrap/3.3.6/css/bootstrap.min.css" />)
    .add('default', () => {
      return <Task3 />
    })
}
