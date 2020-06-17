import React from 'react';

import './add-media.styles.scss';

const AddMedia = () => {
    return (
        <main className='add-media-section'>
            <div className='u-container'>
                <div className='gutter'>
                    <div className='video-wrapper'>
                        {/* video */}
                        <section className='c-expander card video-section'>
                            <h2 className='media-title'>
                                <span className='video-icon'></span>
                               <span className='title-text'> Add a video review </span>
                                </h2>
                            <div className='expander-list'>
                                <div className='record-video'>
                                    <button className='expander-list-item c-button'><span className='record-icon'></span> <span>Record a new video</span> </button>
                                </div>
                                <div className='upload-video'>
                                    <button className='expander-list-item c-button'><span className='record-icon'></span> <span>Upload an existing video</span> </button>
                                </div>
                            </div>
                        </section>
                        {/* photos */}
                        <div>
                        <section className='c-expander card'>
                            <h3 className='photos-title'>
                                <span className='camera-icon'></span>
                                <span>Add photos</span>
                            </h3>
                            <div className='expander-list'>
                            <div className='upload-photo'>
                                    <button className='expander-list-item c-button'><span className='record-icon'></span> <span>Upload an existing photo</span> </button>
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddMedia;