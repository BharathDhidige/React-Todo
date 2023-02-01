import MessageBox from "./components/MessageBox";
import DatePicker from "./components/DatePicker";
import {AiFillPlusSquare, AiFillDelete} from "react-icons/ai";

const App = ()=> {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-center gap-3">
        <MessageBox/>
        <DatePicker/>
        <AiFillPlusSquare size={40} className="text-primary"/>
      </div>
      <div className="d-flex flex-col justify-content-center">
        <ul className="list-group list-group w-75">
          <h5 className="mt-4">OverDue:</h5>
          <li className="list-group-item rounded-top d-flex align-items-center justify-content-between">
            <span className="text-secondary" style={{fontSize:"12px"}}>{new Date().toLocaleDateString()}</span>
            <span className="text-capitalize">first task</span>
            <AiFillDelete color="red" size={30} className="border rounded p-1"/>
          </li>
          <li className="list-group-item ">A list item</li>
          <li className="list-group-item ">A list item</li>
        </ul>
      </div>
    </div>
  )
}

export default App;