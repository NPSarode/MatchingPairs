import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Xarrow, { Xwrapper } from "react-xarrows";
import { data } from "./Data";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";

const Columns = ({columnA, columnB, link, setColumnA, setColumnB, setLink, matches}) => {

    
  const onColumnAClick = (e, i) => {
    setLink({ ...link, start: e.target.id, start_id: i });
  };

  const onColumnBClick = (e, i) => {
    setLink({ ...link, end: e.target.id, end_id: i });
  };

  const validateLink = () => {
    // eslint-disable-next-line
    const isValid = matches.matches.filter((data) => {
      if (data.Column_A === link.start_id && data.Column_B === link.end_id) {
        return data;
      }
    })[0];

    if (isValid){ 

      withReactContent(Swal).fire({
        title: <i>Correct</i>,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        allowOutsideClick: true
      })

        // eslint-disable-next-line
      setColumnA({...columnA, values: columnA.values.filter((data, i) => {
        if(data.id !== isValid.Column_A) {
          return data
        }
      })})
      // eslint-disable-next-line
      setColumnB({...columnB, values: columnB.values.filter((data, i) => {
        if(data.id !== isValid.Column_B) {
          return data
        }
      })})

    } else {

      withReactContent(Swal).fire({
        icon: 'error',
        title: <i>Incorrect</i>,
        allowOutsideClick: true,
        showConfirmButton: false,
        timer: 2000
      })

    }

    setLink({
      start: null,
      end: null,
      start_id: -1,
      end_id: -1,
    })

  };

  const onResetClick = () => {
    setColumnA(data[0])
    setColumnB(data[1])
    setLink({
      start: null,
      end: null,
      start_id: -1,
      end_id: -1,
    })
  }


  return (
    <Xwrapper>
      <Row className="mt-4">
        <Col lg={4} sm={4} >
          <Card className="bg-success bg-opacity-10 text-white">
            <CardHeader tag={"h3"} className="bg-success bg-opacity-75">{columnA.column}</CardHeader>
            <CardBody >
              {columnA.values.map((data, i) => {
                return (
                  <Row key={i} className="mb-2">
                    <Col
                      lg={12}
                      id={(columnA.column + data.id).replace(" ", "")}
                      className={`border border-secondary p-4 rounded bg  bg-opacity-50 text-muted ${
                        link.start_id === data.id
                          ? "border-success bg-success"
                          : ""
                      }`}
                      onClick={(e) => onColumnAClick(e, data.id)}
                    >
                      {data.value}
                    </Col>
                  </Row>
                );
              })}
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} sm={4}></Col>
        <Col lg={4} sm={4}>
          <Card className="bg-danger bg-opacity-10 text-white">
            <CardHeader tag={"h3"} className="bg-danger bg-opacity-75">{columnB.column}</CardHeader>
            <CardBody>
              {columnB.values.map((data, i) => {
                return (
                  <Row key={i} className="mb-2">
                    <Col
                      lg={12}
                      id={(columnB.column + data.id).replace(" ", "")}
                      className={`border border-secondary p-4 rounded bg  bg-opacity-50 text-muted ${
                        link.end_id === data.id
                          ? "border-danger bg-danger"
                          : ""
                      }`}
                      onClick={(e) => {
                        onColumnBClick(e, data.id);
                      }}
                    >
                      {data.value}
                    </Col>
                  </Row>
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <div className="mt-4 d-flex justify-content-evenly align-items-center gap-2">
            <button
              className="btn btn-primary btn-lg w-25"
              onClick={validateLink}
            >
              Submit
            </button>
            <button
              className="btn btn-dark btn-lg w-25"
              onClick={onResetClick}
            >
              Reset
            </button>
          </div>
        </Col>
      </Row>

      {link.start && link.end && (
        <Xarrow
          start={link.start} //can be react ref
          end={link.end} //or an id
          color="#0FC6C6"
          curveness={1}
        />
      )}
    </Xwrapper>
  );
};

export default Columns;
