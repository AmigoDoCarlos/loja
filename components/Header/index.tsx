"use client"
import { useState } from 'react';
import { Menu } from 'react-feather';
import profileIcon from '@/assets/icons/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';
import './Header.style.css';

interface headerProps { }

export default function Header({}: headerProps){

    const [burgerExpanded, setBurgerExpanded] = useState(() => false);

    const headerTexts = <>
        <Link href='/products' className='headerText'>
            produtos
        </Link>
        <Link href='/terms' className='headerText'>
            termos
        </Link>
        <Link href='/about' className='headerText'>
            sobre o vendedor
        </Link>
    </>

    return (
        <div className='background' onClick={()=> setBurgerExpanded(false)}>
            <div className='headerContainer'>
                <div className='headerIconAndTitle'>
                    <Link href='/'>
                        <Image src={profileIcon} alt='ícone de perfil' className='profileIcon'/>
                    </Link>
                    <p className='headerTitle'>
                        Loja do <span className='bold'> thatLegoAlex </span>
                    </p>
                </div>
                <div className='headerTexts'>
                    {headerTexts}
                </div>
                <div className='burgerMenu'>
                    <Menu onClick={(e) => {
                        e.stopPropagation();
                        setBurgerExpanded((prev) => !prev)}
                    }/>
                    {burgerExpanded && (
                        <div className='burgerTexts'>
                          {headerTexts}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}