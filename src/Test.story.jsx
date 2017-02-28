import React from 'react'
module.exports = ({ storiesOf, action }) => {
  return storiesOf('General/Test', module)
    .add('default', () => {
      return <div onClick={action('click')}>
        The test
      </div>
    })
}
