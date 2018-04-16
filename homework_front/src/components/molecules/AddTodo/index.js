import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/Button'

const Wrapper = styled.div`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
`

export const AddTodo = ({ statefunction, onAddTodo, onPostTodo }) => {
    let input;
    let input2;
    let input3;
    console.log(onAddTodo);
    console.log('asdf')
    const onSubmit = () => {
	console.log('outer scope of if');
	if (input != undefined && input2 != undefined && input3 != undefined) {
	    console.log('inner scope of if');
	    onAddTodo(input.value, input2.value, input3.value);
	    input.value = '';
      input2.value = '';
      input3.value = '';
	}
    };

    const onPost = () => {
	if (input != undefined) {
	    onPostTodo(input.value);
	    input.value = '';
	}
    };

    return (
	    <div>
        <br/>
        <h4> Log In </h4>
        ID: <input ref={node => {input = node;}} />
        PASSWORD: <input ref={node => {input = node;}} />
        <br/>
        <Button>enter</Button>
        <br/> <br/>
        <h4> Promises </h4>
   	    sinceWhen: <input ref={node => {input = node;}} />
        <br/>
        tilWhen: <input ref={node => {input2 = node;}} />
        <br/>
        user2: <input ref={node => {input3 = node;}} />
        <br/>
        <br/>
  	    <Button type="submit" onClick={onSubmit}>ADD Promise</Button>
	    <Button type="submit" onClick={onPost}>POST Promise</Button>
	    </div>
    );
};

AddTodo.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node,
}

/*export default AddTodo*/
