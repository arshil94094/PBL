import React from "react";
import {Link} from "react-router-dom";
import HDFC from'./800px-HDFC_Bank_Logo.svg.png';
import ICICI from './800px-ICICI_Bank_Logo.svg.png';
import SBI from './State_Bank_of_India.svg.png';
import AXIS from './AXISBank_Logo.svg.png';
import BOI from './Bank_of_India_logo.svg';
import BOB from './BankOfBarodaLogo.svg';
export default function BankLogos() {
  return (
    <div className="container  ">
      <div className="row my-20 align-items-center">
          <div
            className="card h-50 col  p-0 px-0 my-2 mx-3"
            style={{ width: " 18rem", objectFit: "cover",cursor: "pointer" }}
          >
        <Link to="/loan-list">
            <img
              src={HDFC}
              style={{ height: "200px", width: " auto" }}
              className="card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body ">
              <div className="card-text ">
                <h3>HDFC BANK &#8594;</h3>
              </div>
            </div>
        </Link>
          </div>
          <div className="card h-50 p-0 col mx-3" style={{ width: "18rem" ,cursor: "pointer"}}>
        <Link to='/loam-list'>
            <img
              src={BOI}
              className="card-img-top img-fluid  "
              style={{ height: " 200px" }}
              alt="..."
            />
            <div className="card-body">
              <div className="card-text align-items-center">
                <h3>BANK OF INDIA  &#8594; </h3>
              </div>
            </div>
        </Link>
          </div>
      </div>

      <div className="row my-20 py-1">
            <div className="card h-50 col mx-3" style={{ width: "18rem",cursor: "pointer" }}>
        <Link to="/loan-list">
            <img
              src={AXIS}
              className="card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body">
              <div className="card-text">
                <h3>AXIS BANK &#8594;</h3>
              </div>
            </div>
        </Link>
            </div>
          <div
            className="card h-50 col mx-3"
            style={{ width: "18rem", height: "238px",cursor: "pointer" }}
          >
        <Link to ="/loan-list">
            <img
              src={ICICI}
              className="card-img-top img-fluid "
              style={{ height: "147px " }}
              alt="..."
            />
            <div className="card-body py-2">
              <div className="card-text">
                <h3>ICICI BANK &#8594;</h3>
              </div>
            </div>
        </Link>
          </div>
      </div>

      <div className="row my-20 py-1">
          <div className="card h-50 col mx-3 " style={{ width: "18rem",cursor: "pointer"}}>
       <Link to="/loan-list">
            <img
              src={BOB}
              className="card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body">
              <div className="card-text">
                <h3>BANK OF BARODA &#8594; </h3>
              </div>
            </div>
        </Link>
          </div>
          <div className="card h-50 col mx-3" style={{ width: "18rem",cursor: "pointer" }}>
          <Link to="/loan-list">
            <img
              src={SBI}
              className="card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body">
              <div className="card-text">
                <h3>STATE BANK OF INDIA &#8594;</h3>
              </div>
            </div>
          </Link>
          </div>
      </div>
    </div>
  );
}
