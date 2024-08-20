// data.go

package main

type Product struct {
	ID    int    `json:"ID"`
	Name  string `json:"Name"`
	Price int    `json:"Price"`
}

var products = []Product{
	{ID: 1, Name: "Laptop", Price: 1200},
	{ID: 2, Name: "Smartphone", Price: 800},
	{ID: 3, Name: "Tablet", Price: 500},
}

func getProducts() []Product {
	return products
}
