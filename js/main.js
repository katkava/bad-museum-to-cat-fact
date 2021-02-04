

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const artist = document.querySelector('input').value
  const url = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="+artist
  const secondUrl = "https://cat-fact.herokuapp.com/facts"
  // let numberIWant = []
  // let someCatFact = []

  fetch(url)
    .then(res => res.json())
    .then(museumData => {
  fetch(secondUrl).then(res => res.json()).then(catData => {
    const numberIWant = museumData.total;
    const someCatFact = catData[0].text;

    document.querySelector('h2').innerText = someCatFact.repeat(numberIWant)
  });
  });
}
//   .catch(err => {
//           console.log(`error ${err}`)
//       });

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });   
//  };
//  }
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });    
 
// }

  // fetch(url)
  //     .then(res => res.json()) // parse response as JSON
  //     .then(data => {
  //       numberIWant.push(data.total)
      

       
  // fetch(secondUrl)
  //     .then(res => res.json()) // parse response as JSON
  //     .then( function (data){
        
  //       // num = Math.floor(Math.random()*numberOfArtists);
  //        someCatFact.push(data[0].text)

  //        console.log(someCatFact.repeat(numberIWant))

        //  console.log(factNum)

          // document.querySelector("h2").innerText = 
          // data[num].text

    

         
      
//       //  document.querySelector('h2').innerText = numberOfObject
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });    
 
// }










// let numberToMultiply = getFetch()

// function multiply(){
//   const url = "http://numbersapi.com/"+numberToMultiply
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
      
//       //  document.querySelector('h2').innerText = numberOfObject
//       })
// }

