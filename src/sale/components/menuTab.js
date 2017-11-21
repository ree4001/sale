import Head from 'next/head'
import Menusale from './menuSale'
import {
  DATACUSTOMER,
  SUMMARYDATA
} from '../../../text'
import {
  INDEXSALE,
  SUMMARYSALE
} from '../../../status'

const MenuTab = (props) => {
  return (
    <div>
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ul className="salmenu">
        <Menusale menutitle={SUMMARYDATA} id={SUMMARYSALE} />
        <Menusale menutitle={DATACUSTOMER} id={INDEXSALE} />
      </ul>
    </div>
  )
}

export default MenuTab