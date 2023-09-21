import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class Home extends Component {
  // constuctor() {}
  render() {
    return (
      <div>
        <br />
        <Row noGutters className="text-center align-items-center ">
          <Col>
            <p className="looking-for-pizza">
              A pinch of Passion in every dish
              {/* <i className="fas fa-pizza-slice pizza-slice"></i> */}
            </p>
            <Button
              color="blue"
              className="book-table-btn"
              onClick={() => {
                window.location.href = "/Delici_rest_frontend/reservation";
              }}
            >
              Book a Table
            </Button>
          </Col>
        </Row>
        <br />
        {/* <Row noGutters className="text-center big-img-container">
          <Col>
            <img
              src={require("../images/cafe.jpg")}
              alt="cafe"
              className="big-img"
            />
          </Col>
        </Row> */}
        <div class="row row-cols-2 row-cols-md-3 g-4 px-4">
          <div class="col">
            <div class="card">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/0a/5a/69/santorini-greek-restaurant.jpg " class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://assets.cntraveller.in/photos/64524215f0771fd865ff74a5/1:1/w_4024,h_4024,c_limit/Oia-6.jpg " class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://b.zmtcdn.com/data/pictures/0/20669940/7eb5a705136111798f0071a5d7a4bdec.jpg" 
              class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://magazine.canaves.com/wp-content/uploads/2019/08/Infinity-Modern-Greek-Bistro-by-Sotiris-Gkriniotis-1.jpg " class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://etimg.etb2bimg.com/photo/100467415.cms " 
              class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://images.livemint.com/img/2023/06/29/1140x641/Oia_small_1688058792139_1688059022576.jpg " class="card-img-top" alt="..." width="70" height="300"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
