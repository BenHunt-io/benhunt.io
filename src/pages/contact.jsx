import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import emailjs from  'emailjs-com';

// Success Text
const SuccessText = props => {
  if(props.isSuccessfulFormSubmission){
    return <h5>Sucess</h5>;
  }
}

const service_id = "amazon_ses";
const template_id = "template_zWRZSJmj";

class ContactForm extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      emailMsg: '',
      emailAddress: '',
      name: '',
      isSuccess: false
    };

    // User access key (public)
    emailjs.init("user_DMguaTGQB9ejjQIyW1YFZ")

    // Methods not bound to classes by default in js
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }
  
  handleMessageChange(event){
    this.setState({emailMsg: event.target.value});
  }

  handleEmailAddressChange(event){
    this.setState({emailAddress: event.target.value});
  }

  handleNameChange(event){
    this.setState({ name: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.sendEmail();
  }

  handleSuccess(response){
    this.setState({isSuccess: true});
    console.log('SUCCESS!', response.status, response.text);
  }

  handleClose(){
    this.setState({isSuccess: false});
  }

  sendEmail(){
    emailjs.send("amazon_ses", "simple_email", 
      {
        emailInputMsg: this.state.emailMsg,
        senderName: this.state.name
      })
    .then(this.handleSuccess
    , function(error) {
      console.log('FAILED...', error);
    });
  }

  render() {

    // <input> component properties within TextField
    let inputProps = {
      value : this.state.emailMsg,
      onChange: this.handleMessageChange,
    }

    let emailAddressInputProps = {
      value : this.state.emailAddress,
      onChange: this.handleEmailAddressChange
    }

    let nameInputProps = {
      value : this.state.name,
      onChange: this.handleNameChange
    }
    
    return (
      <form id="contactForm" onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField style={{width : "100%"}} inputProps={nameInputProps} required={true} variant="outlined" label="Name"/>
            </Grid>
            <Grid item xs={12}>
              <TextField style={{width : "100%"}} inputProps={emailAddressInputProps} required={true} variant="outlined" label="Email Address"/>
            </Grid>
            <Grid item xs={12}>
              <TextField style={{width : "100%"}} multiline rows={4}  inputProps={inputProps} required={true} variant="outlined" id="contactMsg" label="Message"/>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Grid item xs={3} justify="center">
                <Button style={{width : "100%"}} formTarget="_blank" type="submit" variant="contained">Send</Button>
              </Grid>
            </Grid>
          </Grid>

          <Snackbar open={this.state.isSuccess} onClose={this.handleClose} autoHideDuration={6000}>
            <Alert severity="success">
              You successfully sent Ben an email!
            </Alert>
          </Snackbar>
     </form>
    );
  }
}

const Contact = center => (
  <Layout>
    <Helmet title={'Contact'} />
    <Header title="Contact Me"/>

    <Container center={center}>

      <ContactForm/>
    </Container>
  </Layout>
);

export default Contact;
