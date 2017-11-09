import Link from 'next/link'

const MenuSale = (props) => {
  return(
    <li>  
      <Link href={`/${props.id}`}>
        <p>{props.menutitle}</p>
      </Link>
    </li>
  )
}

export default MenuSale