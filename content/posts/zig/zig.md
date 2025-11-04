---
title: "Zig Programming Language"
date: "2024-12-30"
summary: "Zig's features"
toc: true
readTime: true
autonumber: true
tags: ["zig", "c", "language"]
showTags: true
---


## Introduction

Zig is a modern programming language that is meant to be the successor of C programming language. Zig is a general-purpose programming language and toolchain for maintaining **robust, optimal and reusable software**. There is no hidden control flow, no hidden memory allocations and no preprocessors and macros as in C.

Zig has a very important and maybe the standout feature of the language and a new approach to metaprogramming. In Zig, we can call the functions at **compile time** and the datatypes can be assigned at **compile time** and much more to it.

## What Makes Zig Special

Zig is built on three big ideas: it’s **simple**, it’s **fast**, and it gives you **control**. Unlike some languages that make things complicated or force rules on you, Zig keeps things clear and lets you decide what to do.

Here’s a simple Zig program that says hello:

```zig
const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, {s}!\n", .{"Zig"});
}
```

This code prints `"Hello, Zig!"` to your screen. The `!void` part means the program might fail, and Zig makes sure you know it. We’ll talk more about that later.

## Managing Memory in Zig

Memory is like space your program uses to store things. In Zig, **you get to decide how to use that space**—no automatic system does it for you. This makes your program fast and safe.

Here’s an example of making a list of numbers:

```zig
const std = @import("std");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer gpa.deinit(); // Cleans up when done
    const allocator = gpa.allocator();

    // Make a list of 5 numbers
    var numbers = try allocator.alloc(i32, 5);
    defer allocator.free(numbers); // Free the list later

    // Fill the list with numbers 0 to 4
    for (numbers, 0..) |*num, i| num.* = @intCast(i32, i);

    const stdout = std.io.getStdOut().writer();
    try stdout.print("List: {any}\n", .{numbers});
}
```

**What’s happening here:**

- **You Choose:** You tell Zig how to create and free the list.
- **Cleanup:** `defer` makes sure the list is deleted when you’re done.
- **Safety:** Zig checks everything when you build the program.

This way, you avoid mistakes like losing track of memory or using it twice by accident.

## Handling Problems in Zig

Zig doesn’t hide problems—it **tells you when something might go wrong** and helps you fix it. It uses a special way to show if a task worked or failed.

Here’s an example of reading a file:

```zig
const std = @import("std");

pub fn readFile(allocator: std.mem.Allocator, path: []const u8) ![]u8 {
    var file = try std.fs.cwd().openFile(path, .{});
    defer file.close();
    const size = try file.getEndPos();
    const buffer = try allocator.alloc(u8, size);
    _ = try file.readAll(buffer);
    return buffer;
}

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer gpa.deinit();
    const allocator = gpa.allocator();
    const stdout = std.io.getStdOut().writer();

    const content = readFile(allocator, "example.txt") catch |err| {
        try stdout.print("Oops! Something went wrong: {}\n", .{err});
        return;
    };
    defer allocator.free(content);

    try stdout.print("File says: {s}\n", .{content});
}
```

**What’s going on:**

- **Success or Fail:** The `!` means this might work or might not.
- **Try:** Tries something and checks if it fails.
- **Catch:** If it fails, this part runs to handle the problem.

This makes sure you always know what’s happening—no surprises!

## Wrapping Up

Zig is great for people who like to keep things **simple and clear**. It lets you control your program’s memory and **warns you about problems before they ruin everything**.

Here’s the full file-reading code again:

```zig
const std = @import("std");

fn readFile(allocator: std.mem.Allocator, path: []const u8) ![]u8 {
    var file = try std.fs.cwd().openFile(path, .{});
    defer file.close();
    const size = try file.getEndPos();
    const buffer = try allocator.alloc(u8, size);
    _ = try file.readAll(buffer);
    return buffer;
}

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer gpa.deinit();
    const allocator = gpa.allocator();
    const stdout = std.io.getStdOut().writer();

    const content = readFile(allocator, "example.txt") catch |err| {
        try stdout.print("Oops! Something went wrong: {}\n", .{err});
        return;
    };
    defer allocator.free(content);

    try stdout.print("File says: {s}\n", .{content});
}
```

Want to learn more? Check out Zig’s home on **GitHub:** [https://github.com/ziglang/zig](https://github.com/ziglang/zig)

Have fun exploring Zig!

---
