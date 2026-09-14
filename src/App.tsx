import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { Suspense, useState} from 'react';
import Loder from './Components/Loder/Loder';

import type { ITreesType } from './Type/type';
import AllPlants from './Components/AllPlants/AllPlants';


const allPlantsFetch = async(): Promise<ITreesType[]>=>{
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  return data.plants;
}

const allPlantsPromise = allPlantsFetch();


function App() {

  const [carts, setCarts] = useState<ITreesType[]>([]);
  return (
    <>
        <Navbar carts={carts}></Navbar>
        <Hero></Hero>
        <Suspense fallback={<Loder/>}>
             <AllPlants allPlantsPromise={allPlantsPromise}
             carts={carts} setCarts={setCarts}
             /> 
        </Suspense>
        
    </>
  )
}

export default App