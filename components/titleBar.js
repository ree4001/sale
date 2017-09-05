import Head from 'next/head'


const TitleBar = ({id}) => (
    <div className="topbar">
    <Head>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
        <img className="position" src = "/static/ITTP-201707.jpg"/> 
        <div className="inline"> {id} </div>
    </div>
)

export default TitleBar 