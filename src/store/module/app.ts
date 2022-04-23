import {store} from '@/store'
import {defineStore} from 'pinia'

interface AppState {
    pageLoading: boolean,
    produits: Array<any>,
    panier: Array<any>,
}

export const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => <AppState>({
        pageLoading: false,
        panier:[],
        produits: [
            { 
                id:1,
                nom: 'Ce Que Dieu Fait Quand Les Femmes Prient',
              categorie: "roman",
              auteur :"Evelyn Christenson" ,
              prix : " 500 FCFA",
              src: "/images/im1.jpg",
              detail : "Que se passe-t-il quand des femmes prient ? Au fil des pages, l'auteur répond à cette question. Après avoir noté méticuleusement les exaucements de Dieu à la prière pendant trois décennies, cette femme très appréciée comme leader dans le ministère auprès des femmes, sait de quoi elle parle en matière de réponse à la prière des femmes. L'auteur retrace son propre pélerinage et nous lance un défi à travers les leçons et les victoires remportées par ces femmes qui ont prié. Ce que Dieu fait quand les femmes prient saura enthousiasmer, inspirer et toucher votre coeur. Votre vie de prière sera enrichie par l'enseignement profond sur la prière sincère que l'auteur partage ici. Ce livre contribuera à ce que chaque croyant rencontre davantage ce Dieu qui répond à la prière, l'aime de plus en plus profondément et prie avec beaucoup d'intensité et de joie."
            },
            { 
                id:2,
                nom: "La Prière D'une Épouse Est Efficace",
            categorie: "roman",
            auteur :"Stormie Omartian" ,
              src: "/images/3.jpg",
              prix : "450 FCFA",
            detail : "Les défis et les pressions d'aujourd'hui peuvent faire penser qu'un mariage heureux et épanoui est un rêve, voir un mythe. C'est sans compter sur la puissance de la prière. Au travers de son vécu personnel, l'auteur explique à l'épouse comment prier pour chaque besoin spécifique de son mari."          
        
            },
            { nom: "Les Langages D'amour Des Enfants",
            id:3,
            categorie: "roman",
            auteur :"Gary Chapman" ,
              src: "/images/2.jpg",
              prix : "200 FCFA",
            detail : "Dans Les langages de l’amour, Gary Chapman aidait de nombreux conjoints à vivre une relation plus enrichissante en leur montrant comment parler le langage de l’autre. Dans Langages d’amour des enfants, Chapman fait équipe avec Ross Campbell, l’auteur de Comment vraiment aimer votre enfant, pour aider les parents à parler le langage d’amour de leurs enfants.Vous pouvez apprendre à parler couramment le langage d’amour de votre enfant !"       
           
            },
            { nom: "Être Mère",
            id:4,
            categorie: "roman",
            auteur :"Monique de Hadjetlaché" ,
              src: "/images/4.jpg",
              prix : "100 FCFA",
            detail : "Monique de Hadjetlaché explique dans ce livre comment l'on devient mère, du désir de l'enfant à son éducation. À l'aide de récits tirés de son expérience de thérapeute, de mère, ainsi qu'au travers de personnages bibliques, elle évoque les joies et les difficultés de ce beau parcours. Chaque femme possède des ressources qui lui permettront, non d'être une mère parfaite, mais d'être simplement mère, en tirant le meilleur parti de son passé, son contexte familial, psychologique, sociologique, et malgré les difficultés qui se présenteront inévitablement. "        
            },
            { nom: "L'utilisation Du Temps",
            id:5,
            categorie: "roman",
            auteur :"Sminth" ,
              src: "/images/5.jpg",
              prix : "300 FCFA",
            detail : "Le temps étant un don du Seigneur, l’auteur est convaincu que son utilisation correcte ne peut pas être séparée de la connaissance profonde de Dieu et de ses volontés. L’utilisation décente du temps passe par une rigoureuse planification de celui-ci à travers l’élaboration d’un emploi de temps qui consacre les meilleures heures aux choses prioritaires de la vie, conformément à la révélation de Dieu et de l’œuvre que le Seigneur nous confie."        
            },
            { nom: 'Ce Que Dieu Fait Quand Les Femmes Prient',
              categorie: "roman",
              id:6,
              auteur :"Evelyn Christenson" ,
              prix : " 500 FCFA",
              src: "/images/im1.jpg",
              detail : "Que se passe-t-il quand des femmes prient ? Au fil des pages, l'auteur répond à cette question. Après avoir noté méticuleusement les exaucements de Dieu à la prière pendant trois décennies, cette femme très appréciée comme leader dans le ministère auprès des femmes, sait de quoi elle parle en matière de réponse à la prière des femmes. L'auteur retrace son propre pélerinage et nous lance un défi à travers les leçons et les victoires remportées par ces femmes qui ont prié. Ce que Dieu fait quand les femmes prient saura enthousiasmer, inspirer et toucher votre coeur. Votre vie de prière sera enrichie par l'enseignement profond sur la prière sincère que l'auteur partage ici. Ce livre contribuera à ce que chaque croyant rencontre davantage ce Dieu qui répond à la prière, l'aime de plus en plus profondément et prie avec beaucoup d'intensité et de joie."
            },
            { nom: "La Prière D'une Épouse Est Efficace",
            categorie: "roman",
            id:7,
            auteur :"Stormie Omartian" ,
              src: "/images/3.jpg",
              prix : "100 FCFA",
            detail : "Les défis et les pressions d'aujourd'hui peuvent faire penser qu'un mariage heureux et épanoui est un rêve, voir un mythe. C'est sans compter sur la puissance de la prière. Au travers de son vécu personnel, l'auteur explique à l'épouse comment prier pour chaque besoin spécifique de son mari."          
        
            },
            { nom: "Les Langages D'amour Des Enfants",
            categorie: "roman",
            id:8,
            auteur :"Gary Chapman" ,
              src: "/images/2.jpg",
              prix : "150 FCFA",
            detail : "Dans Les langages de l’amour, Gary Chapman aidait de nombreux conjoints à vivre une relation plus enrichissante en leur montrant comment parler le langage de l’autre. Dans Langages d’amour des enfants, Chapman fait équipe avec Ross Campbell, l’auteur de Comment vraiment aimer votre enfant, pour aider les parents à parler le langage d’amour de leurs enfants.Vous pouvez apprendre à parler couramment le langage d’amour de votre enfant !"       
           
            },
            { nom: "Être Mère",
            categorie: "roman",
            id:9,
            auteur :"Monique de Hadjetlaché" ,
              src: "/images/4.jpg",
              prix : "100 FCFA",
            detail : "Monique de Hadjetlaché explique dans ce livre comment l'on devient mère, du désir de l'enfant à son éducation. À l'aide de récits tirés de son expérience de thérapeute, de mère, ainsi qu'au travers de personnages bibliques, elle évoque les joies et les difficultés de ce beau parcours. Chaque femme possède des ressources qui lui permettront, non d'être une mère parfaite, mais d'être simplement mère, en tirant le meilleur parti de son passé, son contexte familial, psychologique, sociologique, et malgré les difficultés qui se présenteront inévitablement. "        
            },
            { nom: "L'utilisation Du Temps",
            categorie: "roman",
            id:10,
            auteur :"Sminth" ,
              src: "/images/5.jpg",
              prix : "600 FCFA",
            detail : "Le temps étant un don du Seigneur, l’auteur est convaincu que son utilisation correcte ne peut pas être séparée de la connaissance profonde de Dieu et de ses volontés. L’utilisation décente du temps passe par une rigoureuse planification de celui-ci à travers l’élaboration d’un emploi de temps qui consacre les meilleures heures aux choses prioritaires de la vie, conformément à la révélation de Dieu et de l’œuvre que le Seigneur nous confie."        
            },
          ],
          
    }),
    getters: {
        getPageLoading(): boolean {
            return this.pageLoading
        },
        getProduits(): Object{
            return this.produits;
        },
        getPanier(): Object{
            return this.panier;
        },
        
    },
    actions: {
        setPageLoading(loading: boolean): void {
            this.pageLoading = loading
        },
        addPanier(produit : Object):void{
            this.panier.push(produit);
        },
        removePanier(index:any):void{
            this.panier.splice(index, 1);
        },
        changeQte(index:any,qte:any){
          // console.log(this.panier.at(index))
          this.panier.at(index).qte=qte;
        },
        getSommeTotal():any{
          var somme=0;
          this.panier.forEach(el => {
            // console.log(parseInt(el.prix)*parseInt(el.qte))
            somme+= parseInt(el.prix)*parseInt(el.qte)
          });
          return somme;
        },
        verif(id:any):any{
          this.panier.forEach(el => {
            console.log(typeof parseInt(el.id_prod))
            console.log(parseInt(id))
           
            if(parseInt(el.id_prod)===parseInt(id)) return true
          });
          return false
        }
    }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
    return useAppStore(store)
}