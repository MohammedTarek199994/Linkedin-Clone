import React, { useState } from "react";
import PropTypes from "prop-types";
function VideoPlayer({ videoUrl }) {
  // Check if the videoUrl starts with "https://youtu.be/"
  const isYouTubeVideo = videoUrl.startsWith("https://youtu.be/");

  if (isYouTubeVideo) {
    // If it's a YouTube video, render the iframe
    const videoId = videoUrl.split("https://youtu.be/")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <iframe
        width="100%"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowfullscreen
        title="YouTube Video"
        style={{ marginTop: "20px" }}></iframe>
    );
  } else {
    // If it's not a YouTube video, render the video tag
    return (
      <video width="100%" height="315" style={{ marginTop: "20px" }} controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
}
VideoPlayer.propTypes = {
  videoUrl: PropTypes.object.isRequired,
};
export default VideoPlayer;
