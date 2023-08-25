import { items } from "@/contexts/items";
import Header from "@/components/Header";
import Item from "@/components/Item";
import './products.style.css';

export default function Products() {
  return (
    <main>
      <Header/>
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