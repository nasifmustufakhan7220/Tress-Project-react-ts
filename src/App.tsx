import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import type { IBtnTypes } from './Type/btn';
import { Suspense } from 'react';
import CatagoriesHeader from './Components/CatagoriesHeader/CatagoriesHeader';
import Loder from './Components/Loder/Loder';
import CatagoriesBtn from './Components/CatagoriesBtn/CatagoriesBtn';


const categoryBtnsFetch = async (): Promise<IBtnTypes[]>=>{
  const res = await fetch("https://openapi.programming-hero.com/api/categories");
  const data = await res.json();
  return data.categories;
}

const buttonPromise = categoryBtnsFetch();


function App() {


  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <CatagoriesHeader/>
        <Suspense fallback={<Loder/>}>
            <CatagoriesBtn buttonPromise={buttonPromise}/>
        </Suspense>
        
    </>
  )
}

export default App