import React, { useState } from "react";
import "./App.css";
import { Card, CardBody, Container } from "reactstrap";
import { data } from "./components/Data";
import Columns from "./components/Columns";
import Header from "./components/Header";

function App() {
  const [columnA, setColumnA] = useState(data[0]);
  const [columnB, setColumnB] = useState(data[1]);
  const matches = data[2];

  const [link, setLink] = useState({
    start: null,
    end: null,
    start_id: -1,
    end_id: -1,
  });

  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <Card className="bg-secondary bg-opacity-50" style={{minHeight: '100vh'}}>
          <CardBody>

            <Header />

            <Columns
              columnA={columnA}
              setColumnA={setColumnA}
              columnB={columnB}
              setColumnB={setColumnB}
              link={link}
              setLink={setLink}
              matches={matches}
            />

            {/* <Footer/> */}
          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;
