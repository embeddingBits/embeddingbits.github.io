+++
date = '2025-12-31T21:52:16+05:30'
title = "SSH for remote git repos"
summary = "Using ssh for remote git repositories"
tags = ['git', 'ssh']
toc = true
showTags = true
draft = false
readTime = true
+++

## Introduction

There are different ways to connect to a remote git repository like GitHub, CodeBerg, GitLab, etc:
- HTTPS
- SSH

HTTPS is for beginners and for casual coding and SSH on the other hand is more secure, easy to work with and used by professionals and few beginners.\
The setup is fairly easier and once setup is really easy to work with.

### Setup

#### Step 1: Generate a ssh key

```bash
ssh-keygen -t ed25519 -a 100 -f ~/.ssh/git -C "git@tspamiitesh@gmail.com"
```

#### Step 2: Start the ssh agent
```bash
eval "$(ssh-agent -s)" # Depends upon the shell
ssh-add ~/.ssh/git
```

#### Step 3: Add ssh public key to GitHub
```bash
cat ~/.ssh/git.pub
```

Then,
- Open GitHub (or any remote git service) → Settings
- Go to SSH and GPG keys
- Click New SSH key
- Paste the key
- Save

#### Step 4: Test the ssh connection

```bash
ssh -T git@github.com
```

#### Step 5: Config File

```
Host *
    AddKeysToAgent yes
    IdentitiesOnly yes
    PreferredAuthentications publickey

Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/git
```

The above configuration is a really basic one and you can add up on many other features 

This is one of the most simplest ways to setup ssh
