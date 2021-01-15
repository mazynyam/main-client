import React from 'react';
import logo from './../assets/images/kik.png';
import {Link, withRouter} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import ChatButton from './../components/ChatButton'
import Chat from './../components/Chat'

const useStyles = makeStyles((theme) => ({
textColor:{
    // color: ACD523,
    // listStyle:'none'
    
    marginTop:60,

    color:' #acd523',
    fontFamily:"Arial",
    fontWeight:"bold",
    fontSize: 11,
    listStyle:'none',
    '&:hover': {
       color: fade('#acd523', 0.8),
       },
  },
  textfoot:{
   
    
    fontSize:11
},
textbar:{
marginTop:25,
marginLeft:50,
height:30,
},
textkou:{
    marginTop:22,
    marginLeft:40,
    },
}));
function Footer() {
    const classes = useStyles();
    return(
        <>
        <Chat />
    <div className="footer">
        <div className="container-fluid">
            <div className="row justify-content-right ml-5 ">   
            <div className={classes.textkou}>
                <Link to='/' className={classes.textColor}>
                    Kiriikou.com<img src={logo} alt='Logo' width='40' height='30'/>  <div className=" mt-0">Online Shop</div>
                </Link>
             
            </div>   

                <div className="ml-5"  className={classes.textbar} >
                
                    <address>
                   <h6>Our Address: <span  className={classes.textfoot}>121, <br />
		              Clear Water Bay, Kowloon
		              GHANA<br /></span></h6>
		             
                    </address>
                    </div>
              
                    <div  className="text-left ml-5"  className={classes.textbar}>
                    <h6>Get in Touch: <span  className={classes.textfoot}> <i className="fa fa-phone fa-lg "></i>: +233 0245634890<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 0987563456
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiriikou@gmail.com">
                         kiriikou@gmail.com</a></span></h6>
                       
                     </div>
           
                <div className="text-left ml-5"  className={classes.textbar}>
                <h6>Follow Us:
                <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook sm"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin sm"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter sm"></i></a>
                        <br/>
                        </h6>
                </div>
                <div className="text-left ml-5 mt-3" id="copybar"  className={classes.textbar} >
                    <p>&copy; Copyright { new Date().getUTCFullYear() } Kiriikou</p>
                </div>
                </div>
                <div className="button">
                  <div className="myForm" >
                      <button className="floating-btn" id='myForm' onClick={()=>document.getElementById("myForm").style.display = "block"} >
                          <i className="fas fa-comments 4x"></i>
                      </button>
                  </div>
          </div>
        </div>
    </div>
 </>
            )
    }



export default Footer;