# Docker

Ce fichier markdown expliquera chaque ligne de code pour le dockerfile

```dockerfile
FROM node:12                    # Déclare dans quelle version du logiciel notre container devra utiliser
WORKDIR /app                    # Déclare dans quel dossier sera le dossier de travail
COPY package*.json ./           # Fait une copie du fichier 
RUN npm install                 # Lance l'installation des différents packets
COPY . .                        # Fait une copie de tout
ENV PORT=8000                   # Déclare le port d'environement
EXPOSE 8000                     # Autorise l'accès par le port
CMD [ "npm", "start"]           # Lance l'application
```


