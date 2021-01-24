import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, Button} from 'react-native';
import axios from 'axios';

function XkcdRandom(){
    const [comic,setComic] = useState({});
    const [szam,setSzam] = useState(2);
    const [fav,setFav] = useState(3);
    
    useEffect(() =>{
        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com//info.0.json')
        .then(Response => setComic(Response.data))
        .catch(error => console.log('error',error))
        console.log('end of useEffect');
    },[]);

    const NumberComic=()=> {
        axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${szam}/info.0.json`)
        .then(Response=>setComic(Response.data))
        .catch(error=>console.log('error',error));
    }
    const RandomComic=()=> {
    var randomNumber = Math.floor(Math.random() * 2400) + 1;
     axios. get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${randomNumber}/info.0.json`)
      .then(Response=>setComic(Response.data))
      .catch(error=>console.log('error',error));
  }


  if(!comic){
    return(<div>"error..."</div>)
  }

  return(<>
    <View style={{ flexDirection: "row" }}>
    <button onClick={RandomComic}>RandomComic</button>
    <TextInput label="Number" type="number" onChangeText={(num) => setSzam(parseInt(num) || 0)} />
    <button onClick={NumberComic}>SpecificComic</button>
    </View>
    <View>
    <Text style= {{textAlign: "center",margin:10}}>{comic.title}</Text>
    <Image source={comic.img } style = {{height: 300, resizeMode : 'center', margin: 5 }} />
    <Text style= {{textAlign: "center",margin:10}}>{comic.alt}</Text>
    </View>
    
    </>
  )
}

export default XkcdRandom;
