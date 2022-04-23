<p align="center">Copyright (c) 2021 webversalis</p><p align="center"><a href="https://vuejs.org" target="_blank"><img width="100"src="https://vuejs.org/images/logo.png"></a></p>  

<h1 align="center"><strong>Vue Boilerplate Template</strong></h1>  


<div align="center">  
  <strong>  
    🍒(vue  vite pinia vuex vue-router vue-i18n bootstrap) out of the box  
  </strong>  
</div>  

## Architecture

```text  
├─ public           // static assets.  
├─ src  
│  ├─ assets        // Les images (svg,png,...) et codes scss pour le design de la page  
│  ├─ service       // contient les classes typescript pour effectuer des requetes http  
│  ├─ components    // Vue components (header,footer,bouton ....)  
│  ├─ lang          // contient les fichiers de langue pour le i18n  
│  ├─ router        // la configuration de vue router  
│  ├─ store         // les stores (variable entre les pages)
│  ├─ utils         // repertoire pour les utilitaires │ 
│  └─ views         // les pages en format .vue  
├─ index.html       // page statique html de vite  
├─ vue.config.ts    // configuration de vite  
├─ tsconfig.json    // configuration de typescript
├─ package.json     // Liste des packages npm du projets
├─ babel.config.js  // configuration de babel
├─ .env.development // fichier de configuration des endpoints en developpement
├─ .env.production  // fichier de configuration des endpoints en production 
```  

## Liste des plugins
  <table>  
<tbody>  
 <tr>  
<td align="center" valign="middle">  
        <a href="https://vuejs.org/" target="_blank">  
          <img width="50px" src="https://router.vuejs.org/logo.png">  
        </a>  
      </td>  
       <td align="center" valign="middle">  
        <a href="https://git-scm.com/" target="_blank">  
          <img width="50px" src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67">  
        </a>  
      </td>
      <td align="center" valign="middle">  
        <a href="https://git-scm.com/" target="_blank">  
          <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png">  
        </a>  
      </td>
        <td align="center" valign="middle">  
        <a href="https://pinia.esm.dev/" target="_blank">  
          <img width="50px" src="https://pinia.esm.dev/logo.svg">  
        </a>  
      </td>
       </td>
        <td align="center" valign="middle">  
        <a href="https://sass-lang.com" target="_blank">  
          <img width="50px" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg">  
        </a>  
      </td>
        <td align="center" valign="middle">  
        <a href="https://element.eleme.io/#/" target="_blank">  
          <img width="50px" src="https://cdn.worldvectorlogo.com/logos/element-ui-1.svg">  
        </a>  
      </td>
 </tr>  
</tbody>  
</table>


## comment utiliser ce boilerplate ?

- Allez sur github , creer un nouveau depot tout en selectionnant le template comme sur l'image :  
  ![alt text](Documentation/boilerplate.png)
- Ensuite cloner le projet dans votre repertoire de travail
- Lancer la  commande shell ci-dessous :

```shell  
npm install  
```  