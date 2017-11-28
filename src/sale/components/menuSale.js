import Link from 'next/link'

const MenuSale = (props) => {
  return(
    <li className={props.tabmenu === props.id? 'active':''}>  
      <Link href={`/${props.id}`}>
        <p>{props.menutitle}</p>
      </Link>
    </li>
  )
}

export default MenuSale