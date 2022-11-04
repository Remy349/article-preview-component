import React from 'react'

import drawersImg from './images/drawers.jpg'
import michelleAvatar from './images/avatar-michelle.jpg'
import iconShare from './images/icon-share.svg'

const App = () => {
  return (
    <main className='article'>
      <article className='article__card'>
        <img className='article__card-img' src={drawersImg} alt='' />
        <div className='article__card-content'>
          <h2 className='article__card-content_title'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className='article__card-content_desc'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='article__card-content_container'>
            <div className='article__card-content_info'>
              <img
                className='article__card-content_info_img'
                src={michelleAvatar}
                alt=''
              />
              <div>
                <p className='article__card-content_info_author'>
                  Michelle Appleton
                </p>
                <span className='article__card-content_info_date'>
                  28 Jun 2020
                </span>
              </div>
            </div>
            <div className='article__card-content_share'>
              <button className='article__card-content_share_btn'>
                <img
                  className='article__card-content_share_btn_icon'
                  src={iconShare}
                  alt=''
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default App
