import { connect } from 'react-redux'
import CheckStatus from '../components/checkStatus'
import { fetchCustomerApp } from '../../../reduxModules/customerApp'
import { fetchProduct } from '../../../reduxModules/product'

const mapStateToProps = state => {
  return({
    customer: state.customer.customerApp
  })
}

export default connect(mapStateToProps, { fetchCustomerApp, fetchProduct })(CheckStatus)
