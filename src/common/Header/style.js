import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
    input: {
      paddingLeft: 16,
      border:"1px solid #ebebeb",
      borderRadius:3,
      transition: "all .1s ease",
    },
    button: {
      color: "#fff",
      backgroundColor: "#0084ff",
      marginLeft: 16,
      height:32,
      marginTop:10, 
      display: "inline-block",
      transition: "all .1s ease"
    }
  })