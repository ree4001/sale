import Head from 'next/head'
import Link from 'next/link'

const MenuSale = () => (
  <div id="left-section">
    <Head>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <ul className="salemenu">
      <Link href="/sale">
        <li>ข้อมูลลูกค้า</li>
      </Link>
      <Link href={'/summary'}>
        <li>สรุปยอด</li>
      </Link>
    </ul>
  </div>
)

export default MenuSale