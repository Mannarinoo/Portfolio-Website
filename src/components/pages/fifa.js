import React, { Component} from 'react'
import '../../App.css';
import { Document, Page, pdfjs} from "react-pdf";
import samplePDF from '../../images/FIFA_Analysis.pdf';
import Navbar from '../Navbar';
import '../Navbar.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Fifa extends Component {
  render () {
    return (
      <div>
      <Navbar></Navbar>
      <div className="fifa-pdf">
      <Document
        file={samplePDF}
        onLoadSuccess={this.onDocumentLoad}>
        {[1,2,3,4,5,6,7,8,9].map(page => (
            <Page pageNumber={page} width={1000} textAlign='center'>

              </Page>
            
        ))}
      </Document>
      </div>
      </div>
    )
  }
}
//Neymar-2_player_card.png
export default Fifa;