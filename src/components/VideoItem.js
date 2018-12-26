import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
  render () {
    const {title, thumbnails} = this.props.video.snippet;
    return (
      <div onClick={() => this.props.onVideoSelect(this.props.video)} className='video-item item'>
        <img
          alt={title}
          className="ui image"
          src={thumbnails.medium.url} />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
