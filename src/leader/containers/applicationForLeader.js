import { connect } from 'react-redux'
import ApplicationForLeader from '../components/applicationForLeader'
import { fetchProduct } from '../../../reduxModules/product'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    product: state.product.productDb,
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchProduct, fetchApp })(ApplicationForLeader)
