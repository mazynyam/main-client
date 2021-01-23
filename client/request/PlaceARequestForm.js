import React, {useState, useEffect} from 'react'
import { Card, CardContent,Grid, TextField, makeStyles, fade, CardActions,Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import { Box } from '@material-ui/core';
import create from './api-request'
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-evenly"

},

sellproduct: {
    fontSize: 40,
    marginLeft: 30,
    color: "#213A57",
    fontFamily: "Bitter",
    fontWeight: "bold"

},

textField2: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: 200,
    // // maxWidth: 600,
    //   margin: 'auto',
    textAlign: 'center',
    
    paddingBottom: theme.spacing(2)
},
buttonfield: {

    width: 150,
    height: 48,
    backgroundColor: "#acd523",
    '&:hover': {
        backgroundColor: fade('#acd523', 0.70),
        color: "#17293d"
    },
    margin: 'auto',
    textAlign: 'center',
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#17293d",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
},
fieldbutt: {

    marginLeft: theme.spacing(15),


},
textField3: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: 200,
    // // maxWidth: 600,
    //   margin: 'auto',
    //  textAlign: 'center',

    
    paddingBottom: theme.spacing(2)
},
textField1: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200,
    // // maxWidth: 600,
    //   margin: 'auto',
    textAlign: 'center',
    
    paddingBottom: theme.spacing(2)
},

textarea: {
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(20),
    width: 200,
   


    textAlign: 'center',
    marginTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),

},
boxfield: {

    marginBottom: 10,
    marginLeft: 150,
    marginRight: 200,
    borderColor: "#acd523",
   height:85,
    borderWidth:5
},
boxfield3: {
    // marginTop: 0,
    // marginBottom:70,
    margin:'auto',
    height:170
},
boxfield2: {

    marginBottom: 40,
    marginLeft: 150,
    marginRight: 200,
    borderColor: "#acd523",
    marginTop: 20,
    borderWidth:5
},

  card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    container: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-evenly"

  },
    menu: {
      width: 200,
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle,
      fontSize: '1.2em'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px'
    }
  }))
  

export default function PlaceARequestForm() {
    const classes = useStyles();
    const [values, setValues] = useState({
      name:'',
      country:'',
      city:'',
      town:'',
      phone:'',
      email:'',
      quantity:'',
      description:'',
      customization:'',
      image:'',
      error: ''
    })
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }
    const clickSubmit = () => {
      let requestData = new FormData()
      values.name && productData.append('name', values.name)
      values.country && productData.append('country', values.country)
      values.city && productData.append('city', values.city)
      values.town && productData.append('town', values.town)
      values.phone && productData.append('phone', values.phone)
      values.email && productData.append('email', values.email)
      values.quantity && productData.append('quantity', values.quantity)
      values.description && productData.append('description', values.description)
      values.customization && productData.append('customization', values.customization)
      values.image && productData.append('image', values.image)
  
      create({
        requestId: match.params.requestId,
      }, {
        t: jwt.token
      }, requestData).then((data) => {
        if (data.error) {
          setValues({...values, error: data.error})
        } else {
          setValues({...values, 'redirect': true})
        }
      })
    }
    return (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8}>
            <Box borderBottom={1} className={classes.boxfield}>
                <Typography type='headline' className={classes.sellproduct} component='h2'>Request For Quotation</Typography>
              </Box>
              <Card className={classes.card}>
          
              <TextField className={classes.textField} type="text" id="productName" name="productName" label='Product Name' required />
              <TextField id="select" label="Category" select className={classes.textField} required>

                          <MenuItem value="Others">Others</MenuItem>
                              <MenuItem value="Agriculture">Agriculture</MenuItem>
                              <MenuItem value="Natural Resources">Natural Resources</MenuItem>
                              <MenuItem value="Automobiles">Automobiles</MenuItem>
                              <MenuItem value="Beauty">Beauty</MenuItem>
                              <MenuItem value="Automobiles">Automobiles</MenuItem>
                              <MenuItem value="Electrical Appliances">Electrical Appliances</MenuItem>
                              <MenuItem value="Food & Beverages">Food & Beverages</MenuItem>
                              <MenuItem value="Fashion & Clothing">Fashion & Clothing</MenuItem>
                              <MenuItem value="Home & Decor">Home & Decor</MenuItem>
                              <MenuItem value="Phones & Computers">Phones & Computers</MenuItem>
              </TextField> <br />
                  <TextField className={classes.textField} type="number" id="quantity" name="quantity" label='Quantity' required min={1} /><br /> <br />
                  <TextField className={classes.textField} type="text" id="description" name="description" label='Product Description' required  multiline rows={9} variant="outlined"/><br /> <br />
                  <TextField className={classes.textField} type="text" id="customization" name="customization" label='Product Customization' placeholder='You can add product customization here if any'   multiline rows={9} variant="outlined"/><br /> <br />
                    <input accept="image/*" onChange={handleChange('image')} value={values.image ? values.image.name : ''} className={classes.input} id="icon-button-file" type="file"/><br /><br />
                    <label htmlFor="icon-button-file">
                        <Button variant="contained" color="secondary" component="span">
                          Add Pictures for actual items 
                        <FileUpload/>
                        </Button>
                    </label> <span className={classes.filename}></span><br/>
                    <Button color="primary" variant="contained" onClick={clickSubmit}  className={classes.submit}>Place a Request</Button>
                    {/* <Link to={'/seller/shop/edit/'} className={classes.submit}><Button variant="contained">Cancel</Button></Link> */}
              </Card>
           
            </Grid>
            <Grid item xs={4} sm={4}>
              <Card className={classes.card}>
              <Typography variant='contained'  color='textPrimary' component='h2'>This a  Special Feature</Typography>
              <Typography component='h3' className={classes.title}>Kiriikou.com takes this special request directly from their cherished users to source for products not featured on the site. </Typography>
              <h5>Kindly follow the steps to complete a request</h5>
              <ul>
                <li>Type a name of the product you want to request for</li>
                <li>Choose a category from the list provided</li>
                <li>Enter the quantity you want to request for</li>
                <li>Add a description for product clarification</li>
                <li>You can add customization to the product you are requesting for if any.</li>
                <li>You can add images, if the product is not easily to be identified.</li>
              </ul>
              </Card>
            </Grid>
        
          </Grid>
        </div>
    )
}
