import React, { Component } from 'react'
import SimplePieChart from './piecharts'
import TitleBar from '../../components/titleBar'
import MenuSale from './menuSale'
import { SALELOGIN } from '../../../status'
import {
  salesevice,
} from '../../../text'

class SummaryService extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <TitleBar title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="left-panel">
            <div className="nevbar">
              <MenuSale />
            </div>
          </div>
          <div className="right-section">
            <div className="right-header">
            </div>
            <div className="right-content">
              <SimplePieChart />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryService