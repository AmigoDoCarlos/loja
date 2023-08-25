import { introPictures } from "@/contexts/pictures";
import Header from "@/components/Header";
import Slideshow from "@/components/Slideshow";
import './page.style.css';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='homeBackground'>
          <div className='homeContainer'>
              <Slideshow sequence={introPictures.left} className='slideShow' period='10s' invert={true}/>
              <p className='homeText'>
                  <span className='bold'>Alexander Paschoaletto</span>
                  <br/>Itens à venda
              </p>
              <Slideshow sequence={introPictures.right} className='slideShow' period='10s'/>
          </div>
        </div>
    </main>
  )
}