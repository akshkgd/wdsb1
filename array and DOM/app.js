// let hobbies = ['Sports', 'Cooking', 'Music', 'Movies', 'Reading'];
// // hobbies.pop()
// // hobbies.push('Programming');

// // hobbies.splice(3,2, 'x', 'y')
// // console.log(hobbies);

// let favMovie = {
//     title: 'The Godfather',
//     year: '1972',
//     genre: 'Crime',
//     director: 'Francis Ford Coppola',
//     description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//     img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
// }

// delete favMovie.description;
// favMovie.rating = 9.2;
// console.log(favMovie);

// changeColor = () => {
//     document.getElementById('heading').style.color = 'blue'
// }
// let counter = 0;
// increment = () => {
//     // counter++;
//     // counter += 1
//     counter = counter + 1;
//     document.getElementById('counter').style.color = 'green';
//     document.getElementById('counter').innerHTML = counter;
// }
// decrement = () => {
//     if(counter > 0){
//     counter = counter -1;
//     document.getElementById('counter').style.color = 'red';
//     document.getElementById('counter').innerHTML = counter;}
// }
// reset = () => {
//     counter = 0;
//     document.getElementById('counter').style.color = 'blueviolet';
//     document.getElementById('counter').innerHTML = counter;
// }

// let name = null;
// let age;
// console.log(name);
// console.log(age);

function fx(n) {
  d = new Array(n + 1).join("x").split("").reduce((d, v, i) => {
        J = 2 * i + 1 + (i&1);
        return (d += J + (J + 1 - 2 * i + 1));
      },
      1,
      -1 - Math.floor(n / 2) * 2
    );
  return d - (n - 2);
}




function fxx(n){
  let reduce = new Array(n + 1).join("x").split("").reduce((reduce,value, index) => {
      if(index%2 == 0){
        J= 2 * index + 1;
      }
      else{
        J= 2 * index + 2;
      }
      reduce = (reduce + J + (J + 2 - 2 * index));
      console.log(reduce);
      return reduce
    },1, - Math.floor(n / 2) * 2-1);
  return reduce - (n - 2);
  }







function fxxx(n){
  let reduce = new Array(n + 1).join("x").split("").reduce((reduce, value, index) => {
    if(index%2 == 0){
      J= 2 * index + 1;
    }
    else{
      J= 2 * index + 2;
    }
    reduce = (reduce + J + (J + 2 - 2 * index));
    console.log(reduce);
    return reduce
  },1, - Math.floor(n / 2) * 2-1);
  console.log(reduce);
  let result = reduce - (n - 2);
  return result;
}



console.log(fx(10));
console.log(fxx(10));
console.log(fxxx(10));



