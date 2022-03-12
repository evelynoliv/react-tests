import React, { useState, useContext } from "react";
import { KeyPad, MainDiv } from "./style";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }



function Contador() {
  const [data, setData] = useState("");
  


    return (
      <div>
       
          
           <CssBaseline/>
             <Container maxWidth="xs">
             <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
             <button>Clear</button>
             <button>+</button>
             <button>-</button>
             <button>%</button>
             <button>&divide;</button>
             <button>7</button>
             <button>8</button>
             <button>9</button>
             <button>&times;</button>
             <button>4</button>
             <button>5</button>
             <button>6</button>
             <button>&ndash;</button>
             <button>1</button>
             <button>2</button>
             <button>3</button>
             <button>+</button>
             <button>0</button>
             <button>.</button>
             <button>=</button>
             
             </Container>
           
            
            
            
          
      
      </div>
    );
  }
  
  export default Contador;