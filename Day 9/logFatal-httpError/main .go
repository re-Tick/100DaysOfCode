package main

import (
	"log"
	"net/http"
)

func main(){
	http.HandleFunc("/error", func (w http.ResponseWriter, r *http.Request){
		w.Write([]byte("Ritik here"))
	})
	log.Fatal(http.ListenAndServe(":3040", nil)) 
}