# 🎮 Query

> Jeu de culture générale horrifique en navigateur — survivez aux questions ou périssez.

Développé dans le cadre du cours JavaScript — B1 Informatique, YNOV.

**Équipe :** Amaury · Timothé · Yves

---

## 🧟 Concept

Query est un jeu de QCM progressif à ambiance horrifique. Le joueur affronte 4 boss en répondant à des questions de culture générale. Chaque erreur coûte des cœurs — chaque bonne réponse inflige des dégâts au boss. Survivez jusqu'au Founder pour l'emporter.

---

## ✨ Features

### Gameplay
- **4 boss progressifs** — Junior, Senior, CTO, Founder — difficulté croissante
- **3 modes de réponse** :
  - 🟢 **Caché** — réponse libre au clavier, dégâts max (15), risque faible (-1 cœur)
  - 🟠 **X4** — 4 propositions, dégâts moyens (10), risque moyen (-2 cœurs)
  - 🔴 **X2** — 2 propositions, dégâts faibles (5), mort directe si erreur
- **300+ questions** réparties en 3 niveaux de difficulté
- **Système de vies** — 3 cœurs, malus variable selon le mode choisi
- **Boss final** — mix aléatoire de questions avancées et intermédiaires (80/20)

### Progression
- **Sauvegarde** — reprenez votre partie via le bouton Continuer
- **Messages de mort évolutifs** — 30 messages de plus en plus cruels selon le nombre de tentatives
- **Leaderboard** — classement des 10 meilleurs scores, persistant entre les sessions
- **Page Victoire** — écran de fin avec soumission du score au leaderboard

### Interface
- **HUD en temps réel** — barre de PV du boss, cœurs joueur, score en cours
- **Ambiance sonore** — musique d'ambiance au lancement
- **Animations** — shake et flash rouge sur le boss à chaque dégât, clignotement danger sur X2
- **Transitions** — fondu noir entre chaque page

---

## 🗂️ Architecture

```
Query/
├── index.html                # Menu principal
├── server.js                 # Serveur Node.js
├── package.json
├── sounds/
│   └── ambient.mp3           # Musique d'ambiance
├── css/
│   ├── index.css             # Menu principal
│   ├── game.css              # Page de jeu
│   ├── gameOver.css          # Écran de mort
│   ├── victory.css           # Écran de victoire
│   ├── leaderboard.css       # Classement
│   ├── popup.css             # Modale réglages
│   ├── quit.css              # Styles écran de sortie
│   └── victory.css           # Styles écran de victoire
├── js/
│   ├── audioSystem.js        # Gestion des sons
│   ├── deathsMessages.js     # Banque des messages de mort
│   ├── effectsSysyem.js      # Effets visuels (screamers)
│   ├── gameOver.js           # Logique écran de mort
│   ├── gameRun.js            # Chef d'orchestre du jeu
│   ├── mobs.js               # Données des boss
│   ├── navigation.js         # Fonctions de navigation/transitions
│   ├── qcm.js                # Moteur de questions et réponses
│   ├── questionsAvancee.js   # Banque questions avancées
│   ├── questionsIntermediaires.js
│   ├── questionsSimples.js
│   ├── saveSystem.js         # Système de sauvegarde (localStorage)
│   ├── leaderboard.js        # Leaderboard
│   └── victory.js            # Logique écran victoire
├── img/
│   ├── bg/                   # Dossier de tri : Fonds d'écran
│   │   ├── background.png
│   │   ├── background2.png
│   │   ├── DeadBG.png
│   │   ├── quit.png
│   │   └── victory.png
│   ├── mobs/                 # Dossier de tri : Boss
│   │   ├── cto.jpg
│   │   ├── founder.jpg
│   │   ├── junior.jpg
│   │   └── senior.jpg
│   ├── nav/                  # Dossier de tri : Boutons et icônes
│   │   ├── back.png
│   │   ├── continuer.png
│   │   ├── jouer.png
│   │   ├── leaderB.png
│   │   ├── menu_principal.png
│   │   ├── quitter.png
│   │   ├── reglages.png
│   │   └── rejouer.png
│   ├── sound/                # Dossier de tri : Icônes audio
│   │   ├── cursor.png
│   │   ├── fond.png
│   │   └── sound.png
│   └── fav.png               # Favicon
src/
    ├── game.html             # Page de jeu principale
    ├── gameOver.html         # Écran de mort
    ├── leaderboard.html      # Classement
    ├── quit.html             # Page de confirmation de sortie
    └── victory.html          # Écran de victoire
```

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| HTML5 | Structure des pages |
| CSS3 | Styles, animations, responsive |
| JavaScript (Vanilla) | Logique de jeu, DOM, localStorage |
| Node.js | Serveur de fichiers statiques |
| localStorage | Sauvegarde et leaderboard |

Aucune dépendance externe — zéro framework, zéro librairie.

---

## 🚀 Lancement

### Prérequis
- [Node.js](https://nodejs.org/) v18+

### Installation & démarrage

```bash
# Cloner le repo
git clone https://github.com/amaaune/Query.git
cd Query

# Lancer le serveur
npm start
```

Ouvrir ensuite **http://localhost:8080** dans le navigateur.

> ⚠️ Ne pas ouvrir les fichiers HTML directement — utiliser le serveur pour que les sons et ressources se chargent correctement.

---

## 🎮 Comment jouer

1. Cliquez **Jouer** pour démarrer une nouvelle partie
2. Lisez la question affichée
3. Choisissez votre mode de réponse :
   - Tapez directement votre réponse et appuyez sur **Entrée** (mode caché)
   - Cliquez **X4** pour afficher 4 propositions
   - Cliquez **X2** pour afficher 2 propositions (danger !)
4. Infligez des dégâts aux boss, survivez jusqu'au Founder
5. En cas de mort, entrez votre pseudo pour soumettre votre score au leaderboard

---

## 💾 Sauvegarde

La progression est sauvegardée via la modale **Réglages** (⚙️ en haut à droite).  
Le bouton **Continuer** apparaît sur le menu principal si une sauvegarde est disponible.  
**Quitter** depuis l'écran de mort efface la progression mais conserve le leaderboard.

---

## 👥 Répartition des tâches

| Membre | Pôle | Missions |
|---|---|---|
| Amaury | Logique & QCM | Moteur de jeu, navigation, validation des réponses |
| Timothé | Mécaniques spéciales | Logique de combat boss, effets |
| Yves | Ambiance & Persistance | Système de sauvegarde, sons, polish |

---

*© Query — YNOV 2026*