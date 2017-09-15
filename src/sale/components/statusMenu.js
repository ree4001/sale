import Link from 'next/link'
// sale = saleService
const StatusMenu = (props) => (
  <li>
    
    <Link as={`/sale/filter/${props.id}`} href={`/sale?title=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
export default StatusMenu