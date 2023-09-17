import React from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import {
  about_details,
  home_icon,
  logo_details,
  profile_details,
  Tab_icon_01,
  Tab_icon_08,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
  Tab_icon_13,
} from "../imagepath";
import GalleryComponent from "./galleryComponents";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../forfreelancer/sidebar/profilesidebar";

const CompanyGallery = () => {
  return (
    <>
      {/* Profile Banner */}

      {/* Profile Banner */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* About Tab Content */}
                <div className="pro-post widget-box company-post">
                  <h3 className="pro-title">Gallery</h3>
                  <div className="pro-content company-gallery">
                    <SimpleReactLightbox>
                      <GalleryComponent />
                    </SimpleReactLightbox>
                  </div>
                </div>
                {/* /About Tab Content */}
              </div>
            </div>
            {/* profile Sidebar */}

            {/* /Profile Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default CompanyGallery;
