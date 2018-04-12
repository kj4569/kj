import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const User = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

User.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

User.defaultProps = {
  palette: 'grayscale',
}

export default User
