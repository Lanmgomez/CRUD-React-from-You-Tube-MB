// material ui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// icons
import { ImMenu } from "react-icons/im";
// hooks
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./MenuMobile.sass"

const MenuMobile = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // css material ui  
  const styles = {
    display: "flex",
    bgcolor: "#000",
    color: "#fff",
    top: "-5px",
    fontSize: "25px",
    "&:hover": {color: "#fb3", bgcolor: "#302e2e"}
  }

  return (
    <div className='mobile-menu'>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={styles}
      >
        <ImMenu className="ImMenu" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={styles} onClick={handleClose}>
            <Link to={`/`} className="menu-mobile-links">Home</Link>
        </MenuItem>
        <MenuItem sx={styles} onClick={handleClose}>
            <Link to={`/Cadastros`} className="menu-mobile-links">Cadastros</Link>
        </MenuItem>
        <MenuItem sx={styles} onClick={handleClose}>
            <Link to={`/NewProject`} className="menu-mobile-links">Novo Projeto</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default MenuMobile