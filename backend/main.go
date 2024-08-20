// backend/main.go
package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/rs/cors"
)

type Message struct {
	Text string `json:"text"`
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
		message := Message{Text: "Hello from Golang backend!"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(message)
	})

	handler := cors.Default().Handler(mux)

	log.Println("Server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
