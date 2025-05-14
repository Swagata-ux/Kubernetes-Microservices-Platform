package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/payments", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Payment service is running!")
	})
	fmt.Println("Payment Service listening on :5000")
	http.ListenAndServe(":5000", nil)
}
