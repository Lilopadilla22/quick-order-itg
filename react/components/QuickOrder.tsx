import React, { useEffect, useState } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo';
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'

import { useCssHandles } from "vtex.css-handles";
import "./styles.css";

type ProductResponse = {
  product: {
    productId: string;
    productName: string;
  }
};

const QuickOrder = () => {
  const [inputText, setInputText] = useState("");
  const [productSkuToSearch, setProductSkuToSearch] = useState("");

  const [getProductData, { data: selectedProductResponse }] = useLazyQuery<ProductResponse>(GET_PRODUCT);
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }


  useEffect(() => {
    console.log("mi producto: ", selectedProductResponse, productSkuToSearch)
    if (selectedProductResponse) {
      const { productId } = selectedProductResponse.product

      let skuId = parseInt(productId)

      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    }
  }, [selectedProductResponse])

  const getProductToAdd = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
  }

  const searchProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputText) {
      alert("Ingresa un valor")
    } else {
      console.log("estamos buscando", inputText)
      setProductSkuToSearch(inputText)
      getProductToAdd()
    }
  }

  const CSS_HANDLES = [
    "container__form__quick",
    "container__title__quick",
    "label__form__quick",
    "input__form__quick",
    "container__button__quick",
    "input__button__quick"
  ]

  const handles = useCssHandles(CSS_HANDLES)


  return (
    <div className={handles["container__form__quick"]}>
      <h2 className={handles["container__title__quick"]}>Realiza tu compra YA!</h2>
      <form onSubmit={searchProduct}>
        <div>
          <label htmlFor="sku" className={handles["label__form__quick"]}>Ingresa tu SKU</label>
          <input id="sku" type="text" className={handles["input__form__quick"]} onChange={handleChange} />
        </div>
        <div className={handles["container__button__quick"]} >
          <input type="submit" value="COMPRAR" className={handles["input__button__quick"]} />
        </div>

      </form>
    </div>
  )
}



export default QuickOrder
