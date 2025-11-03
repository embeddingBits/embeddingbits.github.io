---
title: "Golang and its Philosophy"
date: "2024-11-08"
summary: "Golang and its Philosophy"
description: "A small intro to Golang and why its helpful in networks and distributed systems"
toc: true
readTime: true
autonumber: true
tags: ["networks", "golang", "distibuted systems"]
showTags: true
---

# What is Golang? Where and Why is it used?

Go (or **Golang**) is an Open Source programming language developed by Google. Go has many use cases like building **Microservices**, **Cloud Computing**, **Web Applications**, and creating **CLI Tools**.

Go is a **statically typed language**, and its structures and syntax resemble the **C Programming Language**. Due to Go’s **fast startup time**, **low runtime overhead**, and **platform independence**, it has become a very popular language for writing microservices and other systems. Go is also known for its **concurrency**, meaning it can execute multiple processes simultaneously.

Golang uses **Goroutines** (lightweight processes) and a collection of **packages and commands** for dependency management. It was designed to solve issues like **slow build times**, **difficulty writing tools**, and **cross-language development**.

In this blog, I’ll discuss Golang and provide resources to get started.

---

## History of Go

Golang was created by Google to solve their internal software engineering issues as an alternative to **C++**. Development began in **2007**, with the goal of designing a language that was easier to use while incorporating the best features of C++, JavaScript, and Python.
It was released as an **Open Source project** by Google in **2009**, allowing community contributions.

Since then, new features have been added regularly, with a **major update in 2022** introducing **Generics** (a major feature from Java).

Due to its fast growth and practical design, major companies such as **Netflix**, **Microsoft**, **Cloudflare**, **Docker**, **Twitch**, and **Dropbox** adopted Go in their codebases.

---

## Philosophy of Go

The philosophy of Go and the problems it addresses are quite interesting:

* **Simplicity:** Go focuses on simplicity. While many languages add features that lead to bloat, Go only includes features considered useful in the long term.
* **Efficiency:** Go is designed for speed and efficiency — evident in its strong concurrency support.
* **Error Handling:** Go encourages explicit and reliable error handling, with built-in mechanisms in most functions.
* **Pragmatism:** Go emphasizes practical and logical solutions to real-world problems.

---

## Features of Go

* **Standard Library:** Rich collection of standard libraries ranging from math to networking.
* **Package Management:** Easy management of user-created packages and publishing them via CLI commands.
* **Static Typing:** Types are assigned at compile time, preventing type-related runtime errors.
* **Unit Test Support:** Built-in unit testing to ensure code quality and parallel debugging.
* **Platform Independence:** Compiles and runs on any hardware or operating system.
* **Concurrency:** Through **Goroutines**, Go allows multiple tasks to run in parallel — one of its defining features.

---

## Some Useful Go Commands

### `go run`

Compiles and executes code simultaneously.

```bash
go run filename.go
```

### `go build`

Compiles the code and creates an executable file.

```bash
go build filename.go
```

### `go get`

Imports third-party libraries from repositories like GitHub.

```bash
go get github.com/libname
```

### `go fmt`

Automatically formats code for readability using proper indentation and line spacing.

```bash
go fmt filename.go
```

#### Unformatted File

```go
package main
import "fmt"

func main(){
fmt.Println("Sample Addition")
a:=5
b:=4
c:=a+b
fmt.Println(c)
}
```

#### Formatted File with `go fmt`

```go
package main
import "fmt"

func main() {
    fmt.Println("Sample Addition")
    a := 5
    b := 4
    c := a + b
    fmt.Println(c)
}
```

You can see how the command improves readability and structure.

---

## What is Go Used For?

Go is widely used in various domains:

* **Container Services:** Tools like **Docker** and **Kubernetes** use Go for efficient containerization and concurrency.
* **Network and Cloud Services:** Ideal for writing high-performance web servers and APIs (e.g., **Bitcoin Lightning Network**, **blockchain** systems).
* **Web Services:** Go’s built-in HTTP server helps companies like **Netflix** build scalable backend services.
* **Command-line Tools:** Rich libraries for building powerful CLI tools.
* **Microservices:** Used to develop microservices such as FTP/SMTP servers — used by companies like **Uber**.
* **Data Science:** Go’s concurrency and memory management make it suitable for handling large datasets efficiently.

---

## How to Learn Go

Go is relatively easy to learn. Some may find **Goroutines**, **Channels**, and **Concurrency** challenging — but these are also Go’s most powerful features.

> The best features always take effort to master!

The best way to learn is through **books and official documentation**, not endless tutorials. Many beginners get stuck in "tutorial hell" — watching too many videos, getting confused, and eventually quitting.

Go’s **official documentation** is among the best of any language, offering concept-based lessons and an **interactive playground**.

The documentation is divided into two main parts:

* **A Tour of Go** — covers syntax and fundamentals, from variables to concurrency.
* **Effective Go** — teaches how to write clear, idiomatic Go code.

### Official Docs

* **A Tour of Go:** [https://go.dev/tour/welcome/1](https://go.dev/tour/welcome/1)
* **Effective Go:** [https://go.dev/doc/effective_go](https://go.dev/doc/effective_go)

### Recommended Book

The best beginner-friendly book to learn Go:

* **Learning Go:** [https://www.miek.nl/go/](https://www.miek.nl/go/)

---

## Thank You

**Thank you for reading this blog!**

---

