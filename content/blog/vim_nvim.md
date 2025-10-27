+++
author = "Amiitesh"
title = "Vim vs Neovim"
date = "2024-09-03"
description = "Differences between Vim and Neovim"
tags = [
    "vim",
    "neovim"
]
+++


# Vim vs Neovim: Which One Should You Choose?

## Introduction

Welcome to this blog, where I'll be plotting the differences between Vim and Neovim. I'll also be discussing which editor to use between the two for a better workflow and a better code editing experience.

Vim and Neovim are Open Source text editors which can be tweaked for our convenience and changed according to our workflow.

Vim and Neovim are one of the best feature-rich text editors available for us today alongside Emacs. They are called mode-based or modal text editors, meaning that work is done in different modes. For example: If you want to enter text into the file you have to get into input mode (Insert Mode) and to select text (Visual Mode) and to Replace (Replace Mode) and to perform certain tasks like copy, paste and lots of "macros" we have to use the Command Mode.

## What are the differences between Vim and Neovim?

### Basic Differences between the text editors:

- **Extensibility:**
  - **Vim:** Vim uses Vimscript (A scripting language made for Vim). It has more of a restricted plugin system since the plugins are required to be written on Vimscript. So, getting more advanced features on Vim can be a very challenging task.
  - **Neovim:** Neovim, on the other hand, is a fork of Vim, which is made on Lua language, a language which has way better documentation than Vimscript and has support for plugins to be made on other programming languages as the function calls are supported by other programming languages too (Isn't that great!?). Neovim also supports asynchronous plugins which makes it more performant and responsive than Vim.

- **UI Features:**
  - **Vim:** Vim basically runs on a terminal emulator, even though it can be run in GUIs like GVim the UI features are heavily limited when in the case of Vim.
  - **Neovim:** Neovim on the other hand was also made to support external user interfaces. So it can be run on all sorts of terminal emulators and also in other GUIs (Neovide is a very good example which was made to run Neovim) for different user preferences and user workflows, thus giving us more opportunity to make use of the Open Source freedom when in the case of Neovim.

- **Built-In Terminal:**
  - **Vim:** Vim does not have a built-in terminal emulator, so we have to rely on another terminal tab opened up to run code.
  - **Neovim:** Neovim comes equipped with a built-in terminal emulator, making it easier to run code and commands in the emulator and interact with REPL within the editor.

### Detailed Differences between the two text editors:

- **LSP Support (Language Server Protocol):**
  - **Vim:** Vim does not have built-in support for LSPs.
  - **Neovim:** Neovim on the other hand, has very good built-in support for LSPs which is a JSON-RPC based protocol to interact with the LSP. This allows Neovim to interact with the LSPs of different languages to access language-specific features like code linting and code snippet completions.

- **Directory Structure:**
  - **Vim:** Vim hardcodes its config file location and requires the users to only change that specific file for the changes to act upon which affects configuration maintenance.
  - **Neovim:** Neovim uses the "XDG Base Directory" structure. So, programs that have these specifications have their config files stored in XDG_CONFIG_HOME i.e., *~/.config/nvim/init.lua*

- **Code Formatting:**
  - **Vim:** The code formatting in Vim is single-handedly done by a single person. So, the philosophy of code formatting lies in the hands of a single person.
  - **Neovim:** Whereas, in Neovim the code formatting principles are being maintained by a huge number of maintainers making Neovim's code formatting more than that of Vim.

- **Plugin Support:**
  - **Vim:** Vim has a very rich plugin support and also has a plugin support of its own. But, it is harder to use it for IDE-like features due to the reason that it was made in Vimscript.
  - **Neovim:** Neovim supports the plugin to be written in various languages. With the use of a "actual" programming language it became easier to implement IDE-like features on to Neovim unlike Vim.

## Bottom Note

Both Vim and Neovim are powerful, open-source text editors designed for customization and efficient workflows. While Vim has been a long-standing favorite for many developers, Neovim enhances the experience with modern features such as asynchronous plugin support, built-in terminal, LSP support, and improved extensibility through Lua. These advancements make Neovim more suitable for those seeking a flexible, IDE-like environment without sacrificing performance. Ultimately, the choice between the two depends on your specific needs, but for a more feature-rich and modern editing experience, Neovim stands out as the better option.

## Thank You for reading this blog

---
