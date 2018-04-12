import React from 'react'
import { storiesOf } from '@kadira/storybook'
import User from '.'

storiesOf('User', module)
  .add('default', () => (
    <User>Hello</User>
  ))
  .add('reverse', () => (
    <User reverse>Hello</User>
  ))
