import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Promises } from 'components'

storiesOf('Promises', module)
  .add('default', () => (
    <Promises>Hello</Promises>
  ))
  .add('reverse', () => (
    <Promises reverse>Hello</Promises>
  ))
