import Head from 'next/head'
import Link from 'next/link'
import { CHECKSTATUS } from '../../status'

const TitleBar = ({title ,status}) => (
    <div className="topbar">
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Link href="/index">
        <img className="position" src = "/static/ITTP-201707.jpg"/> 
      </Link>
        <div className="inline"> {title} </div>
      <Link href="/saleindex">
        <div className={status !== CHECKSTATUS? 'login-hide':'login'}>
          <button> SALE LOGIN </button>          
        </div>
      </Link>  
    </div>
)

export default TitleBar 