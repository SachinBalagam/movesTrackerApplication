import {
  FaArrowCircleLeft,
  FaHome,
  FaSitemap,
  FaRoute,
  FaRegCalendarAlt,
  FaRegArrowAltCircleDown,
} from 'react-icons/fa'

import './index.css'

const AllMoves = props => {
  const {data, onViewMoreClick, isShow} = props
  const {
    movingFrom,
    movingTo,
    estimateId,
    propertySize,
    totalItems,
    distance,
    movingOn,
    oldFloorNo,
    oldElevatorAvailability,
    oldParkingDistance,
    newFloorNo,
    newParkingDistance,
    newElevatorAvailability,
    oldHouseAdditionalInfo,
  } = data[0]

  const onClickViewMore = () => {
    onViewMoreClick(estimateId)
  }

  return (
    <li>
      <div>
        <div className="each-list">
          <div>
            <p className="bold">From</p>
            <p className="moving">{movingFrom}</p>
          </div>
          <div>
            <FaArrowCircleLeft className="each-icon" />
          </div>
          <div>
            <p className="bold">To</p>
            <p className="moving">{movingTo}</p>
          </div>
          <div>
            <p className="bold">#Request</p>
            <p className="request-id">{estimateId}</p>
          </div>
        </div>
        <div className="each-list">
          <div className="each-list">
            <FaHome className="each-icon" />
            <p>{propertySize}</p>
          </div>
          <div className="each-list">
            <FaSitemap className="each-icon" />
            <p>{totalItems}</p>
          </div>
          <div className="each-list">
            <FaRoute className="each-icon" />
            <p>{distance}</p>
          </div>
          <div className="each-list">
            <FaRegCalendarAlt className="each-icon" />
            <p>{movingOn}</p>
          </div>
          <button
            className="view-more-button"
            onClick={onClickViewMore}
            type="button"
          >
            View More Details
          </button>
          <button className="quotes-button" type="button">
            Quotes
          </button>
        </div>
        <div>
          <p>
            <span className="bold">Disclamier:</span> Please update your move
            date before two days of shifting
          </p>
        </div>
        {isShow && (
          <div>
            <div className="card">
              <p className="bold">Additional Information</p>
              <button className="custom-button" type="button">
                Edit Additional Info
              </button>
            </div>
            <p>{oldHouseAdditionalInfo}</p>
            <div className="card">
              <p className="bold">House Details</p>
              <button className="custom-button" type="button">
                Edit House Details
              </button>
            </div>
            <p className="color">Existing House Details</p>
            <div className="each-list">
              <div>
                <p className="bold">Floor No</p>
                <p>{oldFloorNo}</p>
              </div>
              <div>
                <p className="bold">Elevator Available</p>
                <p>{oldElevatorAvailability}</p>
              </div>
              <div>
                <p className="bold">
                  Distance from Elevator/StairCase to truck
                </p>
                <p>{oldParkingDistance}</p>
              </div>
            </div>
            <p className="color">New House Details</p>
            <div className="each-list">
              <div>
                <p className="bold">Floor No</p>
                <p>{newFloorNo}</p>
              </div>
              <div>
                <p className="bold">Elevator Available</p>
                <p>{newElevatorAvailability}</p>
              </div>
              <div>
                <p className="bold">
                  Distance from Elevator/StairCase to truck
                </p>
                <p>{newParkingDistance}</p>
              </div>
            </div>
            <div className="each-list">
              <p className="bold">Inventory Details</p>
              <button className="custom-button" type="button">
                Edit Inventory
              </button>
            </div>
            <div className="Customcard">
              <p>Furniture</p>
              <button className="icon-button" type="button">
                <FaRegArrowAltCircleDown className="each-icon" />
              </button>
            </div>
            <div className="Customcard">
              <p>Electronics</p>
              <button className="icon-button" type="button">
                <FaRegArrowAltCircleDown className="each-icon" />
              </button>
            </div>
            <div className="Customcard">
              <p>Vechile</p>
              <button className="icon-button" type="button">
                <FaRegArrowAltCircleDown className="each-icon" />
              </button>
            </div>
            <div className="Customcard">
              <p>Boxes/Trolley</p>
              <button className="icon-button" type="button">
                <FaRegArrowAltCircleDown className="each-icon" />
              </button>
            </div>
            <div className="Customcard">
              <p>Custom Items</p>
              <button className="icon-button" type="button">
                <FaRegArrowAltCircleDown className="each-icon" />
              </button>
            </div>
          </div>
        )}
      </div>

      <hr className="line" />
    </li>
  )
}

export default AllMoves
