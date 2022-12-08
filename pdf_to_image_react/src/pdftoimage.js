import React, { Component } from 'react'

import { PDFToImage } from 'react-pdf-to-image-light'

class Example extends Component {
  
  onConvertPDFToImage = () => {
    PDFToImage({
      blob: "", // source pdf base64 string. need to be starting with the prefix "data:application/pdf;base64," 
      scale: 1, 
    }).then(result => {
      console.log(result);
    }).catch(console.error)
  }

  render() {
    return <MyComponent />
  }