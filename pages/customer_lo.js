import Head from 'next/head'

const Layout = () => (
  <div className="wrapper">
    <Head>
      <link href="/static/customerstyles.css" rel="stylesheet" />
    </Head>
    <div className="header">     </div>
    <div className="content"> 
      <div className="left-panel">
        <div className="nevbar">
        </div>
      </div>
      <div className="right-section">
        <div className="right-header"> </div>
        <div className="right-content"> </div>
      </div>
    </div>  
  </div>
)

export default Layout