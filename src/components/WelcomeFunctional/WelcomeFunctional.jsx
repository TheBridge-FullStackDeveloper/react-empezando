//componente funcional

// const WelcomeFunctional = (props) => {
//   console.log("props", props);
//   return (
//     <h3 className="textColor theBridgeText">
//       Hello {props.nameProp + " " + props.lastNameProp} {props.lastNameProp} Componente Funcional
//     </h3>
//   );
// };

// export default WelcomeFunctional;

//segundo ejemplo props

const WelcomeFunctional = (props) => {
    return (
      <h3 className="textColor theBridgeText">
        Hello {props.userProp.name +" "+ props.userProp.lastName} 
      </h3>
    );
  };
  
  export default WelcomeFunctional;
  
