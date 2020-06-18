import React from 'react';
import { withRouter } from 'react-router-dom';

import VideocamIcon from '@material-ui/icons/Videocam';
import AlbumIcon from '@material-ui/icons/Album';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import './add-media.styles.scss';



const AddMedia = ({ history }) => {

 const openCamera = e => {
        alert('Function should open camera');
     
    }

  return (
    <div className="media">
      <main className="add-media-section">
        <div className="u-container">
          <div className="gutter">
            <div className="video-wrapper">
              {/* video */}
              <section className="c-expander card video-section">
                <h2 className="media-title">
                  <span className="video-icon icon">
                    <VideocamIcon />{' '}
                  </span>
                  <span className="title-text">Add a video review </span>
                </h2>
                <div className="expander-list">
                  <div className="record-video">
                    <button onClick={() => openCamera()} className="expander-list-item c-button">
                      <span className="record-icon icon">
                        <AlbumIcon />
                      </span>{' '}
                      <span>Record a new video</span>{' '}
                    </button>
                  </div>
                  <div className="upload-video">
                  {/* <input id='upload-existing-video' className='exapnder-list-item hidden' role='button' type='file' name='file' accept='video/*' />
                      <label>
                      <span className="upload-icon icon">
                        {' '}
                        <CloudUploadIcon />{' '}
                      </span>{' '}
                          Upload an existing video
                    </label> */}

                    <button type='button' name='video' className="expander-list-item c-button">
                      <span className="upload-icon icon">
                        {' '}
                        <CloudUploadIcon />{' '}
                      </span>{' '}
                      <span>Upload an existing video</span>{' '}
                    </button>
                  </div>
                </div>
              </section>
              {/* photos */}
              <div>
                <section className="c-expander card">
                  <h3 className="photos-title media-title">
                    <span className="camera-icon icon">
                      <CameraAltIcon />
                    </span>
                    <span className="title-text">Add photos</span>
                  </h3>
                  <div className="expander-list">
                    <div className="upload-photo">
                      <button className="expander-list-item c-button">
                        <span className="record-icon icon">
                          <CloudUploadIcon />
                        </span>{' '}
                        <span>Upload an existing photo</span>{' '}
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="add-media-footer">
        <button onClick={() => {
          history.push('/login');
        }} className="media-footer-btn">Skip</button>
      </footer>
    </div>
  );
};

export default withRouter(AddMedia);
