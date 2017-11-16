import Link from 'next/link'

const LeaderSale = (props) => {
  return(
    <li>  
      <Link href={`/${props.id}`}>
        <p>{props.menutitle}</p>
      </Link>
    </li>
  )
}

export default LeaderSale