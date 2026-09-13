import { Suspense, useState} from 'react';
import './App.css'
import type { TreesType } from './Type/type'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Catagories from './Components/Catagories/Catagories';

const treesFetch = async ():Promise<TreesType[]>=>{
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    return data.plants;
}


function App() {
  const [treesPromise] = useState(()=> treesFetch());
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Suspense fallback={<p>Trees are loading.....</p>}>
            <Catagories treesPromise={treesPromise}></Catagories>   
        </Suspense>
    </>
  )
}

export default App
