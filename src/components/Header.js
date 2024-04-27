import React from "react";
import { CardHeader } from "reactstrap";

const Header = () => {
  return (
    <CardHeader className="bg-secondary">
        <div className="d-flex justify-content-center align-itmes-center h2 mb-3">
        Dynamic Duos: Discover Matching Pair!
        </div>
    </CardHeader>
  );
};

export default Header;
