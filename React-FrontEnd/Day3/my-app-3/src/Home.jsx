import React from 'react'

function Home() {
    let x =10;
    let y =20;
    let arr = ["praveen","paapa","world"];
    console.log(`Hi, Welcome!!! x and y:",${x+y}`)
  return (
    <div>
        {/* <h1>Hi, Welcome!!!{arr[0]}</h1>
        <h1>Hi, Welcome!!!{arr[1]}</h1>
        <h1>Hi, Welcome!!!{arr[2]}</h1> */}
        {
            arr.map((item) => (
                <h2>Hi, Welcome!!!{item}</h2>  
            ))
        }

    </div>
  )
}

export default Home