import { useCallback, useEffect, useState } from "react";
import { PDFToImage } from "react-pdf-to-image-light";
import Tesseract from "tesseract.js";
import Img from "./test.JPG";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [textResult, setTextResult] = useState([]);

  const onConvertPDFToImage = (baseURL) => {
    PDFToImage({
      blob: baseURL, // source pdf base64 string. need to be starting with the prefix "data:application/pdf;base64,"
      scale: 1,
    })
      .then((result) => {
        console.log(result);
        setSelectedImage(...selectedImage, result);
        if (result) {
          console.log(result);
          setSelectedImage(result);
          for (let index = result.length - 1; index > -1; index--) {
            const base = result[index].replace("data:image/jpeg;base64,", "");
            console.log(base);
            const blob = b64toBlob(base, "image/jpeg");
            console.log(blob);
            const image = blobToFile(blob, "test.jpeg");
            console.log(image);
            console.log("start");
            Tesseract.recognize(image, "eng", {
              logger: (m) => {
                console.log(m);
              },
            })
              .catch((err) => {
                console.error(err);
              })
              .then((result) => {
                console.log(result.data);
                setTextResult(...textResult, result.data.text);
                console.log("done");
              });
          }
          console.log(textResult);
        } else {
          setSelectedImage(null);
          setTextResult("");
        }
      })
      .catch(console.error);
  };

  const b64toBlob = (b64Data, contentType) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  function blobToFile(theBlob, fileName) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    const file = new File(
      [theBlob],
      fileName,
      { type: "image/jpeg" },
      { lastModified: theBlob.lastModifiedDate }
    );
    return file;
  }

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        onConvertPDFToImage(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    getBase64(file);
  };

  const ViewImage = () => {
    return selectedImage.map((image) => <img src={image} alt="Red dot" />);
  };

  useEffect(() => {
    ViewImage();
  }, [selectedImage]);

  useEffect(() => {
    console.log(textResult);
  }, [textResult]);

  return (
    <div>
      <h1>ImText</h1>
      <p>Gets words in image!</p>
      <div>
        <label htmlFor="upload">Upload pdf</label>
        <input
          type="file"
          id="upload"
          accept="pdf/*"
          onChange={(e) => handleFileInputChange(e)}
        />
      </div>

      <div>
        {selectedImage && (
          <div>
            <ViewImage />
          </div>
        )}
        {/* {textResult && (
          <div>
            <ViewText />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default App;
