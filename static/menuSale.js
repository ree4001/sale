import Head from 'next/head' 

const MenuSale = () => (
  <div id="left-section">
    <Head>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <ul className="salemenu">
      <li>ข้อมูลลูกค้า</li>
      <li>สรุปยอด</li>
    </ul>
  </div>
)

export default MenuSale