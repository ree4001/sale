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
  const tabmenu = props.tabmenu
  return (
    <div>
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ul className="salmenu">
        <Menusale menutitle={SUMMARYDATA} id={SUMMARYSALE} tabmenu={tabmenu}/>
        <Menusale menutitle={DATACUSTOMER} id={INDEXSALE} tabmenu={tabmenu}/>
      </ul>
    </div>
  )
}

export default MenuTab