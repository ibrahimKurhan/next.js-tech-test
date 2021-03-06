import { makeStyles } from '@material-ui/core/styles';


 const useStyles = makeStyles(theme => ({
 
    drawerContainer: {
      margin:"150px 20px 0px 20px",
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:"5px",

    },

    drawer:{
        "& .MuiBackdrop-root": {
      background: "transparent"
  }
    },

    acount: {
      fontFamily: "'Ubuntu', sans-serif",
      textAlign:"center",
      width: "100px",
      borderRadius:"40px",
      textTransform:"none",
      fontSize:"18px",
       '&:hover': {
             borderRadius:"40px",
             background: 'white',
             color:"hsl(356, 100%, 66%)",
           },
  },
  
    listedItems:{
       marginBottom:"180px",
       
  },

  listed:{
    
    '&:hover': {
             background: 'transparent',
           },
  },

    iconButtonContainer: {
        marginLeft: 'auto',
        paddingRight:"0",
        color: 'white',
          '&:hover': {
             background: 'transparent',
           },

    },

    menuIconToggle: {
       fontSize: '3rem',

    },

    divider:{
      marginTop:"20px", 
      color:"black"
    },
    menu:{
      padding:"100px",  
      marginTop: '130px',
      marginLeft: '-23px',

    },

    list:{
      borderRadius:"5px", 
      background:"rgb(210, 210, 210)"
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