function triggerScreamer() {
    const sc = document.getElementById("screamer");

    sc.classList.add("visible");
    audioManager.play("screamer");

    setTimeout(() => {
        sc.classList.remove("visible");
    }, 800);
}
