---
title: "Configuring Tmux"
date: "2025-01-30"
summary: "Configuring a really simple tmux config"
toc: true
readTime: true
autonumber: true
tags: ["linux", "terminal", "tmux"]
showTags: true
---

## Introduction

Welcome to this blog where I will be taking you through certain steps to get your own **tmux configuration**.

First of all, let's see: **What is Tmux? and Why is it used?**

**Tmux** stands for **Terminal Multiplexer** and is used in Unix-like operating systems. It allows you to use **multiple terminal sessions in a single terminal window**. Even if the actual terminal window closes, the tmux session runs in the background and can be accessed with the name of the session — which is helpful when we accidentally close the session without saving changes.

Here’s how we can use tmux:

<div align="center">
  <video src="recording.mp4" height="1500" width="1000" autoplay controls></video>
</div>

In the above video, I opened a tmux session, created three split panes, created a tmux window, closed the terminal, and reattached using the session name `"test"`.

The **default configuration** for tmux is good, but we can add our own **plugins**, **colorschemes**, **custom keybinds**, and more. Configuring tmux is **not a tough job** and is relatively easy. I use a simple minimal tmux configuration — and I’ll take you through the steps to achieve it.

---

## Getting Started

To begin, locate the tmux configuration file:

```bash
~/.tmux.conf
```

Open it with your favorite editor.

The **first step** is to create a shortcut to **reload the config** without restarting tmux:

```tmux
unbind r
bind r source-file ~/.tmux.conf
```

> Now press `Ctrl+s`, then `r` to reload the config instantly.

---

## Rebinding the default prefix

By default, tmux uses **`Ctrl+b`** as the prefix. This is not ergonomic.

We’ll change it to **`Ctrl+s`** (you can choose any):

```tmux
set -g prefix C-s
```

Now your config looks like:

```tmux
unbind r
bind r source-file ~/.tmux.conf
set -g prefix C-s
```

---

## Adding mouse support

Tmux is **keyboard-driven by default** — no mouse.

Enable it with:

```tmux
set -g mouse on
```

```tmux
unbind r
bind r source-file ~/.tmux.conf
set -g prefix C-s
set -g mouse on
```

---

## Setting tmux status bar position

Move the status bar to the **top** to avoid confusion with Vim/Neovim status lines:

```tmux
set-option -g status-position top
```

```tmux
unbind r
bind r source-file ~/.tmux.conf
set -g prefix C-s
set -g mouse on
set-option -g status-position top
```

---

## Installing Tmux Plugin Manager (TPM)

We’ll use **[TPM](https://github.com/tmux-plugins/tpm)** to install plugins.

Clone it:

```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

Add to `~/.tmux.conf`:

```tmux
# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'

# Initialize TMUX plugin manager (keep this at the bottom)
run '~/.tmux/plugins/tpm/tpm'
```

> **Reload tmux config** (`Ctrl+s`, `r`) and press `Ctrl+s`, `I` (capital I) to install plugins.

---

## Adding colorscheme

Add your favorite theme under `# List of plugins`. I use **Nord**:

```tmux
set -g @plugin "nordtheme/tmux"
```

Full config so far:

```tmux
unbind r
bind r source-file ~/.tmux.conf
set -g prefix C-s
set -g mouse on
set-option -g status-position top

# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin "nordtheme/tmux"

# Initialize TMUX plugin manager (keep this line at the very bottom)
run '~/.tmux/plugins/tpm/tpm'
```

> Reload (`Ctrl+s`, `r`) → Install plugins (`Ctrl+s`, `I`)

---

## Conclusion

Here’s your **final minimal `.tmux.conf`**:

```tmux
unbind r
bind r source-file ~/.tmux.conf
set -g prefix C-s
set -g mouse on
set-option -g status-position top

# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin "nordtheme/tmux"

# Initialize TMUX plugin manager (keep this line at the very bottom)
run '~/.tmux/plugins/tpm/tpm'
```

I hope you got your own config that fits you too.

**All Tmux Plugins:**  
[List of Tmux Plugins](https://github.com/rothgar/awesome-tmux?tab=readme-ov-file)

Hope this blog has helped you get a **starter tmux configuration** — and if you liked it, please follow up on future blogs!

