
import Link from 'next/link'
import styles from './detalhes.module.scss'
import { useState } from 'react';
import cardsData from '../api/cards'


export default function Detalhes() {
    const [selectedHairType, setSelectedHairType] = useState('1');
    


    const filteredCards = cardsData.filter(card => card.hair === selectedHairType || selectedHairType === '');
  return (
    <header>
        <div className={styles.container}>
            <h1>
                Encontre o penteado <p className={styles.colorTittle}>perfeito para você.</p>
            </h1>
            <ul className={styles.listButtons}>
                <li onClick={() => setSelectedHairType('1')}>Goddess Braids</li>
                <li onClick={() => setSelectedHairType('2')}>Box Braids</li>
                <li onClick={() => setSelectedHairType('3')}>Fulani Braids</li>
                <li onClick={() => setSelectedHairType('4')}>Knotless Braids</li>
                <li onClick={() => setSelectedHairType('5')}>Nagô</li>
                <li onClick={() => setSelectedHairType('6')}>Crocket Braids</li>
            </ul>
            <div className={` ${styles.containerCard}`}>
            {filteredCards.map((card, index) => (
        <div key={index} className="col-md-6">
          <div className={`card ${styles.card}`}>
            <img src={card.image} className="card-img-top" alt={`Imagem do Card ${index + 1}`} />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className="card-title">{card.title}</h5>
              <Link href={`/informacoes?id=${card.id}`} className="btn btn-primary">Ver Detalhes</Link>
            </div>
          </div>
        </div>
      ))}
    </div>      
        </div>
    </header>
      
  )
}