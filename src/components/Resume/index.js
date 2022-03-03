import React from 'react';
import ResumePdf from '../../assets/AricResume.docx'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default function Resume() {
  return (
    <MDBContainer className="mt-5 footer-spacing">
    <MDBRow>
      <MDBCol md="12">
        <embed id="Resume" src={ResumePdf} width="100%" height="750px" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);
};