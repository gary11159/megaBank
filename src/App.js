import React from 'react';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Logo from './public/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Other from './components/otherComponents/other';
import Menu from './components/menu';
import Report from './components/report';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [curTab, setCurTab] = React.useState('other');
  const handleChange = (newValue) => {
    setCurTab(newValue);
  };
  return (
    <div className="App">
      <div className="headerRow">
        <a className="logo">
          <Row>
            <Col xs={0.5}>
              <Menu handleChange={(val) => handleChange(val)}/>
            </Col>
            <Col>
              <h1 style={{ margin: '0 auto' }}>
                <img src={Logo} alt="兆豐logo"></img>
              </h1>
            </Col>
          </Row>
        </a>
      </div>
      <header className="App-header">
        {curTab === 'report' &&
          <Report />
        }
        {curTab === 'other' &&
          <Other />
        }
      </header>
    </div>
  );
}

export default App;
