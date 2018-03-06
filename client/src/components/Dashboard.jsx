import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
position: "relative",
top: "-40px",
left: "180px",
width: "65%",
color: "rgb(0,128,255)",
}

const style2={
  width: "65%",
  color: "darkBlack",
  position: "relative",
  left: "20px",
}
const styleavt = {
  position: "relative",
  top: "50px",
}

const styleb ={
  position: "relative",
  top: "-20px",
  left: "390px",
  width: "25%",
  marginRight: "5px",
  marginLeft: "10px",
  borderColor: "#0000000",
  border: "3px",
}


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={darkBlack} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Contact</MenuItem>
  </IconMenu>
);


const Dashboard = () => (
  <div className="dash">

       <List className="nf">
         <h1 id="news">Newsfeed</h1>
         <div> <Avatar className="avt" style={styleavt} size={80} src="../css/marco.jpg" /> </div>
         <ListItem
           rightIconButton={rightIconMenu}
           style={style}
           primaryText="Marco Castillo"
           secondaryText={
             <p>
               <span style={{color:'#0080FF'}}>Job Description</span><br />
               I&apos;ll be needing to paint my newly remodeled garage this weekend. Anyone interested, please contact me asap.
             </p>
           }
           secondaryTextLines={2}
         />
       <Divider style={style2} inset={true} />
         <div><Avatar className="avt" style={styleavt} size={80} src="../css/mando.jpg" /></div>
         <ListItem
            style={style}
           rightIconButton={rightIconMenu}
           primaryText="Armando Cano"
           secondaryText={
             <p>
               <span style={{color:'#0080FF'}}>Job Description</span><br />
              I would like to have the front of my house repainted, along with some windows and front door.
             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar className="avt" style={styleavt} size={80} src="../css/alex.jpg" /></div>
         <ListItem
            style={style}
           rightIconButton={rightIconMenu}
           primaryText="Alex Rodriguez"
           secondaryText={
             <p>
               <span style={{color:'#0080FF'}}>Job Description</span><br />
            Looking for someone to paint the entire house interior.
             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar className="avt" style={styleavt} size={80} src="../css/nando.jpg" /></div>
         <ListItem
          style={style}
           rightIconButton={rightIconMenu}
           primaryText="Fernado Ortiz"
           secondaryText={
             <p>
               <span style={{color:'#0080FF'}}>Job Description</span><br />

            need all sides of the house to be repainted.

             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar className="avt" style={styleavt} size={80} src="../css/lalo.jpg" /></div>
         <ListItem
           style={style}
           rightIconButton={rightIconMenu}
           primaryText="Luis Avila"
           secondaryText={
             <p>
               <span style={{color:"#0080FF"}}>Job Description</span><br />
              will like to repaint all windows.
             </p>
           }
           secondaryTextLines={2}
         />
       </List>
   </div>
);

<div className="Post">
  <RaisedButton type="submit" label="Post" backgroundColor=" #808080" style={styleb} />
</div>


export default Dashboard;
