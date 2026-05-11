const SAVE_KEY = "horrorGameSave";

export const saveSystem = {

    load() {
        const data = localStorage.getItem(SAVE_KEY);

        return data ? JSON.parse(data) : {
            currentRoom: 1,
            hasBeatenBoss: false,
            deathCount: 0
        };
    },

    save(state) {
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    },

    resetOnDeath() {
        const data = this.load();

        data.currentRoom = 1;
        data.hasBeatenBoss = false;
        data.deathCount += 1;

        this.save(data);

        return data.deathCount;
    },

    fullReset() {
        localStorage.removeItem(SAVE_KEY);
    }
};
