import Formsy from "formsy-react";
import React, { Component } from 'react'
import "../scss/styles.scss"
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fetch from "isomorphic-fetch";
 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }
 
  disableButton() {
    this.setState({ canSubmit: false });
  }
 
  enableButton() {
    this.setState({ canSubmit: true });
  }
 
  submit(model) {
    fetch('/api/guestbook', {
      method: 'post',
      body: JSON.stringify(model)
    });
  }

  onFormSubmit(e) {
    console.log("0");
    e.preventDefault();
    console.log("1");
  }
 
  render() {
    return (
      <div>
        <Head>
          <title>Guestbook</title>
        </Head>
        <Header />
        <div className="app">
          {/* <form className="guestbook-form" onSubmit={this.onFormSubmit} methoddd="POST" actionnn="/api/guestbook"> */}
          <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <h2>Contact</h2>
            <div className="row">
              <div className="input input--name">
                <label htmlFor="name">Name</label>
                <input name="name" required />
              </div>
              <div className="input input--message">
                <label htmlFor="message">Message</label>
                <input name="message" required />
              </div>
              {/* <div>
                <MyInput
                  name="email"
                  validations="isEmail"
                  validationError="This is not a valid email"
                  required
                />
              </div> */}
            </div>
            {/* <button type="submit">Submit</button> */}
            <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
          </Formsy>
        </div>
        <Footer />
      </div>
      // <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
      // </Formsy>
    );
  }
}









// function isNotEmpty(element) {
//   if (element.length() == 0) {
//     return false
//   }
//   return true
// }


  // const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  //   if (isNotEmpty(element)) {
  //     data[element.name] = element.value;
  //   }
  //   return data;
  // }, {});

  // const formSubmit = e => {
  //   e.preventDefault();
  //   const data = formToJSON(guestbookForm.elements);
    
    
  // }

  // const guestbookForm = document.querySelector(".guestbook-form")[0];
  // guestbookForm.addEventListener('submit', formSubmit);


  
  // guestbookForm.onsubmit(function(e) {
  //   e.preventDefault();
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('POST', '/api/guestbook');
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.onload = function() {
  //       if (xhr.status === 200) {
  //           var userInfo = JSON.parse(xhr.responseText);
  //       }
  //   };
  //   xhr.send(JSON.stringify({
  //       name: 'Brady Rogers',
  //       message: 'Usu ea purto graeci gubergren, ne est tempor primis. Ius no erat audiam alienum, impetus consectetuer necessitatibus ius no, ipsum ocurreret qui in.'
  //   }));
  // });


// async function fetchAsync () {
//   let res = await fetch('/api/guestbook');
//   let data = await res.json();
//   return data;
// }
// fetchAsync()
//   .then(data => console.log(data))
//   .catch(reason => console.log(reason.message))





// <form className="" method="post" action="/api/guestbook" onSubmit={e => {e.preventDefault()}}>
//   <h2>Contact</h2>
//   <div className="">
//     <div className="name">
//       <input name="name" label="Name" required />
//     </div>
//     <div className="message">
//       <input name="message" label="Message" required />
//     </div>
//   </div>
//   <button type="submit">Submit</button>
// </form>




// const res = await fetch('/api/guestbook')
  // const json = await res.json()

  // async function fetchAsync () {
  //   let res = await fetch('/api/guestbook');
  //   let data = await res.json();
  //   return data;
  // }

  // fetchAsync()
  //   .then(data => console.log(data))
  //   .catch(reason => console.log(reason.message))

    // function validateMyForm() {
    //   console.log("onSubmit");
    // };

  // function submitForm (data) {
  //   if (1 == 1) {
  //     console.log("start: validateForm");
  //     console.log("end: validateForm");
  //   }
  //   console.log("start: submitForm");
  //   fetch('/api/guestbook', {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     res.status === 200 ? this.setState({ submitted: true }) : ''
  //   })
  //   console.log("end: submitForm");
  // }



  // handleSubmit = (e) => {
  //   // e.preventDefault()
  //   const { email, password } = this.state
  //   let message

  //   let xhr = new XMLHttpRequest()

  //   xhr.open("POST", "/login")

  //   xhr.setRequestHeader('Content-Type', 'application/json')

  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState < 4) {
  //       this.setState({ isLoading: true });
  //     }
  //     else if (xhr.readyState === 4) {
  //       if (xhr.status === 401) {
  //         let response = JSON.parse(xhr.responseText);
  //         return this.setState({ formError: true, xhrMessage: response.message, isLoading: false });
  //       }
  //       if (xhr.status === 500) {
  //         return this.setState({ formError: true, xhrMessage: "Something went wrong, check your internet connection and try again", isLoading: false });
  //       }
  //     }
  //   }
  //   xhr.onerror = () => {
  //     Error('XMLHttpRequest error: Unable to get confirmation')
  //   }
  //   xhr.send(
  //     JSON.stringify({
  //       email: email,
  //       password: password,
  //       _csrf: this.state.csrfToken
  //     })
  //   )
  // }