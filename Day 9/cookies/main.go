package main

import (
	"fmt"
	"io"
	"net/http"
	"strconv"
)

func main(){
	http.HandleFunc("/setCookie", func(w http.ResponseWriter, r *http.Request){
		http.SetCookie(w, &http.Cookie{Name: "root", Value: "0"})
		fmt.Fprintln(w, "In Root created cookie. Have fun")
	})
	http.HandleFunc("/getCookie", func(w http.ResponseWriter, r *http.Request){
		cook, err := r.Cookie("root")
		if err==http.ErrNoCookie{
			cook = &http.Cookie{Name: "root", Value: "0"}
		}
		count, _ := strconv.Atoi(cook.Value)
		// fmt.Fprintln(w, "cookie #1", cook, count)
		count++
		cook.Value = strconv.Itoa(count)
		http.SetCookie(w, cook)
		// cook2, err := r.Cookie("root")
		// fmt.Fprintln(w, "cookie #2", cook2, count)
		io.WriteString(w, cook.String())
		// http.SetCookie(w, cook)
	})
	http.ListenAndServe(":3000", nil)
}