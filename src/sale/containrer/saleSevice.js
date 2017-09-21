import { connect } from 'react-redux'
import SaleSevice from '../components/saleSevice'
import { fetchProduct } from '../../../reduxModules/product'

const mapStateToProps = state => {
  return({
    product: state.product.productDb,
  })
}

export default connect(mapStateToProps, { fetchProduct })(SaleSevice)
