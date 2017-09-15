import TitleBar from '../../components/titleBar'
import TableStatus from './tableStatus'
import ProcessStep from './processStep'
import { checkStatus } from '../../../text'
import { CHECKSTATUS } from '../../../status'

const IndexStatus = ({ status }) => (
  <div>
    <TitleBar title={checkStatus} status={CHECKSTATUS}/>
    <TableStatus/>
    <ProcessStep/>
  </div>
)

export default IndexStatus