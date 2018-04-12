import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const Promise = ({ id, sinceWhen, tilWhen, user2 }) => (
	<Styledli

	>
	{id}
    </Styledli>
)

Promise.propTypes = {
  id: PropTypes.number.isRequired,
  sinceWhen: PropTypes.string.isRequired,
  tilWhen: PropTypes.string.isRequired,
  user2: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}



export default Promise
