import { audioManager } from "./audioSystem.js";

export function triggerScreamer() {
    const screamer = document.getElementById("screamer");

    screamer.classList.add("visible");
    audioManager.play("screamer");
    document.body.classList.add("shake");

    setTimeout(() => {
        screamer.classList.remove("visible");
        document.body.classList.remove("shake");
    }, 800);
}

export function flashRed() {
    document.body.classList.add("flash-red");

    setTimeout(() => {
        document.body.classList.remove("flash-red");
    }, 300);
}

export function shakeScreen() {
    document.body.classList.add("shake");

    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 500);
}
