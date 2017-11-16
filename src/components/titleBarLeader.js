import Head from 'next/head'
import Link from 'next/link'
import MenuTab from '../leader/components/menuTab'
import { CHECKSTATUS } from '../../status'

const TitleBarLeader = ({title ,status}) => (
    <div className = "topbar">
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Link href="/index">
        <img className="position" src = "/static/ITTP-201707.png"/> 
      </Link> 
      <MenuTab />
    </div>
)

export default TitleBarLeader 