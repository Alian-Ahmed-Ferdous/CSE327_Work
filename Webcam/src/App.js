import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

function App() {
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const { hasPhoto, setHasPhoto } = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 600, height: 600 }
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePicture = () => {
    const width = 600;
    const height = 600;

    let video = videoRef.current;

    let photo = photoRef.current;

    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);
  };

  const clearImage = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div>
      <div>
        <video ref={videoRef}></video>
        <button onClick={takePicture}>Snap!</button>
      </div>
      <div className={'image ' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={clearImage}>Remove!</button>
      </div>
    </div>
  );
}

export default App;
