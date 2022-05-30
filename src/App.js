import React, { useEffect , useState} from "react";
import Products from "./components/Products";
import axios from "axios";
const App = () => {
  const [prod, setprod] = useState([])
  useEffect(() => {
     axios.get('http://localhost:8080/products')
    .then(res => {
      setprod(res.data);
    });
  },[]);
  return <div><Products/>
  </div>;
};

export default App;
