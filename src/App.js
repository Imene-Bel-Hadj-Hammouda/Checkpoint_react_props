import BillGates from './profile/Photo/BillGates.jpg'
import './App.css';
import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Nav} from 'react-bootstrap';

import Nav_bar from './Nav_bar.js';

function App() {
  const fullName ="Bill Gates"
  const bio = "Bill Gates was born on October 28, 1955 in Seattle (United States), where his father is a business lawyer and his mother is a professor at the University of Washington. Still in Seattle, it was at the private school in Lakeside that he discovered computer science on one of these gigantic computers from the late 1960s, a PDP-10. At 13 years old. It is with his childhood friend Paul Allen that they program their first games and seek to optimize software .In 1973, Gates entered Harvard University as a freshman. There he met Steve Ballmer, who would later become the future boss of Microsoft until 2014. Besides this decisive meeting and his aspirations for computer programming, his university studies did not go further than this first year.Still with his friend Paul Allen, Bill Gates set about developing the very first computer language working with the Altair 8800 consumer microcomputer . Called Altair BASIC, it was the first software of the company created for the occasion: Micro -Soft subsequently renamed Microsoft."
  const profession = "Founder of Microsoft"
  const photo= <img src={BillGates} alt='BillGates' height= {500} width={500}  ></img>

  // handleName function as props that alert name of profile user.
  const alertMe = () => {
    alert("User : Imene")
  }
  return (
    

      //  <div className="App-header">
      <div>
        <Nav_bar/>
       
       <Profile fullName={fullName} bio={bio} profession={profession} photo={photo} alertMe={alertMe}/>


      </div>
    
  );
}

export default App;
