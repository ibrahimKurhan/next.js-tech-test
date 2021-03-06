
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
   
  root: {
    flexGrow: 1,
    width: "100%",
    background:"red",
 
  },

  menuButton: {
    marginRight: theme.spacing(2),

      '&:hover': {
             background: 'transparent',
           },
  },

  

  title: {
    flexGrow: 1,

  },

  listed:{
    padding:"0px",


 },


  login:{
    background: "transparent",
    borderRadius:"40px",
       [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    },

    '&:hover': {
             color:"hsl(356, 100%, 66%)" ,
             background: 'white',
           },

  },

  acount: {
    width: "100px",
    background: "hsl(356, 100%, 66%)",
    borderRadius:"40px",

    [theme.breakpoints.down('md')]: {
    marginLeft: '-10px',
    },
       '&:hover': {
             borderRadius:"40px",
             background: 'hsl(13, 100%, 72%)',
           },
 
  },


  connect:{
      color: "white",
      cursor: "pointer",
  },


  appbar:{
    height: "150px",
    justifyContent:"center",
    padding:"0 100px 0 100px",
    backgroundColor:"hsl(356, 100%, 66%)",
    [theme.breakpoints.down('xs')]: {
    padding:"0",
    },
  },


 Link:{
     color: "white",
 },


 menu:{
    padding:"100px",  
    marginTop: '50px',
 },

 menuItem:{
     padding:"20px 40px 10px 40px", 
     marginLeft:"10px",
     textDecoration:"none"
 },

 newsLetter:{
     padding:"20px 40px 10px 40px"
 },

 linkedIn:{
     padding:"20px 40px 10px 40px", 
      marginLeft:"10px"
 }
 
}));


export default useStyles