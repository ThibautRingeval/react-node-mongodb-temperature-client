# Guide d'Utilisation et d'Installation du Frontend

## Table des Matières
1. [Introduction](#introduction)
2. [Installation](#installation)
   - [Prérequis](#prérequis)
   - [Clonage du Projet](#clonage-du-projet)
   - [Configuration](#configuration)
   - [Installation des Dépendances](#installation-des-dépendances)
3. [Exécution](#exécution)
   - [Démarrage du Serveur](#démarrage-du-serveur)

## Introduction <a name="introduction"></a>
Ce guide fournit des instructions détaillées sur l'installation et l'utilisation du backend de l'application. Le backend est conçu pour fournir des données de température à l'application frontend.

## Installation <a name="installation"></a>

### Prérequis <a name="prérequis"></a>
Assurez-vous d'avoir déjà le back sur votre machine.

### Clonage du Projet <a name="clonage-du-projet"></a>
```bash
git clone https://url-du-repository.git
cd nom-du-projet-backend
```
### Configuration <a name="configuration"></a>

Renommez le fichier .env.example en .env et configurez les variables d'environnement selon vos besoins.

### Installation des Dépendances <a name="installation-des-dépendances"></a>
```bash
npm install
```

### Accès à l'API <a name="accès-à-lapi"></a>
Le serveur backend sera accessible à l'adresse `http://localhost:3000` par défaut.

### Endpoints de l'API <a name="endpoints-de-lapi"></a>
## GET /getTemperatureData <a name="get-gettemperaturedata"></a>

Cet endpoint renvoie les données de température stockées.
