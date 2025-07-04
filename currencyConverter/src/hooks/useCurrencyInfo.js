// import { useEffect, useState } from "react";


// const [data, setData] = useState('');
// function useCurrencyInfo(currency) {
//   useEffect(() => {
//     fetch(`https://open.er-api.com/v6/latest/${currency}`)
//       .then((res) => {
//         res.json();
//       })
//       .then((res) => setData(res[currency]));
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;