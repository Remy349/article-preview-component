import React from 'react'

export const ShareLink = (props) => {
  return (
    <li className='article__card-content_share_links_item'>
      <a href='#' className='article__card-content_share_links_link'>
        <img
          className='article__card-content_share_links_icon'
          src={props.socialIcon}
          alt={props.socialImgAlt}
        />
      </a>
    </li>
  )
}
