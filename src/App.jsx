import React, { useState } from 'react'
import { ShareLink } from './components/ShareLink'

import drawersImg from './images/drawers.jpg'
import michelleAvatar from './images/avatar-michelle.jpg'

import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pinterestIcon from './images/icon-pinterest.svg'

const App = () => {
  const [showShare, setShowShare] = useState(false)

  const handleShareBtn = () => {
    !showShare ? setShowShare(true) : setShowShare(false)
  }

  return (
    <main className='article'>
      <article className='article__card'>
        <img className='article__card-img' src={drawersImg} alt='' />
        <div className='article__card-content'>
          <h1 className='article__card-content_title'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className='article__card-content_desc'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='article__card-content_container'>
            <figure className='article__card-content_info'>
              <img
                className='article__card-content_info_img'
                src={michelleAvatar}
                alt=''
              />
              <figcaption>
                <p className='article__card-content_info_author'>
                  Michelle Appleton
                </p>
                <span className='article__card-content_info_date'>
                  28 Jun 2020
                </span>
              </figcaption>
            </figure>
            <div className='article__card-content_share'>
              <button
                onClick={() => handleShareBtn()}
                className={
                  showShare
                    ? 'article__card-content_share_btn active-state-btn'
                    : 'article__card-content_share_btn'
                }
                type='button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='article__card-content_share_btn_icon'
                  width='15'
                  height='13'
                >
                  <path
                    fill='#6E8098'
                    className='article__card-content_share_btn_path'
                    d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
                  />
                </svg>
              </button>
              <div
                className={
                  showShare
                    ? 'article__card-content_share_links active-state'
                    : 'article__card-content_share_links'
                }
              >
                <p className='article__card-content_share_links_text'>Share</p>
                <ul className='article__card-content_share_links_list'>
                  <ShareLink
                    socialIcon={facebookIcon}
                    socialImgAlt='Facebook Icon'
                  />
                  <ShareLink
                    socialIcon={twitterIcon}
                    socialImgAlt='Twitter Icon'
                  />
                  <ShareLink
                    socialIcon={pinterestIcon}
                    socialImgAlt='Pinterest Icon'
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default App
