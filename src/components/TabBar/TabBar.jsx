import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import home_2 from "@/assets/images/tabbar/home_2.png";
import home_1 from "@/assets/images/tabbar/home_1.png";
import fast from "@/assets/images/tabbar/fast.png";
import my_2 from "@/assets/images/tabbar/my_2.png";
import my_1 from "@/assets/images/tabbar/my_1.png";
import "./TabBar.less";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function SimpleBottomNavigation() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [showTabbar, setShowTabbar] = React.useState(true);

  React.useEffect(() => {
    // useEffect是异步的
    switch (history.location.pathname) {
      case "/home":
        setValue(0);
        setShowTabbar(true);
        break;
      case "/fast":
        setValue(1);
        setShowTabbar(true);
        break;
      case "/user":
        setValue(2);
        setShowTabbar(true);
        break;
      default:
        setValue(0);
        setShowTabbar(false);
        break;
    }
  }, [history.location.pathname])
  return (
    <BottomNavigation
      value={value}
      style={{ display: showTabbar ? 'flex' : 'none' }}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            history.push("/home");
            break;
          case 1:
            history.push("/fast");
            break;
          case 2:
            history.push("/user");
            break;
          default:
            break;
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="首页" icon={<img src={value === 0 ? home_1 : home_2} />} />
      <BottomNavigationAction label="快速刷题" icon={<img src={fast} />} />
      <BottomNavigationAction label="我的" icon={<img src={value === 2 ? my_1 : my_2} />} />
    </BottomNavigation>
  );
}
