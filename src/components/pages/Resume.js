import React, { Component} from 'react'
import '../../App.css';
import { Document, Page, pdfjs} from "react-pdf";
import samplePDF from '../../images/JOSEPH_MANNARINO_RESUME.pdf';
import Navbar from '../Navbar';
import '../Navbar.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {
  render () {
    return (
      <div>
      <Navbar></Navbar>
      <div className="pdf-container">
      <div className="resume-pdf">
      <Document
        file={samplePDF}
        onLoadSuccess={this.onDocumentLoad}>
        {[1].map(page => (
            <Page pageNumber={page} width={1000} textAlign='center'>

              </Page>
            
        ))}
      </Document>
      </div>
      </div>
      </div>
    )
  }
}
//Neymar-2_player_card.png
export default Resume;