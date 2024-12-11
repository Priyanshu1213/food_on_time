import React from 'react'
import "./Filtter.css"

export default function Filtter(props) {


  const handleCategoryChange = (category) => {
    props.parentCallback(category);
    
  };
  
  

  return (
   <>
    <div className='Filtter_1'>
        <div className='Filtter_11'>
        <h1>Eat What Makes you Happy</h1>
        </div>
        <div className='Filtter_12'>
        <div className='Filtter_121' onClick={() => handleCategoryChange('Pizza')}>
          <img alt='Pizza' src='https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg'/>
          <h2>Pizza</h2>
        </div>
        <div className='Filtter_121' onClick={() => handleCategoryChange('Biryani')}>
        <img alt='Pizza' src='https://www.freshtohome.com/blog/wp-content/uploads/2024/08/Biryani.jpeg'/>
        <h2>Biryani</h2>
        </div>
        <div className='Filtter_121'onClick={() => handleCategoryChange('Burger')}>
        <img alt='Pizza' src='https://static.vecteezy.com/system/resources/thumbnails/023/558/535/small_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg'/>
          <h2>Burger</h2>
        </div>
        <div className='Filtter_121'onClick={() => handleCategoryChange('Chicken')}>
          <img alt='Pizza' src='http://www.flavorquotient.com/wp-content/uploads/2016/08/Kadai-Chicken-FQ-5-1-of-1.jpg'/>
          <h2>Chicken</h2>
          </div>
        <div className='Filtter_121'onClick={() => handleCategoryChange('Thali')}>
        <img alt='Pizza' src='https://lh3.googleusercontent.com/asLohKLq0Q6JYKK6Crx9dNYY7bDhez4ePuUXUHJnuJbpifV2hD7HMrZ1XZekmVc9IXXZbyga6OY8G-DRUg51lCWXIQ=w500-rw'/>
          <h2>Thali</h2>
        </div>
        </div>
    </div>
   </>
  )
}
