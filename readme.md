![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-WEBGL-and-Animations?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-WEBGL-and-Animations?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-WEBGL-and-Animations?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-WEBGL-and-Animations?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-WEBGL-and-Animations?color=yellow&style=for-the-badge)


***

# ✔- ALL ABOUT ANIMATIONS and WEBGL - ✔

<img align="center" alt="Canvas Picture" src="https://miro.medium.com/max/1084/1*tdI-dKyJX8FVsh8QiwZNVQ.png" /> <br>

This "All-about-WEBGL-and-Animations"-repository catches up its focus on all the animations and WEBGL I did (and used) during my projects through the years as a **SAE-Web Development** student with exercise lessons every week as well as tutorial videos on _Youtube_.
Direct Link to the place where I'm studying are you going to find here if you click this [LINK](https://www.sae.edu/che/de?utm_source=PS01&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLVIaD_aUt7y4brT7tqMW9o7tskgb1vjQqJFkzQwkwdN_40_Ls7MgAEaAtXxEALw_wcB)

{💒} => [HERE](https://threejs.org/examples/#webgl_animation_keyframes) are some crazy examples to demonstrate of what WEBGL ANIMATION with Three.js can actually do!
<br />
<br />


***
## Folder Directory✅
***

| Topic | Content  | 
|:--------------| :--------------|
| 01_GSAP_Animations |  00_FromToMeetsTimelines / 01_KeyframeAnimation / 03_ControlAnimationWithTimelines / 04_PulsingStraggerAnimation / 05_OnthelineStaggerAnimation / 06_SAEBannerAnimation / 07_NavFooterSidebarAnimation / 08_ScrollmagicWithParallax / 09_ScrollmagicGeneralTemplate |
| 02_GSAP_BannerAnimation |  Greensock GSAP Banner Animation with movements, sound and direct link to the JDM World |
| 03_RaceProject |  A complex 3D Racing Game  |
| 04_WebGL3DRendering | Tried to 3D-render a car which will be used in topic 03  |
| InfoWEBGL |  Some German Textnotes  |

⚫🔴🟡 IMPORTANT: Comments in each file are commented in german⚫🔴🟡
<br />
<br />

***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />

## &nbsp;- We used TYPESCRIPT: What is important? ✅
***

WHAT IS TYPESCRIPT?
* TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.
<br />

WHY DID I USE TYPESCRIPT?
* TypeScript (TS for short) is a superset of JavaScript. That means TS is also an implementation of ECMAScript, but extends JavaScript with additional "features". This allows variables and methods to be typed, whereupon certain errors can also be detected here already at translation time. Any JavaScript code will work in TypeScript, but not all TypeScript code will work in JavaScript. Thats why we need to COMPILE IT:
<br />

HOW CAN WE COMPILE?
* Each time before we start workin on the project: ``ctrl + shift + b`` > "watch tsc" in your coding editor such as VSC


<br />
<br />

***
## Technologies and Installation (Stored at core > lib-folder) ✅
***

(TO SIMPLIFY) - JQUERY - INSTALLATION:
* https://cdnjs.com/libraries/jquery (if you would like to use JQUERY in your project)
<br />

(TO MAKE SOUND) - HOWLER.JS - INSTALLATION:
* https://howlerjs.com/ (if you would like to use HOWLER.JS in your project)
* Howler.js is the common JavaScript Audio library for the modern web, easy and reliable across all platforms
<br />

(TO DISPLAY 3D CONTENT) - THREE.JS - INSTALLATION:
* https://threejs.org/docs/index.html#manual/en/introduction/Installation (if you install it via NPM, make sure you've installed the Node Package Manager first)
* Three.js is a cross-browser JavaScript (FRAMEWORK) and application programming interface (API) that uses WebGL to create and display animated 3D computer graphics in a web browser. The source code is hosted in a repository on GitHub and has an own website.
* Three. js allows the creation of graphical processing unit (GPU)-accelerated 3D animations using the JavaScript language as part of a website without relying on proprietary browser plugins. This is possible due to the advent of WebGL, a graphics API created specifically for the web (GPU = Graphic Processing Unit, used for simple logic processes such as rendering the mouse cursor / CPU = Central Processing Unit, used for complex calculations).
* Three.js is the world's most popular JavaScript framework for displaying 3D content on the web
* NOTE: Three.js has also an EDITOR to pre-build 3D models and generate code out of it
* SIDE NOTE: Another JS LIBRARY which uses WEBGL to create and display animated 3D computer graphics in a web browser is BABYLON.JS
<br />

(TO ANIMATE) - GSAP - INSTALLATION:
* https://greensock.com/docs/v3/Installation (if you would like to use GSAP in your project)
* GSAP is a robust JavaScript toolset that turns developers into animation superheroes. Build high-performance animations that work in every major browser
* You can eiter download it from the website, use a CDN, NPM, clone the repository from Github or CodePen

<br />
<br />

***

## &nbsp;WEBGL / GSAP / SCROLLMAGIC - Useful Assistance ✅
***

_**WEBGL (Web Graphics Library):**_

* (FIRST make sure your browser is supporting WEBGL. You can test it [HERE](https://get.webgl.org/))
-  is a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML ``<canvas>`` elements. This conformance makes it possible for the API to take advantage of hardware graphics acceleration provided by the user's device. The ``<canvas>`` element is also used by the Canvas API to do 2D graphics on web pages
- is very inteliigent as an API, because this is an extension from the browser and not an external library
- is specified in 3D dimensional space and thus has X, Y, Z axis

_**Usual 3D dataformats:**_

- .OBJ 
- .FBX
- .GLTF
- .GLB

_**GSAP:**_

* is a super robust Javascript toolset to create amazing SVG animations, can be used in three.js powered WEBGL projects to animate any object in a scene (with pixi.js for example) or control performant canvas animations (with ease.js for example)
* works with tweens and timelines. Get more infos [HERE](https://greensock.com/docs/v3/GSAP) 

_**Scrollmagic:**_

* is a Javascript library for magical scroll interactions. ScrollMagic helps you to easily react to the user's current scroll position.
* Official Website over [HERE](https://scrollmagic.io/) 
<br />
<br />

***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 0 | 0 | 0 |



