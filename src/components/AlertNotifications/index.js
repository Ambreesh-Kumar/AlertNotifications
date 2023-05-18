// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <ul>
      <Notification>
        icon=
        <AiFillCheckCircle className="success-icon" />, heading="Success",
        paragraph="You can access all the files in the folder"
      </Notification>
      <Notification>
        icon=
        <RiErrorWarningFill className="error-icon" />, heading="Error",
        paragraph="Sorry, you are not authorized to have access to delete the
        file"
      </Notification>
      <Notification>
        icon=
        <MdWarning className="warning-icon" />, heading="Warning",
        paragraph="Viewers of this file can see comments and suggestions"
      </Notification>
      <Notification>
        icon=
        <MdInfo className="info-icon" />, heading="Info", paragraph="Anyone on
        the internet can view these files"
      </Notification>
    </ul>
  </div>
)
export default AlertNotifications
