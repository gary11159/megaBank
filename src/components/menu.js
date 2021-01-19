import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }, menuButton: {
        marginRight: theme.spacing(2),
    }, hide: {
        display: 'none',
    },
}));

const Menu = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (tab) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(pre => !pre);
        if ( tab === 'report' || tab === 'other')
            props.handleChange(tab);
    };

    return (
        <>
            <IconButton
                aria-label="open drawer"
                onClick={toggleDrawer()}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer()}>
                <div className={classes.list} role="presentation"
                    >
                    <List>
                        <ListItem button key={'report'} onClick={toggleDrawer('report')} onKeyDown={toggleDrawer('report')}>
                            <Col md={3}>
                                <AssignmentIcon style={{ fontSize: '2.5rem' }} />
                            </Col>
                            <Col md={9} style={{ fontSize: '2.5rem' }}>
                                四大財報
                            </Col>
                        </ListItem>
                        <ListItem button key={'other'} onClick={toggleDrawer('other')} onKeyDown={toggleDrawer('other')}>
                            <Col md={3}>
                                <AssignmentIcon style={{ fontSize: '2.5rem' }} />
                            </Col>
                            <Col md={9} style={{ fontSize: '2.5rem' }}>
                                附註
                            </Col>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )


}


export default Menu;
