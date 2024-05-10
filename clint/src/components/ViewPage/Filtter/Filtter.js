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
          <img alt='Pizza' src='https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1'/>
          <h2>Pizza</h2>
        </div>
        <div className='Filtter_121' onClick={() => handleCategoryChange('Biryani')}>
        <img alt='Pizza' src='https://img-global.cpcdn.com/recipes/d80b825db82e1dfe/680x482cq70/sindhi-chicken-biryani-recipe-main-photo.jpg'/>
        <h2>Biryani</h2>
        </div>
        <div className='Filtter_121'onClick={() => handleCategoryChange('Burger')}>
        <img alt='Pizza' src='https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/Popl_burger.jpg'/>
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
