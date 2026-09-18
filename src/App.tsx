import { Suspense, useState } from "react";
import Banner from "./Component/Banner"
import Nav from "./Component/Nav"
import type { ITechnology } from "./Type";
import Card from "./Component/Card/Card";

const cardFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('../public/data.json');
  const data = await response.json();
  return data;
}

function App() {

   const [cardDataPromise] = useState(() => cardFetch());

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading.....</h2>}>
      <Card cardDataPromise = {cardDataPromise}></Card>
      </Suspense>
    </>
  )
}

export default App
