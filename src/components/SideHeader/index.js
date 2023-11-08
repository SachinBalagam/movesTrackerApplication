import './index.css'
import {CgProfile} from 'react-icons/cg'
import {FaCarSide, FaCalculator} from 'react-icons/fa'

import {RiLogoutCircleFill} from 'react-icons/ri'

const SideHeader = () => (
  <div>
    <div className="side-each-container">
      <FaCarSide className="nav-logo" />
      <p>MY MOVES</p>
    </div>
    <div className="side-each-container">
      <CgProfile className="nav-logo" />
      <p>MY PROFILE</p>
    </div>
    <div className="side-each-container">
      <FaCalculator className="nav-logo" />
      <p>GET QUOTE</p>
    </div>
    <div className="side-each-container">
      <RiLogoutCircleFill className="nav-logo" />
      <p>LOGOUT</p>
    </div>
  </div>
)

export default SideHeader
