import React from 'react'
import { SiHtml5  , SiCss3  , SiJavascript  , SiSass  , SiReact , SiGithub, SiRedux, SiExpress, SiMongodb, SiTypescript, SiJest   } from 'react-icons/si';
import { DiGit, DiNpm } from 'react-icons/di'
import { AiFillEye, AiFillInstagram, AiOutlineGooglePlus, AiOutlineLinkedin, AiOutlineLoading3Quarters, AiOutlineMail } from 'react-icons/ai'
import { RiExternalLinkFill, RiFolderInfoFill } from 'react-icons/ri' 
import { VscDebugConsole, VscChromeClose } from 'react-icons/vsc';
import { IoChevronBackOutline, IoChevronForwardOutline, IoChevronUpOutline } from 'react-icons/io5'
import { CgMenuRight } from 'react-icons/cg';
import { ImImages } from 'react-icons/im'
import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from 'react-icons/md'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import { GrNode } from 'react-icons/gr'

export const icons = {
  html_icon: <SiHtml5 className='icon'/>,
  css_icon: <SiCss3 className='icon'/>,
  javascript_icon: <SiJavascript className='icon'/>,
  sass_icon: <SiSass className='icon'/>,
  react_icon: <SiReact className='icon'/>,
  git_icon: <DiGit className='icon'/>,
  github_icon: <SiGithub className='icon'/>,
  redux_icon: <SiRedux className='icon'/>,
  npm_icon: <DiNpm className='icon'/>,
  live_icon: <AiFillEye className='icon'/>,
  link_icon: <RiExternalLinkFill className='icon'/>,
  folder_icon: <RiFolderInfoFill className='icon'/>,
  debbug_icon: <VscDebugConsole className='icon'/>,
  google_icon: <AiOutlineGooglePlus className='icon'/>,
  close_icon: <VscChromeClose className='icon'/>,
  left_icon: <IoChevronBackOutline className='icon'/>,
  right_icon: <IoChevronForwardOutline className='icon'/>,
  menu_icon: <CgMenuRight className='icon'/>,
  mail_icon: <MdOutlineMailOutline className='icon'/>,
  mail_sent_icon: <MdOutlineMarkEmailRead className='icon'/>,
  linkedin_icon: <AiOutlineLinkedin className='icon'/>,
  instagram_icon: <AiFillInstagram className='icon'/>,
  top_icon: <IoChevronUpOutline className='icon'/>,
  gallery_icon: <ImImages className='icon'/>,
  loading_icon: <AiOutlineLoading3Quarters className='icon'/>,
  download_icon: <BsFillCloudDownloadFill className='icon'/>,
  node_icon: <GrNode className='icon'/>,
  express_icon: <SiExpress className='icon'/>,
  mongo_icon: <SiMongodb className='icon'/>,
  typescript_icon: <SiTypescript className='icon'/>,
  jest_icon: <SiJest className='icon'/>,

  // gallery_icon: <ImImages className='icon'/>,
}