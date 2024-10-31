import {Link} from "react-router-dom";
import BtnLink from '../../../public/icon/moreDetails.svg'

interface Props {
  link: string,
  text:string
}

export default function ButtonLInk(props: Props) {
  return (
    <div>
      <Link className='flex items-center gap-[8px] text-blue' to={props.link}>{props.text} <img src={BtnLink}
                                                                                             alt='btn-link'/></Link>
    </div>
  )
}
