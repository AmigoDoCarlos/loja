import { bio, contacts } from "@/contexts/bio";
import Header from "@/components/Header";
import profileImg2 from '@/assets/icons/profile2.png';
import Image from "next/image";
import Link from "next/link";
import './Page.style.css';

export default function About() {
  return (
    <main>
      <Header/>
      <div className='bioBackground'>
        <div className='bioContainer'>
            <div className='bioLeftSide'>
              <div className='bioContact'>
                <Image src={profileImg2} alt='foto de perfil' className='bioProfileImg' />
                <div className='bioButtons'>
                  {
                    contacts.map((contact, index) => (
                      <Link key={index} href={contact.url} className='bioButton'>{contact.title}</Link>
                    ))
                  }
                </div>
              </div>            
            </div>
            <div className='bioContent'>
                <div className='bioTexts'>
                    <p className='bioTitle bold'>
                      {bio.title}
                    </p>
                    <div className='bioDescription'>
                      {bio.description}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}