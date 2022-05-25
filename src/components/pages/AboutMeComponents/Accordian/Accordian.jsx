import { AccData1 } from "./AccData"

function Accordian() {
  return (
    <div className="accordian-container">
      {AccData1.map((item, index) => {
        return (
          <div className="acc-item">
            <div className="acc-title">
              <div className="acc-icon">
                {item.icon}
              </div>
              <h3 className="acc-title-header">{item.language}</h3>

            </div>
            <div className="acc-content">

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordian