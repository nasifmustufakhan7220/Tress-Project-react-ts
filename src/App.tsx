import { Suspense } from 'react';
import './App.css'
import type { TreesType } from './Type/type'
import Trees from './Components/Trees/Trees';

const treesPromises = async ():Promise<TreesType[]>=>{
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    return data.plants;
}

function App() {
  

  return (
    <>
        <Suspense fallback={<p>Trees are loading.....</p>}>
            <Trees treesPromises={treesPromises()}></Trees>
        </Suspense>
    </>
  )
}

export default App
