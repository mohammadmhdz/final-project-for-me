import { Project_010, Project_011, Project_8, Project_9 } from "../imagepath";
import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";


const MyComponent = (props) => {

  return (

    <div>
      <SRLWrapper >
        
        <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="project-widget">
            <div className="pro-image">
              <div className="image-hover">
              <Link  to={Project_8} data-fancybox="gallery2">
                <img className="img-fluid " alt="User Image" src={Project_8} />
              </Link>
              </div>
              
            </div>
            <div className="project-footer">
              <div className="d-flex align-items-center">
                <div className="pro-detail">
                  <h3 className="pro-name">
                    Education
                  </h3>
                  <p className="pro-designation">Web design</p>
                </div>
                <div className="view-image">
                  <Link to="project"><i className="fas fa-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="project-widget">
            <div className="pro-image">		
              <Link  to={Project_9} data-fancybox="gallery2">
                <img className="img-fluid" alt="User Image" src={Project_9} />
              </Link>
            </div>
            <div className="project-footer">
              <div className="d-flex align-items-center">
                <div className="pro-detail">
                  <h3 className="pro-name">
                    Photoshoot 
                  </h3>
                  <p className="pro-designation">Web design</p>
                </div>
                <div className="view-image">
                  <Link to="project"><i className="fas fa-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="project-widget ">
            <div className="pro-image">		
              <Link  to={Project_010} data-fancybox="gallery2">
                <img className="img-fluid" alt="User Image" src={Project_010} />
              </Link>
            </div>
            <div className="project-footer">
              <div className="d-flex align-items-center">
                <div className="pro-detail">
                  <h3 className="pro-name">
                    Electrical 
                  </h3>
                  <p className="pro-designation">Web design</p>
                </div>
                <div className="view-image">
                  <Link to="project"><i className="fas fa-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="project-widget">
            <div className="pro-image">		
              <Link  to={Project_011} data-fancybox="gallery2">
                <img className="img-fluid" alt="User Image" src={Project_011} />
              </Link>
            </div>
            <div className="project-footer">
              <div className="d-flex align-items-center">
                <div className="pro-detail">
                  <h3 className="pro-name">
                    Project name 
                  </h3>
                  <p className="pro-designation">Web design</p>
                </div>
                <div className="view-image">
                  <Link to="project"><i className="fas fa-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Link to="project" className="btn more-btn">View more </Link>
        </div>
      </div>


      </SRLWrapper>
    </div>

  );
}


export default MyComponent;