import Item from "./components/Item";
import { items } from "./items";
import './page.style.css';

export default function Home() {
  return (
    <main>
      <div className='itemsContainer'>
        {items.map((itemProps, index) => 
          <Item
            {...itemProps}
            key={index}
          />
        )}
      </div>
    </main>
  )
}
