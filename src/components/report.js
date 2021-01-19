import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from './table';
import Table2 from './table_2';
import Table3 from './table_3';
import Table4 from './table_4';

const Report = (props) => {
    const [curTab, setCurTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setCurTab(newValue);
    };
    return (
        <>
            <Paper square>
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
        </>
    )


}


export default Report;
