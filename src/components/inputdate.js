import Head from 'next/head'

const Imputdate = (props) => {
  return (
    <div className="is-groped">
      <Head>
        <link href="/static/datestyles.css" rel="stylesheet" />
      </Head>
        <label> วันที่: </label>
        <input id="dateStart" type="date" onChange={props.setStartDate} value={props.dateRange.start}/>
        <label> ถึงวันที่: </label>
        <input id="dateEnd" type="date" onChange={props.setEndDate} value={props.dateRange.end}/>
    </div>
  )
}

export default Imputdate