import { connect } from 'react-redux'
import SaleSevice from '../components/saleSevice'
import { fetchProduct } from '../../../reduxModules/product'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    product: state.product.productDb,
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchProduct, fetchApp })(SaleSevice)
