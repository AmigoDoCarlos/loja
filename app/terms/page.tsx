"use client"
import { useRef, useState } from "react";
import { termType, allTerms } from "@/contexts/terms";
import auxImg from '@/assets/images/general/skyline.jpg'; 
import Header from "@/components/Header";
import Image from "next/image";
import './Terms.style.css';


export default function Terms() {

  const terms: termType[] = useRef(allTerms).current; 
  const [ selectedTerm, setSelectedTerm ] = useState(() => 0);

  return (
    <main>
      <Header/>
      <div className='termsBackground'>
        <div className='termsContainer'>
            <Image src={auxImg} alt='' className='termsImage'/>
            <div className='termsContent'>
                <div className='termsButtons'>
                    {terms.map((term, index) => 
                        <button className={`termsButton ${(terms[selectedTerm].title === term.title)? 'selected' : 'unselected'}`} onClick={() => setSelectedTerm(index)}>
                            {term.title}
                        </button>
                    )}
                </div>
                <div className='termsTexts'>
                    <p className='termTitle bold'>
                        {terms[selectedTerm].title}
                    </p>
                    <div className='termDescription'>
                        {terms[selectedTerm].description}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}