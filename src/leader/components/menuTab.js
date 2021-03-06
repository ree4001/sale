import Head from 'next/head'
import MenuLeader from './menuLeader'
import {
  APPLICATIONFORLEADER,
  SUMMARYDATA
} from '../../../text'
import {
  INDEXLEADER,
  APPLICATION_UNDER_SALE
}from '../../../status'

const MenuTab = (props) => {
  const tabmenu = props.tabmenu
  console.log(tabmenu)
  return (
    <div>
      <Head>
        <link href="/static/styles.css" rel="stylesheet" /> 
      </Head>
      <ul className="salmenu">
        <MenuLeader menutitle={SUMMARYDATA} id={INDEXLEADER} tabmenu={tabmenu}/>
        <MenuLeader menutitle={APPLICATIONFORLEADER} id={APPLICATION_UNDER_SALE} tabmenu={tabmenu}/>
      </ul>
    </div>
  )
}

export default MenuTab