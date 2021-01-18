import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from './components/table';
import Table2 from './components/table_2';
import Table3 from './components/table_3';
import Table4 from './components/table_4';
import Logo from './public/logo.svg';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Other from './components/otherComponents/other';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [curTab, setCurTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setCurTab(newValue);
  };

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(pre => !pre);
  };

  return (
    <div className="App">
      <div className="headerRow">
        <Button onClick={toggleDrawer()}>hi</Button>
        <Drawer open={open} onClose={toggleDrawer()}>
          <div>222</div>
        </Drawer>
        <a className="logo">
          <h1 style={{ margin: '0 auto' }}>
            <img src={Logo} alt="兆豐logo"></img>
          </h1>
        </a>
      </div>
      <header className="App-header">
        {/* <Paper square>
          <Tabs
            value={curTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="合併資產負債表" />
            <Tab label="合併綜合損益表" />
            <Tab label="合併權益變動表" />
            <Tab label="合併現金流量表" />
            
          </Tabs>
        </Paper>
        {curTab === 0 &&
          <Table />
        }
        {curTab === 1 &&
          <Table2 />
        }
        {curTab === 2 &&
          <Table3 />
        }
        {curTab === 3 &&
          <Table4 />
        }
         */}

        <Other />
      </header>
    </div>
  );
}

export default App;
