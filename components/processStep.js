import Head from 'next/head'
import {
  getApplication,
  checkApplication,
  pendingApplication,
  approvedApplication,
} from '../text'

const ProcessStep = () => (
  <div className="container_progressbar">
    <Head>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <div>
      <p> Status </p>
    </div>
    <ul className="progressbar">
      <li className="active"> {getApplication} </li>
      <li className="active"> {checkApplication} </li> 
      <li className="wait"> {pendingApplication} </li>
      <li className="wait"> {approvedApplication} </li>
    </ul>
  </div>
)

export default ProcessStep