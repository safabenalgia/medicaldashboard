import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import './Sidebar.css'; // Assurez-vous d'importer le fichier CSS

function Sidebar() {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/patients">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem button component={Link} to="/doctors">
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
          <ListItemText primary="Doctors" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
