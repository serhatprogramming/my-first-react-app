const Contact = (props) => {
  return (
    <div>
      Name: {props.name}
      <br />
      DOB: {props.dob}
      <br />
      State: {props.state}
      <hr />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <Contact name="John Doe" dob="1990-01-01" state="CA" />
      <Contact name="Jane Doe" dob="1980-01-01" state="NY" />
    </div>
  );
};

export default App;

// const ReactLogo = (props) => (
//   <img
//     width={props.width}
//     src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//     alt="React Logo"
//   />
// );

// const App = () => {
//   const releaseYear = 2013;
//   const developerCompany = "Facebook, Inc.";
//   console.log("Release year: " + releaseYear);
//   console.log("Developer company: " + developerCompany);

//   return (
//     <div>
//       <h1>Hello React</h1>
//       <ReactLogo width="100" />
//       <ReactLogo width="75" />
//       <ReactLogo width="50" />
//       <p>
//         React was developed by {developerCompany} and was first released in{" "}
//         {releaseYear}, {new Date().getFullYear() - releaseYear} years ago.
//       </p>
//     </div>
//   );
// };

// export default App;
