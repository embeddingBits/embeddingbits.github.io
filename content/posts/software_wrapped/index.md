+++
date = '2025-12-29T10:23:03+05:30'
title = 'Tech Wrapped'
summary = "My Tech Wrapped for 2025 from software that I used to the development I made"
tags = ["wrapped", "tech", "software", "open_source", "contribution"]
toc = true
showTags = true
draft = false
readTime = true
+++

# Tech Wrapped 2025

This post is a personal wrap-up of my year in tech, the stack I relied on, the software that shaped my daily workflow, and the projects I built throughout 2025.

The goal isn’t to list everything I touched, but to document what actually mattered.

---

## Tech Stack

This year, my stack gradually converged toward tools that emphasized **simplicity, control, and long-term maintainability**.

### Languages
- **Zig:** I have always been a fan of C, but trying out Zig was a really good experience. I loved the syntax, its interoperability with C, and its strong support for bare-metal programming and embedded systems.
- **Golang:** I started getting into network programming and felt that C was a bit hard to work with for those use cases. That led me to Golang, which I really liked because of its goroutines and channels. Although I’m not a big fan of garbage collectors, I felt that sacrificing manual memory management for a better experience in hobby network programming was actually a good trade-off, in my opinion.

---


## Software I Used & Loved

Some software faded away quickly. The ones listed here earned a permanent place in my workflow.

### Daily Drivers
- **River:** I was a Hyprland user and wanted to try out a more lightweight window manager, as Hyprland felt a bit too much for me. While exploring lightweight options, I came across a window manager written in Zig. That’s how I found River, one of the more prominent projects built in Zig. After trying it out, I really liked it, especially its approach to configuration as a script and tools like riverctl.
- **Ghostty:** I didn’t really plan to switch terminal emulators from Kitty. I tried Ghostty just for fun, but ended up liking it enough to make the switch.

---

### Notes and Documentation
- **Neorg Plugin:** I was an Obsidian user for note-taking and really wanted to try an open-source alternative (FOSSification). While scrolling through Reddit, I came across the Neorg plugin in a subreddit. It’s essentially an Org-mode like system for Neovim, and I ended up switching to Neorg. I do realize that Org mode already exists, but I wanted to try something a bit more niche and tightly integrated with Neovim.

- **Typst:** I was using LaTeX for my college reports and for taking math notes, but its syntax has always been an obstacle that slowed me down. I came across Typst, which has a much easier learning curve and a far less overwhelming syntax. It follows a syntax style similar to Markdown, which made writing and iterating on notes much faster.

---

## Contribution

- **Ly:** Things I have contributed around 162 lines to Ly display manager
    - **Improved Power Management Options:** 
    Added a hibernate option between sleep and brightness-down actions, giving users finer control over power behavior, especially useful for laptops. [#867](https://codeberg.org/fairyglade/ly/pulls/867)
    - **Customizable Edge Margins:**
    Introduced an edge margin option, allowing better layout control and improved ergonomics for different screen sizes and setups. [#856](https://codeberg.org/fairyglade/ly/pulls/856)
    - **Battery Status Logic Fix:**
    Fixed an issue where the battery status defaulted to an incorrect row when certain UI elements were hidden, ensuring consistent and predictable behavior. [#845](https://codeberg.org/fairyglade/ly/pulls/845)
    - **Battery Status in the Top Bar:**
    Added battery status support directly to the top bar alongside brightness controls, improving visibility and reducing the need for extra UI elements. [#826](https://codeberg.org/fairyglade/ly/pulls/826)

---

## Projects I Built in 2025

Some small projects that I built this year

### Completed Projects

#### Simple 4bit Processor
- **Description:** This was for a college project for the subject Digital System Design
- **Tech Stack:** Verilog, GTKwave
- **Core Problem Solved:** A really simple 4bit processor.
- **What I Learned:** Core VLSI perspective of a processor. 

---

#### Multi Threaded File Downloader
- **Description:** This is a multi-file downloader in Golang utilising Go channeling and Goroutines 
- **Tech Stack:** Golang
- **What I Learned:** Golang in computer networks 

#### GortScanner
- **Description:** This is a really simple port scanner that I made in Golang
- **Tech Stack:** Golang
- **What I Learned:** Golang in computer networks 

---

### Ongoing / In-Progress Projects

#### Fastsh
- **Goal:** A POSIX-complaint shell that I am working on for my personal use cases. 
- **Tech Stack:** Zig
- **Current State:** It can execute some basic builtins and executables in PATH.
- **Remaining Challenges:** Implement features like job management, conditional statements and much more. 

---

## Links
- GitHub: https://github.com/embeddingbits/ 
