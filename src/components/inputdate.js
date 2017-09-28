import Head from 'next/head'
import moment from 'moment'


// test function setformat date //


// const test = event => {
//   let a = event.target.value
//   a = moment(a).format('YYYY-MM-DDTHH:mm:ss')
//   const end = moment(a).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss')
//   const str2 = '.000Z'
//   const res = a.concat(str2);
//   // a = new Date(a)
//   console.log('even',end)
// }

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