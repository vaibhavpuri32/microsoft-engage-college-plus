import React from "react";
import MainNavigation from "./mainNavigation";
import Container from "react-bootstrap/esm/Container";
function Layout(props) {
  return (
    <div>
      <MainNavigation user={props.user} />
      <Container>
        <main>{props.children}</main>
      </Container>
    </div>
  );
}
export default Layout;
