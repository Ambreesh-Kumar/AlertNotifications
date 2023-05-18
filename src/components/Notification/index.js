// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  const {icon, heading, paragraph} = children
  return (
    <li className="list-container">
      <div className="icon-container">{icon}</div>
      <div className="description-container">
        <h1 className="heading">{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="cross-icon">
        <GrFormClose />
      </div>
    </li>
  )
}

export default Notification
