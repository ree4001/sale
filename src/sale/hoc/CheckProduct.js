import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


// Moc Product 
const product = {
  1001: 'Staff Loan - Installment',
  1002: 'Staff Loan - Revolving',
  1003: 'PLoan - Installment',
  1004: 'PLoan - Revolving',
  1005: 'NanoFinance - Installment',
  1006: 'NanoFinance - Revolving',
}

const CheckProduct = () =>  ({ rowData }) => {
  // console.log(product[rowData.productId])
  // console.log(rowData)
  return (
    <span> { product[rowData.productId] } </span>
  )
}

CheckProduct.PropTypes = {
  rowData: PropTypes.object,  
}
export default CheckProduct                        

