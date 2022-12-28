import './Footer.sass'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Made and update by - Islan Gomes</p>
      <p>All rights reserved, 2022. &copy;</p>
        <ul className='social-medias'>
          <li><AiFillGithub /></li>
          <li><AiFillLinkedin /></li>
          <li><BsFacebook /></li>
          <li><AiFillInstagram /></li>
          <li><AiFillYoutube /></li>
        </ul>
    </footer>
  )
}

export default Footer