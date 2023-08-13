******* NextJS Folder Structure Details


1. npx create-next-app
2. npm run dev
3. npm i next-nprogress-bar
4. usePathname();
5. searchParams
6. useSearchParams()
7. useRouter()



***app directory: vitor jekono name e folder create korle ta  page hisebe /route hobe, and oi 
page folder er vitor must be page.js file create korte hobe tahole ta automaticaly /route hisebe 
kaj kore. page sara onno kisu file name dile kaj korbe na. ata nextJS er convention.
example- about/page.js, product/page.js, contact/page.js etc. 

****page.js : file default vabe home page hisebe kaj kore.

***layout.js: ata hosse root page , er vitor application er all page children parameter er 
vitor diye html body te render/execute/run hoi. so, layout.js file hosse mother page, er vitor
kono file/page import korle all page e ta access pabe.


***public directory: vitor static asset rakha jai image,audio,video, pdf file etc ja sorasori 
route folder er jekono page e use kora jai. exaple- <img src="/images/1.jpg" alt="" />


***globals.css: e entire the application a css likhar jonno use hoi. ata layout.js file e import 
korte hoi ja default vabe import korai thake.

***page.module.css: specific kono akta module/component ba folder page ar jonno css korar jonno
ata use hoi. je page e use hobe se page akta nam dhore import korte hoi and jsx vitor {nam.css}
likhte hoi. example- import styles from '../page.module.css' ; < className={styles.myText}></
h1>This is Product page</h1>


***Client side rendering and Server side rendering: Client means user er je browser, browser er 
vitor jokhon kono kisu process hosse, kono kisu execution hosse tokhon setai kei boli client 
execution/rendering. react er vitor useEffect use kore amra jevabe API call kore je data petam 
ta aber useState er set function e rekhe jsx er vitor execution/render kortam, thik same vabei 
Nextjs e kora jai, ajjono file page er upore 'use client' likhte hoi tahole automaticaly nextjs
ta client side hossebe bujhe nibe.  
and Server means server computer jekhane application and data host kora thake. and server side e 
jhokon kono kisu execution hoi tokhon seta k bole server side rendering. server side rendering 
khetre react er kono hook ba method use hoi na, sorasori function use kore API calling korle seta
server theke process hoye browser e render hobe. and page.js er upor 'use client' likha jabe na.
NextJS er vitor client and server 2 tai executin hote pare. 

Server side rendering: korbo amra 4ta use case e, 
    1. API Call ba Fetch data , data secure vabe browser e anar jonno. 
    2. Access backend resource, ba sorasori database,backend er onno process er sate connect er
     jonno.
    3. backend er sensitive information jonno, example- tokens, API keys, Authentication etc.
    4. je dependence ba package niye kaj korle browser slow hoye jai, user experience kharap
      hoi, sei dependence/package onek weightful/vari , jemon- tensorflow,face recognition
      system etc ja client side korle brower slow hobe user er experience bad hobe asob khetre
      server side rendering best. 

Client side rendering: user interactivity means user brower UI e kono akta event korle je change 
   hoi, example- button onClick,onChange etc client side execution/rendering hobe. React er 
   Use State and Lifecycle Effects- useState(),useEffect(),useReducer(),useRef() etc client/
   browser related hook/method. client side e use hoi.
   browser e session access,localStorage access, service worker access, navigation access, 
   geolocation access orthat browser dependent je feature gulu ase ta client side rendering 
   hobe. kono animation effect toiri, use custom hooks etc client side render hobe. 
   Client side rendering e must be page.js er upore 'use client' use korte hobe. 
   page.js er upore 'use client' likhle client side and server server rendering 2tai kora
   jai but page.js er upore 'use client' attribute ti na likhle only sever side rendering hobe, 
   client side rendering hobe na error show korbe.      



***HTML Beautifyer: client and server side data check kora jai.
    link: https://codebeautify.org/htmlviewer




***NextJS Routing: app er root directory te by default je page.js file ta thake seta home page 
  hisebe kaj kore. app directory te notun akta route create kora means notun akta folder/
  directory create kora. and folder er vitor must be page.js file create korte be. tahole 
  automatic route hisebe kaj korbe but page.js sara onno nam e file create korle nextJS error 
  dekhabe ata nextJS er convanions/rules. akta directory/folder Route hissebe kaj korbe jodi ta
  app directory vitore thake. app directory bahire kono folder/directory create korle ta Route/
  path hisebe kaj korbe na. 

  Nested routing:  app directory vitor , notun directory/folder akter por akta create kora 
   hoi. user browser e redirect kore path likhe likhe route korbe na ba page visit korbe na,
   ajonno user k akta menu toiri kore dite hobe ba Link toiri kore dite hobe jate user easy
   vabe ak akta directory brows korte pare . brows kora mane ak akta page paya. 
   user er brows suvidar jonno proyojon hobe Link component.

   **Link Component: diye user er jonno menu toiri kora hoi, easy page brows korar jonno
    Link component NextJS er akta building component. 
    <Link  href={"/"}>Home</Link>


    **Active Link:  Link kon directory te ase ta bujhar jonno usePathname(); use hoi, ata 
        nextJS er building method.
        

    **Link Component Query: Menu link theke kono page.js e kono property pathanor jonno 
      and receive korar jonno, query and  searchParams use hoi.
      href={{pathname:"/product", query:{name:"Book",price:"200Taka"}}}, 
      tasarao nextJS e navigation system e useSearchParams() method ase, ata use koreo same 
      kaj korte pari. ajonno page.js upore "use client" likhte hoi and useSearchParams() 
      import korte hoi, const params = useSearchParams();
                        <h2>He is famous {params.get('title')}</h2>

      replace : href="" vitor likhe dile browser tar history dhore rakhe na. 
      prefetch={}: default vabe link component prefctch true thake, prefetch hosse age theke
      kono kisu load kore rakha ba fetch kore rakha, akta link theke onno route ba link e kivabe jawa jai ta age theke NextJS fetch kore rakhe.   

   ***useRouter(): hosse nextJS er navigation jonno akta building property. jar dara 
      router.push() kore akta page.js chole jawa jai, asara aro kisu feature hosse
      router.replace(), router.refresh(), router.back(), router.forward()
      programmatically route change korar jonno ata use hoi. akta route theke onno route e
      jawa jai.
      router.push("/product?name=Mobile&price=5000")   






















