import { SiHtml5  , SiCss3  , SiJavascript  , SiSass  , SiReact , SiGithub, SiRedux   } from 'react-icons/si';
import { DiGit, DiNpm } from 'react-icons/di'
import { AiFillEye, AiOutlineGooglePlus } from 'react-icons/ai'
import { RiExternalLinkFill, RiFolderInfoFill } from 'react-icons/ri' 
import { VscDebugConsole, VscChromeClose } from 'react-icons/vsc';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

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
}