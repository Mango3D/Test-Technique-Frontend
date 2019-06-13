# Mango3D Test Technique

Bienvenue à vous,

Comme vous vous en doutez, voici le repository github du test 
technique pour l'obtention d'un stage chez Mango3D en tant que développeur Frontend

Tout est prêt, il ne manque plus que vous pour intégrer cette page
```src/components/ZAxisPage.js```.
Faites de votre mieux pour l'intégrer en suivant les technologies déjà utilisées et 
les contraintes ci-dessous.

Libre à vous d'ajouter des node_modules et des fichiers si vous en avez besoin !

**La page devra ressembler à ceci:** 

![](screen.png)

## Les contraintes

### Bloc de 6 boutons 
- Le bloc doit être centré au milieu de la page horizontalement et verticalement.
- Les trois boutons de vitesse doivent agir comme des radio-button (un seul activé).
- Les trois boutons de vitesse et les deux boutons droites doivent avoir une largeur de 47px 
et une hauteur de 40px.
- Les deux boutons du milieu doivent avoir un taille de 112px/47px.
- Leur flèche fait 13px de large.
- Les trois blocs de boutons doivent être parfaitement alignés horizontalement.

### Slider
- Le slider doit être centré verticalement et fixé en dessous de page.
- Il doit aller de 0.001mm à 50mm de façon linéaire.
- Sa largeur est de 365px et la barre horizontale a une hauteur de 8px
- Le "bouton" du slider doit faire 40px de diamètre

### Intéractions
- La flèche du Header doit revenir à la page de controle
- Au clic sur un des deux boutons du milieu, un console.log doit être 
appelé avec la vitesse selectionnée et la valeur du slider
- Le bouton **home** doit appeler un console.log("home")
- Le bouton **stop** doit logger "!stop!"

*Bon amusement!*

*Julien, CTO de Mango3D*
