import { connect } from 'react-redux'
import { AddPromise } from '../components/molecules/AddPromise'
import { addPromise, postPromiseRequest } from '../store/promises/actions'

const mapStateToProps = (state) => {
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onAddPromise: (sinceWhen, tilWhen, user2) => {
	    dispatch(addPromise(sinceWhen, tilWhen, user2))
	},
	onPostPromise: (sinceWhen, tilWhen, user2) => {
	    dispatch(postPromiseRequest(sinceWhen, tilWhen, user2))
	}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPromise)
