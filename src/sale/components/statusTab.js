import Head from 'next/head' 
import Link from 'next/link'
import StatusMenu from './statusMenu'
import {
  ALL,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
  TRANSFERRED,
} from '../../../text'
import {
  ALL_STATUS,
  FILLFORM as STATUS_FILLFORM,
  WAIT_VERIFY as STATUS_WAIT_VERIFY,
  WAIT_ANALYST as STATUS_WAIT_ANALYST,
  WAIT_APPROVE as STATUS_WAIT_APPROVE,
  WAIT_CONFIRM as STATUS_WAIT_CONFIRM,
  WAIT_TRANSFER as STATUS_WAIT_TRANSFER,
  TRANSFERRED as STATUS_TRANSFERRED,
} from '../../../status'

const StatusTab = () => {
  return(
    <div className="">
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ul className="statusmenu">
        <StatusMenu id={ ALL_STATUS } title={ ALL }/>
        <StatusMenu id={ STATUS_WAIT_VERIFY } title={WAIT_VERIFY}/>
        <StatusMenu id={ STATUS_WAIT_ANALYST } title={WAIT_APPROVE}/>
        <StatusMenu id={ STATUS_WAIT_APPROVE } title={WAIT_CONFIRM}/>
        <StatusMenu id={ STATUS_WAIT_TRANSFER } title={WAIT_TRANSFER}/>
        <StatusMenu id={ STATUS_TRANSFERRED } title={TRANSFERRED}/>
      </ul>
    </div>
  )
}

export default StatusTab