import Head from 'next/head'
import Link from 'next/link'
import StatusMenu from './statusMenu'
import {
  ALL,
  PENDING,
  REJECT,
  CANCEL,
  APPROVE,
  INCOMPLETE,
  TRANSFERRED,
} from '../../../text'
import {
  ALL_STATUS,
  TRANSFERRED as STATUS_TRANSFERRED,
  REJECTED as STATUS_REJECTED,
  PENDING as STATUS_PENDING,
  INCOMPLETE as STATUS_INCOMPLETE,
  CANCEL as STATUS_CANCEL,
} from '../../../status'

const StatusTab = (props) => {
  return (
    <div>
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ul className="statusmenu">
        <StatusMenu id={ALL_STATUS} title={ALL} status={props.status} />
        <StatusMenu id={STATUS_PENDING} title={PENDING} status={props.status} />
        <StatusMenu id={STATUS_TRANSFERRED} title={APPROVE} status={props.status} />
        <StatusMenu id={STATUS_REJECTED} title={REJECT} status={props.status} />
        <StatusMenu id={STATUS_CANCEL} title={CANCEL} status={props.status} />
        <StatusMenu id={STATUS_INCOMPLETE} title={INCOMPLETE} status={props.status} />
      </ul>
    </div>
  )
}

export default StatusTab