import { Button } from '@nextui-org/react'
import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    oferta: any,
    price: number,
    priceDiscount: number,
    
}
export const ListOferta: FC<Props> = ({ oferta }) => {
  return (
    <div className={`col-md-${oferta.md}`} style={{ backgroundColor: 'danger', border: '1px solid #111'}} >
      <img src={oferta.urlImgArticle} alt="btn btn-danger" />
        <p>
        <b>{oferta.title}</b>
        </p>
        <p>
        {oferta.description}
        </p>
        <p>
        {oferta.price}
        </p>
        <p>
        {oferta.priceDiscount}
        </p>
       
        <Button type="button" className="btn btn-danger">
          IR A LA OFERTA
        </Button>
    </div>
  )
}
