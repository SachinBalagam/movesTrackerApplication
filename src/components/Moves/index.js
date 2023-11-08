import {Component} from 'react'
import Loader from 'react-loader-spinner'
import SideHeader from '../SideHeader/index'
import AllMoves from '../AllMoves/index'
import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Moves extends Component {
  state = {dataList: [], apiStatus: ApiStatusConstants.initial, isShow: false}

  componentDidMount() {
    this.getProductDetails()
  }

  onViewMoreClick = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  getProductDetails = async () => {
    this.setState({apiStatus: ApiStatusConstants.inProgress})
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const modifiedData = data.Customer_Estimate_Flow.map(each => [
      {
        movingFrom: each.moving_from,
        estimateId: each.estimate_id,
        movingTo: each.moving_to,
        propertySize: each.property_size,
        totalItems: each.total_items,
        distance: each.distance,
        movingOn: each.moving_on,
        oldFloorNo: each.old_floor_no,
        oldElevatorAvailability: each.old_elevator_availability,
        oldParkingDistance: each.old_parking_distance,
        newFloorNo: each.new_floor_no,
        newParkingDistance: each.new_parking_distance,
        newElevatorAvailability: each.new_elevator_availability,
        oldHouseAdditionalInfo: each.old_house_additional_info,
      },
    ])
    console.log(data)
    if (response.ok === true) {
      this.setState({
        dataList: modifiedData,
        apiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {dataList, isShow} = this.state
    console.log(dataList)
    return (
      <div className="success-contianer">
        <h1>My Moves</h1>
        <ul className="list-container">
          {dataList.map(each => (
            <AllMoves
              data={each}
              key={each.estimateId}
              onViewMoreClick={this.onViewMoreClick}
              isShow={isShow}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="loader-container" data-testid="loader">
      <h1>Page Not Found, Try Again...</h1>
    </div>
  )

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case ApiStatusConstants.success:
        return this.renderSuccessView()
      case ApiStatusConstants.inProgress:
        return this.renderLoadingView()
      case ApiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <SideHeader />
          {this.renderView()}
        </div>
      </div>
    )
  }
}

export default Moves
