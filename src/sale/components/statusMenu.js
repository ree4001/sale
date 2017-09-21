import Link from 'next/link'
// sale = saleService
const StatusMenu = (props) => {
  return(
    <li className={props.status === props.id? 'is-active':''}>  
      <Link as={`/sale/filter/${props.id}`} href={`/sale?title=${props.id}`}>
        <p>{props.title}</p>
      </Link>
    </li>
  )
}
export default StatusMenu