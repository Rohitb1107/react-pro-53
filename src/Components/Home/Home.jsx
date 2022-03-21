import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Main } from "../../style";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */

  // `;
  const [Data, SetData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((res) => {
      console.log("res", res.data);
      SetData(res.data);
    });
  }, []);
  console.log("data", Data);

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {Data.map((ele) => {
          // console.log('ele', ele);
          return (
            <BookCard
              key={ele.id}
              id={ele.id}
              imageUrl={ele.imageUrl}
              title={ele.title}
              price={ele.price}
            />
          );
        })}
        {/* 

            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </Main>
    </div>
  );
};
