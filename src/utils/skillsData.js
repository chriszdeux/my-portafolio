import React from 'react';
import { icons } from './icons';

const { 
  html_icon,
  css_icon,
  javascript_icon,
  sass_icon,
  react_icon,
  github_icon,
  redux_icon,
  npm_icon, 
  debbug_icon,
  git_icon } = icons
export const skillsData = [
  {
    id: 1,
    icon: html_icon,
    name: 'HTML',
    description: `
      HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
    `,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    color: '#d84b24',
    delay: '1s'
  },

  {
    id: 2,
    icon: css_icon,
    name: 'CSS',
    description: `
      Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
    `,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    color: '#2B6CAD',
    delay: '1.3s'
  },

  {
    id: 3,
    icon: javascript_icon,
    name: 'Javascript',
    description: `
      JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
    `,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#ffe047',
    delay: '1.6s'
  },

  {
    id: 4,
    icon: sass_icon,
    name: 'Sass',
    description: `
      Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects. 
    `,
    url: 'https://sass-lang.com/documentation',
    color: '#C26191',
    delay: '1.9s'
  },

  {
    id: 5,
    icon: react_icon,
    name: 'React Js',
    description: `
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
    `,
    url: 'https://reactjs.org/docs/getting-started.html',
    color: '#58DAFB',
    delay: '2.2s'
  },

  {
    id: 6,
    icon: redux_icon,
    name: 'React Redux',
    description: `
      React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.
    `,
    url: 'https://react-redux.js.org/',
    color: '#764ABC',
    delay: '2.5s'
  },


  {
    id: 7,
    icon: git_icon,
    name: 'Git',
    description: `
      Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
    `,
    url: 'https://git-scm.com/',
    color: '#d84b24',
    delay: '2.8s'
  },

  {
    id: 8,
    icon: github_icon,
    name: 'Github',
    description: `
      GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.
    `,
    url: 'https://github.com/',
    color: '#272727',
    delay: '3.1s'
  },


  {
    id: 9,
    icon: npm_icon,
    name: 'NPM',
    description: `
      We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.

    `,
    url: 'https://www.npmjs.com/',
    color: '#C13534',
    delay: '3.4s'
  },

  {
    id: 10,
    icon: debbug_icon,
    name: 'Dev-Tools',
    description: `
    Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.
    `,
    url: 'https://developer.chrome.com/docs/devtools/',
    color: '#3A92FF',
    delay: '3.7s'
  },


]