const SAVE_KEY = "querySave";

const saveSystem = {

    // Charger la sauvegarde ou créer un état par défaut
    load() {
        const data = localStorage.getItem(SAVE_KEY);

        return data ? JSON.parse(data) : {
            currentBossIndex: 0,
            playerLives: 3,
            score: 0,
            deathCount: 0,
            bossPv: null
        };
    },

    // Sauvegarder l'état du jeu
    save(state) {
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    },

    // Réinitialiser la progression après une mort
    resetOnDeath() {
        const data = this.load();

        data.currentBossIndex = 0;
        data.playerLives = 3;
        data.score = 0;
        data.deathCount += 1;
        data.bossPv = null;

        this.save(data);

        return data.deathCount;
    },

    // Reset total (nouvelle partie)
    fullReset() {
        localStorage.removeItem(SAVE_KEY);
    }
};