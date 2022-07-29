import React from "react";
import "./SideBar.scss";
import { fallDown as Menu } from "react-burger-menu";
import person from "../assessts/carreview/card.png";
import { HiSpeakerphone } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { GrBundle } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { IoMdListBox } from "react-icons/io";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaWrench } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: { display: "none" },
      arrow: true,
    };
  }

  toggleFunc = () => {
    
    if (this.state.toggle.display === "none") {
      this.setState({
        toggle: { display: "block" },
        arrow: false,
      });
    } else {
      this.setState({
        toggle: { display: "none" },
        arrow: true,
      });
    }
  };

  render() {
    return (
      <Menu>
        <div className="mainContainer">
          <div className="container d-flex alignitems-center">
            <div className="imgDiv">
              <img src={person} />
            </div>
            <div className="profileText  d-flex flex-column justify-content-center ml-3">
              <h5>Abu Huraira</h5>
              <h6>View Profile</h6>
            </div>
          </div>
          <div className="dashBoard">
            <p className="dashboardText mt-4 ml-3">My Dashboard</p>
            <div className="options ">
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <HiSpeakerphone />
                  </h3>
                </div>
                <div className="adsText">
                  <p>My Ads</p>
                  <h6>View Your Posted Ads</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <GrBundle />
                  </h3>
                </div>
                <div className="adsText">
                  <p>My Packages</p>
                  <h6>View Your Posted Ads</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <AiOutlineHeart />
                  </h3>
                </div>
                <div className="adsText ml-4">
                  <p>My Saved Ads</p>
                  <h6>View Your favourite o Liked Ads</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <AiFillCar />
                  </h3>
                </div>
                <div className="adsText ml-4">
                  <p>Vehicles You Own</p>
                  <h6>Manage Your Bikes & Cars</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <GoAlert />
                  </h3>
                </div>
                <div className="adsText">
                  <p>My Alerts</p>
                  <h6>Create Alert on Cars</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <GrMail />
                  </h3>
                </div>
                <div className="adsText ml-3">
                  <p>My Messages</p>
                  <h6>Check Inbox For queries</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <IoMdListBox />
                  </h3>
                </div>
                <div className="adsText ml-3">
                  <p>My Orders</p>
                  <h6>Check recent & old order</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="ADS py-3 border-top">
                <div className="ml-4">
                  <h3>
                    <MdOutlinePayments />
                  </h3>
                </div>
                <div className="adsText ml-4">
                  <p>Payments</p>
                  <h6>Check your Recent Payments</h6>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="dashboardText mt-2 ml-3 mb-3">Products</div>
            <div className="pro py-3 border-top border-bottom">
              <div className="ml-4">
                <h3>
                  <AiFillCar />
                </h3>
              </div>
              <div className="proText">
                <p>Used Cars</p>
                <h6>Find Used Cars For Sale</h6>
              </div>
              <div
                onClick={() => {
                  this.toggleFunc();
                }}
              >
                <h3>
                  {this.state.arrow ? (
                    <MdKeyboardArrowRight />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </h3>
              </div>
            </div>
            <div className="toggleDiv" style={this.state.toggle}>
              <div className="insidePro ">
                <div className="mt-3">
                  <p> Used Cars</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="insidePro ">
                <div className="mt-3">
                  <p> Featured Cars</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="insidePro ">
                <div className="mt-3">
                  <p>Auction Sheet Verification</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="insidePro ">
                <div className="mt-3">
                  <p>Price Calculator</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="insidePro ">
                <div className="mt-3">
                  <p>Sell Your Car</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
              <div className="insidePro border-0">
                <div className="mt-3">
                  <p>Used Car Dealers</p>
                </div>
                <div>
                  <h3>
                    <MdKeyboardArrowRight />
                  </h3>
                </div>
              </div>
            </div>
            <div className="pro py-3 border-top">
              <div className="ml-4">
                <h3>
                  <AiFillCar />
                </h3>
              </div>
              <div className="proText">
                <p>New Cars</p>
                <h6>New Car Prices,Reviews</h6>
              </div>
              <div>
                <h3>
                  <MdKeyboardArrowRight />
                </h3>
              </div>
            </div>
            <div className="pro py-3 border-top">
              <div className="ml-4">
                <h3>
                  <RiMotorbikeFill />
                </h3>
              </div>
              <div className="proText ml-4">
                <p>Bikes</p>
                <h6>New&Used Bikes,Bike Prices</h6>
              </div>
              <div>
                <h3>
                  <MdKeyboardArrowRight />
                </h3>
              </div>
            </div>
            <div className="pro py-3 border-top">
              <div className="ml-4">
                <h3>
                  <FaWrench />
                </h3>
              </div>
              <div className="proText ml-4">
                <p>Parts & Accessories</p>
                <h6>Find New & Used Auto Parts</h6>
              </div>
              <div>
                <h3>
                  <MdKeyboardArrowRight />
                </h3>
              </div>
            </div>
          </div>
          <div className="others">
            <div className="dashboardText mt-2 ml-3 mb-3">Others</div>
            <div>
              <p>Automotive News And update</p>
              <p>Custom Duty Calculator</p>
              <p>Car Finance</p>
              <p>Car Tracker</p>
              <p>Car Insurance</p>
              <p>Car Import</p>
              <p>Car Comparison</p>
              <p>Showrooms</p>
              <p>Auction Sheet Verification</p>
              <p>Car Reviews</p>
            </div>
          </div>
          <div className="setting d-flex alignItems-center">
            <div>
               <h4><FiSettings/></h4>
            </div>
            <div className=" ml-1 ">
                <p>Settings</p>
            </div>
          </div>
          <div className="logout d-flex alignItems-center">
              <div>
                  <h4><AiOutlinePoweroff/></h4>
              </div>
              <div className=" ml-1">
                  <p>LogOut</p>
              </div>
          </div>
          <div>
          </div>
        </div>
      </Menu>
    );
  }
}

export default SideBar;
