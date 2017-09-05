import TitleBar from './titleBar'
import TableStatus from './tableStatus'
import ProcessStep from './processStep'
import { checkStatus } from '../text'

const IndexStatus = () => (
  <div>
    <TitleBar id={checkStatus}/>
    <TableStatus/>
    <ProcessStep/>
  </div>
)

export default IndexStatus