"use client"

import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { itemProps } from '@/contexts/items';
import { colors } from '@/colors';
import Image from 'next/image';
import gsap from 'gsap';
import './Item.style.css';

export default function Item({title, labels, price, images, description, obs, sold}: itemProps){

    const imgSources = useRef(images).current;
    const imgRef = useRef(null);
    const zoomImgRef = useRef(null);
    const [url, setUrl] = useState(() => 'https://web.whatsapp.com/');
    const [zoom, setZoom] = useState<boolean>(() => false);
    const [observations, setObservations] = useState<boolean>(() => false);
    const [srcIndex, setSrcIndex] = useState<number>(() => 0);
    const [nextIndex, setNextIndex] = useState<number>(() => 0);

    const welcomeText = encodeURIComponent(`Olá Alex! Eu dei uma olhada nos seus itens à venda e gostaria de comprar o ${title}!`);

    const changeImgSrc = (nextIndex: number) => {
        setSrcIndex((prev) => {
            const next = prev + nextIndex;
            if(next < 0) return (imgSources.length - 1);
            if(next === imgSources.length) return 0;
            return next;
        });
    }

    useEffect(() => {
        const isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
        if(isMobile){
            setUrl('whatsapp://');
        }
    }, []);

    useEffect(() => {
        if(nextIndex !== 0){
            gsap.timeline().to([imgRef.current, zoomImgRef.current], {
                x: `${-100 * nextIndex}%`,
                opacity: 0,
                duration: 0.25,
            }).call(() => (
                changeImgSrc(nextIndex)
            )).to([imgRef.current, zoomImgRef.current], {
                x: `${100 * nextIndex}%`,
                opacity: 0,
                duration: 0,
            }).to([imgRef.current, zoomImgRef.current], {
                x: '0%',
                opacity: 1,
                duration: 0.25,
            }).call(() => (
                setNextIndex(0)
            ))
        }
    }, [nextIndex]);

    return (
        <>
            <div className="container">
                <div className='leftSide'>
                    <div className='imageContainer' style={{opacity: zoom? 0.1 : 1}}>
                        <Image
                            ref={imgRef}
                            src={imgSources[srcIndex]}
                            alt={`imagem ${srcIndex + 1} de ${title}`}
                            className='image'
                            onClick={() => setZoom(true)}
                            style={{filter: sold? 'grayscale(100%)': 'none'}}
                        />
                        {sold && (
                            <div className='soldLabel bold'>
                                Vendido!
                            </div>
                        )}
                    </div>
                    <div className='imageButtons'>
                        <button className='imageButton white' onClick={() => setNextIndex(-1)}>
                            <ChevronLeft width={20} color={'black'}/>
                        </button>
                        <button className='imageButton white' onClick={() => setNextIndex(1)}>
                            <ChevronRight width={20} color={'black'}/>
                        </button>
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='textContainer'>
                        <div className='header'>
                            <p className='title'>
                                {title}
                            </p>
                            <div className='labelsContainer'>
                                {labels.map((label, index) => 
                                    <p
                                        className='label'
                                        key={index}
                                        style={{
                                            background: label.backgroundColor,
                                            color: (label.color)? label.color : 'white',
                                        }}
                                    >
                                        {label.text}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='textButtonsContainer'>
                            {obs && (
                                <>        
                                    <button className='textButton' style={{border: `1px solid ${(!observations)? colors.blue : 'white'}`}} onClick={() => setObservations(false)}>
                                        descrição
                                    </button>
                                    <button className='textButton' style={{border: `1px solid ${(observations)? colors.blue : 'white'}`}} onClick={() => setObservations(true)}>
                                        observações
                                    </button>
                                </>
                            )}
                        </div>

                        <p className='description'>
                            {observations? obs : description}
                        </p>
                    </div>
                    
                    <div className='priceContainer'>
                        <p className='price'>
                            R$ {price}
                        </p>
                        <a target="_blank" href={`${url}send?phone=+5519992351128&text=${welcomeText}`}>
                            <button className='buyButton' disabled={sold} style={{
                                opacity: sold? 0.4 : 1
                            }}>
                                comprar
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {zoom && (
                <div className='zoomBackground' onClick={() => setZoom(false)}>
                    <div className='zoomImageAndButtonContainer' onClick={(e) => e.stopPropagation()}>
                        <Image
                            ref={zoomImgRef}
                            src={imgSources[srcIndex]}
                            alt={`zoom sobre imagem ${srcIndex + 1} de ${title}`}
                            className='zoomImage'
                        />
                        <div className='zoomButtons'>
                            <button className='imageButton red' onClick={() => setZoom(false)}>
                                <X width={20} color={'black'}/>
                            </button>
                            <button className='imageButton white' onClick={() => setNextIndex(-1)}>
                                <ChevronLeft width={20} color={'black'}/>
                            </button>
                            <button className='imageButton white' onClick={() => setNextIndex(1)}>
                                <ChevronRight width={20} color={'black'}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}