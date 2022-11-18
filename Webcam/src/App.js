import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

function App() {
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

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
    console.log("working");
    const width = 300;
    const height = 300;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext("2d");

    console.log("working still");
    ctx.drawImage(video, 0, 0, width, height);
    var d = photo.toDataURL("image/png");
    const w = window.open("about:blank", "image from canvas");
    w.document.write("<img src='" + d + "' alt='from canvas'/>");
    console.log("Saved!");
    setHasPhoto(true);
  };

  const clearImage = () => {
    let photo = photoRef.current;
    console.log(photo);
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
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
      <div className={"image " + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={clearImage}>Remove!</button>
      </div>
    </div>
  );
}

export default App;
