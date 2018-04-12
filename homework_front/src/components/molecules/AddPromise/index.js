import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const AddPromise = ({ statefunction, onAddPromise, onPostPromise }) => {
    let input;
    console.log(onAddPromise);
    console.log('asdf')
    const onSubmit = () => {
	console.log('outer scope of if');
	if (input != undefined) {
	    console.log('inner scope of if');
	    onAddPromise(input.value);
	    input.value = '';
	}
    };

    const onPost = () => {
	if (input != undefined) {
	    onPostPromise(input.value);
	    input.value = '';
	}
    };

    return (
	    <div>
   	    <input ref={node => {input = node;}} />
  	    <Button type="submit" onClick={onSubmit}>ADD Todo</Button>
	    <Button type="submit" onClick={onPost}>POST Todo</Button>
	    </div>
    );
};

AddPromise.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node,
}

export default AddPromise
