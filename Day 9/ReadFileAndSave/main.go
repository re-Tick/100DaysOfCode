package main

import (
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main(){
	http.HandleFunc("/", foo)
	http.ListenAndServe(":3040", nil)
}

func foo(w http.ResponseWriter, r *http.Request){
	var s string
	if r.Method == "POST"{
		f, h, err := r.FormFile("q")
		if err!=nil{
			log.Fatal(err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer f.Close()
		byteSlice, err := ioutil.ReadAll(f)
		if err!=nil{
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		s = string(byteSlice)

		savedFile, err := os.Create(filepath.Join("./uploads/" + h.Filename))
		if err!=nil{
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer savedFile.Close()

		_,err=savedFile.Write(byteSlice)
		if err!=nil{
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.WriteString(w, `<form method="POST" enctype="multipart/form-data">
        <input type="file" name="q">
        <input type="submit" name="" id="">
    </form><br>` + s)
}