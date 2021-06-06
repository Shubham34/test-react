import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import {getContacts} from '../../store/actions/contactAction'
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import "./button.css";


const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 50px 0 50px 0;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

const logo = {
  height : "50Px",
  width : "50Px"
}

const BrandListing = (props) => {
    const [showImage, setShowImage] = useState(false);
    const [imgUrl , setImgUrl] = useState("")

    const hnadleShowImageClose = () => {
        setShowImage(false)
    }
    const hnadleShowImageOpen = (url) => {
        setImgUrl(url)
        setShowImage(true)
    }

    useEffect(() => {
        props.getContacts();
      },[])

    let content = null;
    let headers = null;
    let data = null;
    if(props.contacts) {
      content = props.contacts.map((contact,index)=>
        <tr key = {index}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.message}</td>
        </tr>
      );
      data = props.contacts;
      headers = [
        { label: "ID", key:"_id" },
        { label: "Full name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Message", key: "message" }
      ];
    }

  return (
    
      <HelpPageWrapper>
        <Row>
          <Col sm="10"></Col>
          <Col sm={2}>
              <CSVLink data={data} headers={headers} className="button">
                Download data in csv
              </CSVLink>
            </Col>
        </Row>
        <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              
              { !content?<div style = {{position: "fixed" , left: "55%" , top : "35%"}} > <Loader   color = "#389244" h = "100"/> </div> :
              <Table striped bordered hover>
                <thead>
                      <tr>
                        <th>name</th>
                        <th>Email</th>
                        <th>Message</th>
                      </tr>
                  </thead>
                  <tbody >

                   { content}
                   </tbody>
              </Table>
            }
            </Col>
            <Col sm={1}></Col>
        </Row>

      </HelpPageWrapper>
  
  );
}
const mapStateToProps = state => {
 // console.log(state);
  return {
    contacts : state.contactReducer.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContacts : data => getContacts(data,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BrandListing)