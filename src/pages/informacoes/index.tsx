import React, { useState, useEffect } from 'react';
import styles from './informacoes.module.scss';
import Link from 'next/link';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useRouter } from 'next/router';
import image from '../api/photos'

export default function Informacoes() {
  const router = useRouter();
  const { id } = router.query;
  


  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (id) {
      const imagemEncontrada = image.find(imagem => imagem.id === id);
      if (imagemEncontrada) {
        setMainImage(imagemEncontrada.fotos[0]);
      }
    }
  }, [id]);

  if (!mainImage) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Link href="/detalhes"><IoIosArrowDropleftCircle className={styles.back} /></Link>
      <div className={styles.imageGallery}>
        <div className={styles.mainImage}>
          <img src={mainImage} alt="Main" />
        </div>
        <div className={styles.thumbnails}>
        {image.map((imagem, index) => {
            
            if (imagem.id === id) {
            return imagem.fotos.map((foto, fotoIndex) => (
                <div key={fotoIndex} className={styles.thumbnail}>
                <img src={foto} alt={`Thumbnail ${index}-${fotoIndex}`} onClick={() => setMainImage(foto)} />
                </div>
            ));
            } else {
            return null; 
            }
        })}
        </div>
      </div>
      <section className={styles.details}>
        <h1>Ashton Caned Teak Accent Chair</h1>
        <p>Details</p>
        <a>Bring a sense of the outdoors inside with this reclaimed teak wood accent chair. Featuring a caned back and a sculptural silhouette that showcases its natural grain patterns, it's well-suited for sun rooms, reading nooks, and minimalist living spaces.</a>
      </section>
    </div>
  );
}
