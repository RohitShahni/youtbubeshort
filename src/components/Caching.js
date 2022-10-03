import React from 'react'

const Caching = () => {
    const cache = {};

    async function fetchData(url) {
        if(cache.hasOwnProperty(url)){
            return cache[url];
        }
 

    const data = await fetch(url).then((res) => res.json());
    cache[url] = data;
    return data;

    }

    ( async function(){
            await fetchData('https://xxxxxxxxxxxxxxxxxxapilink');
            await fetchData('https://xxxxxxxxxxxxxxxxxxapilink');
            await fetchData('https://xxxxxxxxxxxxxxxxxxapilink');
    })();
    

  return (
    <div>

    </div>
  )
}

export default Caching;