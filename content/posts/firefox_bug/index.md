+++
date = '2025-11-25'
draft = false
title = 'Firefox fixed a 21 year old issue'
readTime = true
autonumber = true
toc = true
tags = ["firefox", "bugfix", "linux"]
showTags = true
summary = "Firefox fixed a 21 year old bug"
+++

# Firefox 147 to support the XDG Base Directory Specification

This update addresses a bug that was raised in Bugzilla 21 years ago [(Bug 259356)](https://bugzilla.mozilla.org/show_bug.cgi?id=259356&utm_source=syndication). The bug requested that Firefox support the XDG Base Directory Specification. It was finally fixed after 21 years and will be released in Firefox 147.

The [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir/latest/) defines folder and file structures for applications to store configs, cache, user data, and runtime information. These are usually stored at `~/.config`, `~/.cache`, and `~/.local`. Until this date, Firefox stored all its application data under `~/.mozilla` which requires a skill of it's own to navigate through the file structure to edit the configs and user data.

It is happy to see Mozilla still caring about its Linux users and getting these bugs and issues fixed, despite years having passed since the opening of the issue.

Ultimately, this change brings Firefox to support Linux desktop standards. For users who obsess over directory hygiene and dotfile management, the removal of the legacy `~/.mozilla` folder is a long awaited victory. It is a small change in code, but a significant step toward making the browser feel like a true native citizen of the Linux ecosystem.
