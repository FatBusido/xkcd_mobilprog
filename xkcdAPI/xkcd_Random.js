import React, {useState, useEffect} from 'react';
import {View,Text, Image, Button} from 'react-native';
import axios from 'axios';

function app(){
    var favorits=[];
    const [comic,setComic] = useState(null);
    useEffect(() =>{//Nem renderel minden kérésnél
        const promise=axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json');
        promise.then(Response =>setComic(Response.data))
        .catch(error => console.log('error',error))
        console.log('end of useEffect');

    },[]);
    const NumberComic=(number)=> {
        
        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/$(number)/info.0.json')
        .then(Response=>setComic(Response.data))
        .catch(error=>console.log('error',error));
    }
}
if(!comic){
    return<div>"loading..."</div>
}


//Favorithoz adás----
const [comicNum, comicTittle]  = useState([
    { id : "0", tittle : "Teszt"},
  ]);
const addElement = () => {
    var newArray = [...comicNum , {id : idx, text: "tittle " + (idx+1) }];
    incr(idx + 1);
    console.log(comicNum.length);
    setExampleState(newArray);
    comicTittle(newArray);
  }
//Favorithoz adás vége---
return{ //<>
    <Text> comic.tittle  </Text>;
    <Image
    style={styles.tinyLogo}
    source={{ comic.Image
    }}
  />
  <button tittle="SetFavorite" onPress={addElement}/> 



};

export default app;
