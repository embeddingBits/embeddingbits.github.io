+++
date = '2025-11-25'
draft = false
title = 'Guide to QEMU as a Virtual Machine'
readTime = true
autonumber = true
toc = true
tags = ["qemu", "vm", "linux"]
showTags = true
summary = "Using QEMU as a Virtual Machine"
+++

## Why QEMU?
There are lots of virtual machine software like VirtualBox and VMWare. But why specifically QEMU?

1. So, firstly, QEMU can emulate any software hardware:
    - ARM
    - AArch
    - RISC-V
    - MIPS
    - PowerPC

2. It does full system emulation like CPU, timers, interrupts, UART, SPI/I2C. VMWare and VirtualBox do not emulate real hardware, they virtualise generic PC hardware. QEMU gives you near native performance and deeper kernel intergration and is highly scalable.
3. There are many customisation that is possible with QEMU, it has virt-manager which provides a GUI to manage the VMs or we can use the normal command line.
4. They can easily be automated with either scripts or Makefiles.
5. They have really advanced I/O and storage features like Copy on Write (CoW), qcow snapshots and backing up files.
6. This is really useful when it comes to building Operating systems for different architecture while working in a system in another architecture and its really useful for baremetal embedded systems projects and experimenting with other architectures.

## Using QEMU to boot an ISO

To create a VM, we have to initialise a virtual hard disk.

- `qemu-img` is used to create and convert virtual hard disk files. 

- `create` flags tells `qemu-img` to create a virtual hard disk. 

- `-f qcow2` (QEMU Copy on Write) is the file format for QEMU, it is the native format for QEMU. 

- Then `os_image.img` is the name of the image that we are going to create and `10G` is the size allocation, this can be set according to user preference.

```bash
qemu-img create -f qcow2 os_image.img 10G
```

Next up, to launch the VM from a `iso`
- `qemu-system-x86_64` runs the qemu emulator for 64 bit x86 systems, this is available for almost all the other architectures too.
- `-enable-kvm` is to enable hardware acceleration using KVM (Kernel-based Virtual Machine).
- `-cdrom <iso_name>` specify the iso file as the CDROM file.
- `-boot menu=on` is enables a small boot menu at VM startup so you can choose boot device
- `-drive file=os_image.img` is attached.
- `-m 2G` is the RAM that we are going to allocate for the virtual machince to function. This is dependant on user preferences and the system capability.

```bash
qemu-system-x86_64 -enable-kvm -cdrom os.iso -boot menu=on -drive file=alpine.img -m 2G
```
