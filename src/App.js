import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { GlobalProvider } from "./context/GlobalState";
import { Link, BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {Cart} from "./components/Cart/Cart";
import {ShoeDetail} from "./components/ShoeDetail/ShoeDetail";
import {About} from "./components/About/About";
import {NotFound} from "./components/NotFound/NotFound";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <GlobalProvider>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Link to="/" style={{ "float": "left", "padding": "5px", "color": "white", "textDecoration": "none" }}>Mustafa's Shoes</Link>
              </Typography>
              <Typography variant="h6">
                <Link to="cart" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>Cart</Link>
              </Typography>
              <Typography variant="h6">
                <Link to="about" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>About</Link>
              </Typography>
              <Typography>
                <Link to="/" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none", "fontWeight": "bold" }}>Home</Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":shoe" element={<ShoeDetail />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}
