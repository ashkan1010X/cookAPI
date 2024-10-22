import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetailComponent";
import LeavesAnimation from "./Components/LeavesAnimation"; // Import the LeavesAnimation

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("631248");

  return (
    <div>
      <Nav />
      <LeavesAnimation /> {/* Add the Leaves Animation */}
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
