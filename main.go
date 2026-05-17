package main

import (
	"log"
	"net/http"
)

func main() {
	// Sert tous les fichiers statiques (css, js, img)
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("./css"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./js"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./img"))))
	http.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("./src"))))

	// Page d'accueil
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./index.html")
	})

	log.Println("Serveur Query lancé sur http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
