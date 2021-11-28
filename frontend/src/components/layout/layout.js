import React from "react";
import MainNavigation from "./mainNavigation";
import Container from "react-bootstrap/esm/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout(props) {
  return (
    <div >
      <MainNavigation userId={props.userId} isTeacher = {props.isTeacher} username = {props.username}/>
      <ToastContainer />
      <Container>
        <main>{props.children}</main>
      </Container>
    </div>
  );
}
export default Layout;
