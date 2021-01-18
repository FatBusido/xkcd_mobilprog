import React, {useState, useEffect} from 'react';
import {View,Text, Image, Button} from 'react-native';
import axios from 'axios';

function app(){
    const [comic,setComic] = useState(null);
    useEffect(() =>{//Nem renderel minden kérésnél
        const promise=axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json');
        promise.then(Response =>setComic(Response.data))
        .catch(error => console.log('error',error))
        console.log('end of useEffect');

    },[]);
    const NumberComic=(number)=> {//Megadott számú comic lekérése
        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/$(number)/info.0.json')
        .then(Response=>setComic(Response.data))
        .catch(error=>console.log('error',error));
    }
    const RandomComic=()=> {//Random comics
    const min = 1;
    const max = 2400;
    const rand = min + Math.random() * (max - min);
      axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/$(rand)/info.0.json')
      .then(Response=>setComic(Response.data))
      .catch(error=>console.log('error',error));
  }
}
if(!comic){
    return<div>"error..."</div>
}


//Favorithoz adás----
const [comicNum, comicTittle]  = useState([
    { id : "0", tittle : "Teszt"},
  ]);
const addElement = () => {
    var newArray = [...comicNum , {id : comic.number, tittle: comic.tittle + (idx+1) }];
    incr(idx + 1);
    setExampleState(newArray);
    comicTittle(newArray);
  }
//Favorithoz adás vége---
return{ //<>
    <Text comic.tittle  />;
    <Image
    style={styles.tinyLogo}
    source={{ comic.Image
    }}
  />
  <button tittle="SetFavorite" onPress={addElement}/> 
  <button tittle="RandomComic" onPress={RandomComic}/> 
  <TextField id="standard-basic" label="Number" />
  <button tittle="SetFavorite" onPress={NumberComic()}/>



};

export default app;
