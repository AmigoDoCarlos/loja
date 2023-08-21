import { itemProps } from '@/app/items';
import Image from 'next/image';
import './Item.style.css';

export default function Item({title, labels, price, images, description, obs}: itemProps){
    return (
        <div className="container">
            <div className='leftSide'>
                {images.map((img, index) => 
                    <Image
                        src={img}
                        alt={`imagem ${index + 1} de ${title}`}
                        key={index}
                        className='image'
                    />
                )}
            </div>
            <div className='rightSide'>
                <div className='textContainer'>
                    <div className='header'>
                        <p className='title'>
                            {title}
                        </p>
                        {labels.map((label, index) => 
                            <div
                                className='label'
                                key={index}
                                style={{
                                    background: label.backgroundColor,
                                    color: (label.color)? label.color : 'white',
                                }}
                            >
                                {label.text}
                            </div>
                        )}
                    </div>
                    
                    <p className='description'>
                        {description}
                    </p>
                </div>
                
                <div className='priceContainer'>
                    <p className='price'>
                        R$ {price}
                    </p>
                    <button className='buyButton'>
                        comprar
                    </button>
                </div>
            </div>
        </div>
    )
}