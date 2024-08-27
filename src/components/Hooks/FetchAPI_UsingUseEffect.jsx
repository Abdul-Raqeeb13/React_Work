import { useEffect, useState } from "react";
import axios from "axios";
import '../Hooks/FetchAPI_UsingUseEffect.css'


function StoreAPIcalling() {
    let [category, setCategory] = useState([])
    let [cateProducts, setCateProducts] = useState()
    let [products, setProducts] = useState([])

    // categories api calling
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://fakestoreapi.com/products/categories',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    // categories products api calling
    useEffect(() => {
        if (cateProducts != null || cateProducts != "") {
            
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://fakestoreapi.com/products/category/${cateProducts}`,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    }, [cateProducts])


    return (
        <>
        <h1>Fetch API usinf Use effect</h1>
            <div style={{ textAlign: "center" }}>

                <h1>Ecom Website</h1>
                {
                    category.map((v, i) => {
                        return (
                            <button className="a" onClick={() => setCateProducts(v)} key={i}>{v}</button>
                        )
                    })
                }

                <br />
                <div class="ProductContainer">
                
                {
                    products.map((v, i) => {
                        return (
                            <div key={i} className="Productcard">
                                <h4>{v.title.toString().substring(0,20)}</h4>
                                <img className="image" src={v.image}/>
                               </div>
                          
                        
                        )
                    })
                }
  </div>

            </div>

        </>
    )
}

export default StoreAPIcalling