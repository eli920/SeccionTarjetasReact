import React from 'react'
import Tarjeta from './Tarjeta'



const cervezas = [
    {
        nombreFantasia: "Hazer Tag",
        estilo: "Hazy IPA",
        ABV: "7.0 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2020/07/Hazer_Beer-Card-1-648x1030-1.jpg",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2020/07/Hazer_Pour-Card-2-1-648x1030-1.jpg"
    },
    {
        nombreFantasia: "IPA",
        estilo: "IPA",
        ABV: "7.0 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2020/04/IPA-WebsiteRendering-Can.png",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2020/04/IPA-Draft-Card-648x1030.jpg"
    },
    {
        nombreFantasia: "Mountain Standard",
        estilo: "Mountain Style IPA",
        ABV: "6.5 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2015/06/MST-WebsiteRendering-Can.png",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2015/06/Mtn-Std-Glass-Card-648x1030-1.jpg"
    },
    {
        nombreFantasia: "Good Behavior",
        estilo: "Crushable IPA",
        ABV: "4.0 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2021/07/GoodBehavior-WebsiteRendering-Can.png",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2021/07/Good-Behavior-Glass-Card-648x1030-1.jpg"
    },
    {
        nombreFantasia: "Myrcenarry",
        estilo: "Double IPA",
        ABV: "9.3 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2015/07/Myrcenary-WebsiteRendering-Can.png",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2015/07/Myrcenary-Glass-Cards-648x1030-1.jpg"
    },
    {
        nombreFantasia: "Drumroll",
        estilo: "Hazy Pale Ale",
        ABV: "5.3 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2016/04/Drumroll-WebsiteRendering-Can.png",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2016/04/Drumroll-Glass-Card-648x1030-1.jpg"
    },
    {
        nombreFantasia: "Rupture",
        estilo: "Fresh Grind Ipa",
        ABV: "6.0 ABV",
        imagenFront: "https://www.odellbrewing.com/wp-content/uploads/2017/08/Rupture-can-Cards-1.jpg",
        imagenBack: "https://www.odellbrewing.com/wp-content/uploads/2017/08/Rupture-glass-Cards-1.jpg"
    }
]

const ListaTarjetas = () => {
    return (
        <>
            <div className='lista-tarjetas'>
                {
                    cervezas.map((cerveza, index) => <Tarjeta Key={index} cerveza={cerveza} />)
                }
            </div>
        
            <style jsx>
            {`
                .lista-tarjetas {
                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    justify-items: center;
                    column-gap: 1.5em;  
                }

                @media screen and (max-width: 790px) {
                   
                    .lista-tarjetas {
                        grid-template-columns: repeat(2,1fr);
                  
                    }
                }
                  
                @media screen and (max-width: 480px) {
                
                    .lista-tarjetas {
                        grid-template-columns: repeat(1,1fr);
                    }
                }
                  
            `}
            </style>
        </>
    )
}
export default ListaTarjetas
