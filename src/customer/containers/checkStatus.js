import { connect } from 'react-redux'
import CheckStatus from '../components/checkStatus'
import { fetchCustomerApp } from '../../../reduxModules/customerApp'
import { fetchProduct } from '../../../reduxModules/product'
import checkIsArray from '../utils/CheckIsArray'

const mapStateToProps = state => {
  return({
    customer: checkIsArray(state.customer.customerApp)
  })
}

export default connect(mapStateToProps, { fetchCustomerApp, fetchProduct })(CheckStatus)
