import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import Promise from '../../../components/atoms/Promise'

const Styledul = styled.ul`
  font-family: ${font('primary')};
`

export const Promises = ({ promisesstate = [], onPromiseClick }) => {
    return (
	    <Styledul>
	    {promisesstate.map(promise =>
			       <Promise key={promise.id}
			       {...promise}
			       onClick={() => onPromiseClick(promise.id)}
			       />
			      )}
	    </Styledul>
  );
};

Promises.propTypes = {
    promisesstate: PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.number,
	sinceWhen: PropTypes.string,
  tilWhen: PropTypes.string,
  user2: PropTypes.string,
    })),
    reverse: PropTypes.bool,
}

export default Promises
