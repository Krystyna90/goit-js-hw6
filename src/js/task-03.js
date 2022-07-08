const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 const makeImagesInList = (image) => {
 const {
   url,
alt,
  } = image;
 const liEl = document.createElement('li');
   liEl.insertAdjacentHTML("beforeend", `<img src =${url} alt =${alt} width ="500" height="300"></img>`);
   return liEl;
 };
 const ulInTask = document.querySelector('.gallery');
 const elements = images.map(makeImagesInList);
 ulInTask.append(...elements);


//  const ulInTask = document.querySelector('.gallery');
// const makeImagesInList = (image) => {
//    const { url, alt, } = image;
//   ulInTask.insertAdjacentHTML("beforeend", `<li><img src = ${url} alt = ${alt}></img></li>`);
//    return ulInTask;
// };
 
// console.log(makeImagesInList(images));

