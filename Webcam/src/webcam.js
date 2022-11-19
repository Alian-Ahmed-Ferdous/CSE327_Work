import react from "react";
import "./styles.css";

function webcam() {
  let videoRef = react.useRef(null);
  let photoRef = react.useRef(null);
  const [count, setCount] = react.useState(0);

  const [hasPhoto, setHasPhoto] = react.useState(false);

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

  react.useEffect(() => {
    getVideo();
  }, [videoRef]);

  const takePicture = (event) => {
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
    let link = event.currentTarget;
    link.setAttribute("download", `${count}_Image`);
    var image = photo.toDataURL("image/png");
    const w = window.open("about:blank", "image from canvas");
    link.setAttribute("href", image);
    w.document.write("<img src='" + image + "' alt='from canvas'/>");
    console.log("Saved!");
    console.log(link);
    setHasPhoto(true);
    setCount(count + 1);
  };

  const clearImage = () => {
    let photo = photoRef.current;
    console.log(photo);
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };
  return (
    <div>
      <div>
        <video ref={videoRef}></video>
        <a href="download_link" onClick={takePicture} type="button">
          <button>Snap!</button>
        </a>
      </div>
      <div className={"image " + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={clearImage}>Remove!</button>
      </div>
    </div>
  );
}

export default webcam;
