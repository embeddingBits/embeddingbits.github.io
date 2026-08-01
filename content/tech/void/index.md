+++
date = '2026-08-01'
title = 'Void Linux Installation'
summary = "A small guide to what I did when I installed Void Linux"
tags = ['linux', 'tech']
toc = true
showTags = false
draft = false
readTime = true
+++

## Void Linux Installation

I had been using Arch Linux for quite a while and I had switched to NixOS for about two months now. Only reason of me switching was cause of buzzwords. I switched to NixOS cause I wanted to try out the declarative environment. Now, finally I actually wanted to try out an init system other than systemd cause why not.


## Installation

The Void Linux ISO choices were pretty interesting as they give an option for a musl and glibc implementation of libc. Though, I did choose glibc cause its pretty much popular and way more battle tested than musl.

The installation was pretty straight forward and as easy as archinstall script. I liked the fact that you have to manage the groups yourself cause of `runit`.

### Packages 

Void be default allows only free packages in its repo. So, I had to install nonfree repo packages for proprietary software.
```bash
sudo xbps-install -S void-repo-nonfree void-repo-multilib void-repo-multilib-nonfree
sudo xbps-install -Syu
```

Void repos are relatively much smaller than the AUR and nixpkgs, so a lot of the packages was still missing. To cover that up and added flathub remote to it:
```bash
sudo xbps-install -S flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## Init System

Void Linux uses runit as its init system. As a long-time user of systemd, it took me time to get used to it. But man, I have to give it to runit. Its codebase is small, and it is much, much faster than systemd. Sometimes, when a particular software is referred to as faster, we don't really see the difference, but runit was much faster and it was really evident.

## Intel and NVIDIA Drivers

I installed intel drivers and proprietary dkms nvidia drivers.

```bash
sudo xbps-install -S vulkan-loader mesa-vulkan-intel intel-video-accel
sudo xbps-install nvidia
```

Nvidia only works if you enable the non free repo, there is an option for open source noveau drivers but I wanted to stability so I chose the dkms as always.

## Network Configuration

Void Linux uses dhcpcd as the default networking service. But, I use NetworkManager. 

```bash
sudo xbps-install NetworkManager
sudo rm -rf /var/service/dhcpcd
sudo ln -s /etc/sv/NetworkManager /var/service
```

## Audio Servers

This is the place where I had some hardships trying to configure the audio server. But, this was just me. Coming from systemd, systemd runs audio servers as a service, but runit runs audio server as a per user session in the process.

```bash
sudo xbps-remove pulseaudio
sudo xbps-install -S pipewire wireplumber alsa-pipewire
```

Then, write a script to autostart pipewire, wireplumber and pipewire-pulse for pulseaudio support.

These were the things that I had to do to install Void Linux and so far I've been having a good time with it. Let's see if it came be my long time distro.

**Thanks for Reading :)**
