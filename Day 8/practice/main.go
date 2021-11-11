package main

import (
	"fmt"
	"io"
	"net/http"
)

func load(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Hey there"))
	fmt.Println("in fmt")
}

type ritik int

func (obj ritik)ServeHTTP(w http.ResponseWriter, r *http.Request){
	// w.Write([]byte("in handler ritik"))
	w.Header().Set("Content-Type", "text/html; charset=utf.8")
	io.WriteString(w, `<img src="/Tesla.jpg">`)
}

func main(){
	var c ritik
	// http.HandleFunc("/", load)
	var mux = http.NewServeMux();
	mux.Handle("/handle", c)
	mux.Handle("/", http.FileServer(http.Dir("./assets")))
	http.ListenAndServe(":3040", mux)
}