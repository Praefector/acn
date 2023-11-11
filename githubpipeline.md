# Github 

Ce fichier markdown expliquera chaque ligne de code pour la pipeline github


```yaml
 name: Deploy Dockerfile                #Nom de la pipeline

on:                                     # Éxécute l'action sur :
  push:                                 # un push sur la branche main
    branches:
     - main  
  pull_request:                         # une pull request vers la branche main
      branches:
      - main
  workflow_dispatch:                    # Manuellement
  
jobs:                                   # Commande qui détermine les commande pour la pipeline
  build:
    runs-on: self-hosted                # Dis sur quel type de host que la pipeline recoit
    steps:                              # Les étapes des commandes de la pipeline
      - name: Stop docker               # Arrête le container nommé ucn
        run: docker stop ucn
      - name: Delete old container      # Supprime le container nommé ucn
        run: docker rm ucn
      - name: Pull repo from GitHub     # Fait une requet pull du github
        uses: actions/checkout@v4
      - name: build image               # Crée une image à partir du dockerfile qui viens de github
        run: docker build -t ucn:docker .\
      - name: Start docker              # Lance un container nommé ucn avec l'image ucn
        run: docker run --name ucn -d -p 8000:8000 ucn:docker`
```

