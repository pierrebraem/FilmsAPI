# Présentation du projet
Le projet est une API CRUD concernant les films

# Présentation des parties de l'évaluation
## Gestion du dépot git
Tout d'abord, j'ai dû créé un dossier qui devait contenir le projet.
Dans ce dossier, j'ai tapé la commande ```npm init -y```
Puis installer les dépendances nécessaires au projet tel que
- express
- mysql
- dotenv
- nodemon
Pour les installer tapez la commande ```npm i express mysql```. Puis ```nom i --save-dev dotenv```

Ensuite, je m'occuper du dépôt git :
- Initialisation du dépôt Git avec la commande ```git init```
- Création du .gitignore avec comme contenu node_modules et .env
- Commit en local avec comme message "Initial commit" avec les commandes ```git co -m "Initial commit"```
- Associer le dêpot distant avec le dêpot local avc les ccommandes ```git remote origin https://github.com/pierrebraem/FilmsAPI.git```, puis ```git push -u origin main```
- Créer une branche "develop" pour le développement des features, bugfix, etc.

## Création du docker file
- A la racine, créer un fichier nommé Dockerfile
- Une fois fait, tapez la commande : ```docker build -t film_api```
- Vérifiez que l'image s'est bien créée avec la commande ```docker images```
- Créez un container avec la commande ```docker container run --publish 3000:3000 --detach --name film film_api```
- Vérifiez que le container est en cours d'exécution avec la commande ```docker container ls```. Le status doit être à Up
- Ensuite, pour vérifiez que tous fonctionne. Ouvrez un navigateur et tapez l'URL : ```localhost:3000/hello```
#
