import { HashRouter, Link, Route } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import AddService from "./AddService/AddService";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageService from "./ManageService/ManageService";
import OrderList from "./OrderList/OrderList";
import './admin.css'


const Admin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="row w-100">
        <HashRouter>
          <div className="col-md-2 mt-4">
            <Link class="nav-link  text-dark  h6 admit_side " to="/orderList">
              Order List
            </Link>
            <Link class="nav-link  text-dark  h6 admit_side" to="/addService">
              Add Service
            </Link>
            <Link class="nav-link  text-dark  h6 admit_side" to="/makeAdmin">
              Make Admin
            </Link>
            <Link class="nav-link  text-dark  h6 admit_side" to="/manageService">
              Manage Service
            </Link>
          </div>
          <div className="col-md-10 content">
            <Route path="/addService" component={AddService} />
            <Route path="/orderList" component={OrderList} />
            <Route path="/makeAdmin" component={MakeAdmin} />
            <Route path="/manageService" component={ManageService} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

export default Admin;
