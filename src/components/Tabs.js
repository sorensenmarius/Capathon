import React from 'react';
import '../styles/styles.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import PokeLogo from '../pics/logo.png';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Ubuntu',
    flexGrow: 1,
  },
}));

const ColorAppBar = withStyles((theme) => ({
  root: {
    backgroundColor: '#2B0A3D',
    color: '#ffffff',
    fontSize: '18px',
  },
}))(AppBar);

const SimpleTabs = ({ value, setValue, children }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <audio id="pokemonbattle" src="/battle.mp3" />
      <audio id="runaway" src="/runaway.mp3" />
      <audio id="victory" src="/victory.mp3" />

      <ColorAppBar position="static">
        <img
          src={PokeLogo}
          alt="$$$$pokemons4cash$$$$"
          style={{
            position: 'absolute',
            left: '40px',
            height: '100px',
            marginBottom: '30px',
          }}
        />

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs"
          style={{
            height: '100px',
          }}
          centered
        >
          {[children].flat().map((e, i) => (
            <Tab
              style={{
                marginTop: '44px',
                height: '46px',
              }}
              key={i}
              label={e.props.Label}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </ColorAppBar>
      {[children].flat().map((e, i) => (
        <TabPanel key={i} value={value} index={i}>
          {[children].flat()[i]}
        </TabPanel>
      ))}
    </div>
  );
};

export default SimpleTabs;
