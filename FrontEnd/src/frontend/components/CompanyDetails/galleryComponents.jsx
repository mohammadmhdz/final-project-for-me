import {
  gallery_007,
  gallery_03,
  gallery_04,
  gallery_05,
  gallery_06,
  gallery_07,
  gallery_08,
  gallery_09,
  gallery_10,
  gallery_11,
  gallery_12,
  loader_icon,
} from "../imagepath";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

const GalleryComponent = (props) => {
  const { companygal } = props;

  useEffect(() => {
    const { companygal } = props;
  }, [companygal]);

  return (
    <div>
      <SRLWrapper>
        <div className="row">
          {companygal?.images?.map((item) => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item.id}>
              <div className="project-widget">
                <div className="pro-image">
                  <a href="#" data-fancybox="gallery2">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={`http://127.0.0.1:8000/${item.image}`}
                    />
                    <div className="view-gallery">
                      <i className="far fa-eye" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default GalleryComponent;
