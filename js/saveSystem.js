const SAVE_KEY = "horrorGameSave";

const saveSystem = {

    // Charger la sauvegarde ou créer un état par défaut
    load() {
        const data = localStorage.getItem(SAVE_KEY);

        return data ? JSON.parse(data) : {
            currentRoom: 1,
            hasBeatenBoss: false,
            deathCount: 0
        };
    },

    // Sauvegarder l'état du jeu
    save(state) {
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    },

    // Réinitialiser la progression après une mort
    resetOnDeath() {
        const data = this.load();

        data.currentRoom = 1;
        data.hasBeatenBoss = false;
        data.deathCount += 1;

        this.save(data);

        return data.deathCount;
    },

    // Reset total (nouvelle partie)
    fullReset() {
        localStorage.removeItem(SAVE_KEY);
    }
};
