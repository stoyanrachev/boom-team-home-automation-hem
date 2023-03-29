import styles from "./Navigation.module.scss";
import classNames from "classnames";
import { useState } from "react";
import {
  Drawer,
  List,
  IconButton,
  Menu,
  ListItem,
  MenuItem,
  ListItemIcon,
  Badge,
  ListItemText,
} from "@mui/material";
import User from "../user/User";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "../link/Link";

export default function Navigation({ rooms }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(styles["navigation"])}>
      <Drawer anchor="left" variant="permanent">
        <div className={classNames(styles["user-container"])}>
          <User
            name="John Doe"
            avatar="/images/avatar.png"
            size={55}
            headingSize="h5"
          />
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "144px",
              },
            }}
          >
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>

        <List>
          {/* Main Nav link */}
          <Link href="#">
            <ListItem className={classNames(styles["header-item"])}>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Apartment" />
              <Badge
                badgeContent={rooms.length}
                color="secondary"
                className={classNames(styles["badge"])}
              />
            </ListItem>
          </Link>
          {/* Sub Nav link */}
          {rooms.map((room, key) => (
            <Link href={`/room/${room.name}`}>
              <ListItem>
                <ListItemIcon>
                  <BedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={room.name} />
                {/* 
                <Badge
                  badgeContent={"!"}
                  color="error"
                  className={classNames(styles["badge"])}
                />
                */}
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
