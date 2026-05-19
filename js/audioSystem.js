const audioManager = {
    sounds: {
        ambient: new Audio("/sounds/ambient.mp3")
    },

    play(name) {
        const sound = this.sounds[name];
        if (!sound) return;

        sound.currentTime = 0;
        sound.play();
    },

    stop(name) {
        const sound = this.sounds[name];
        if (!sound) return;

        sound.pause();
        sound.currentTime = 0;
    },

    startAmbient() {
        const amb = this.sounds.ambient;
        amb.loop = true;
        amb.volume = 0.4;
        amb.play();
    },

    fadeInAmbient() {
        const amb = this.sounds.ambient;
        amb.volume = 0;
        amb.loop = true;
        amb.play();

        let v = 0;
        const fade = setInterval(() => {
            v += 0.02;
            amb.volume = v;
            if (v >= 0.4) clearInterval(fade);
        }, 100);
    }
};
