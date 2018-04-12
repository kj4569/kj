import { connect } from 'react-redux'
import { Promises } from '../components/molecules/Promises'

const mapStateToProps = (state) => {
  return {
    promisesstate: state.promises
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Promises)
