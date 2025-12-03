---
title: "Typst vs LaTeX"
date: "2025-12-03"
summary: "Typst and LaTeX: Differences and Use Cases"
toc: true
readTime: true
autonumber: true
tags: [documentation, latex, typst]
showTags: true
---

## Introduction

We are in an era of arising "modern" alternatives. Almost all of the software and hardware products that we are using has a modern alternative. 

People were using **Vim** and now there is an alternative called **Neovim**. **C/C++** has modern alternatives like **Rust** and **Zig**. **Zoxide** is a better alternative of the `cd` command. **Zellij** is an alternative of **tmux**.

Similarly, **LaTeX** has an easy alternative called **Typst**. LaTeX has been the best in what it has been doing for the past 4 years. LaTeX is a document preparation system and a typesetting language that is used to create professional documents which extensively uses complex scientific and mathematical equations.

Typst, similarly is a document preparation system which borrows its ideas and syntax from Markdown, LaTeX and other programming languages. It is much simpler than LaTeX, easier to debug and faster to prepare.

Typst is still developing and its growing much faster whereas on the other hand, LaTeX is much powerful and has been the standard for most of the research papers and articles.

## Syntax

``` latex
\documentclass{article}

\begin{document}

\section{Introduction}
This is the introduction to the document.

\subsection{Background}
Details about the background of the topic.

\subsubsection{Historical Context}
A brief overview of the historical context.

\section*{Acknowledgements}
Special thanks to everyone involved.

\end{document}
```

```typst
#set heading(numbering: "1.")

= Introduction
This is the introduction to the document.

== Background
Details about the background of the project.

== Historical Context
A brief overview of the historical context.

== Acknowledgements
Special thanks to everyone involved.
```

This is just a really simple demonstration to show the simplicity of LaTeX, but in larger documents LaTeX uses many macros and importing of several other libraries to achieve a simple structured document.

Similarly, writing math equations in Typst is really simpler than LaTeX

**LaTeX**
```latex
The quadratic equation is given by $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
```

**Typst**
```typst
The quadratic equation is given by $x = (-b  plus.minus (sqrt(b^2 - 4 a c))) / (2a)$
```

Typst is less cluttery to look at than LaTeX.


## Differences

### Learning Curve
- **LaTeX**: It has a really steep learning curve and a lot of packages to learn.
- **Typst**: It is really to learn and its much flatter than LaTeX.

### Compilation
- **LaTeX:** Compilation times are really long and debugging is really hard in LaTeX.
- **Typst:** Rapid compilation times and debugging is really than debugging in LaTeX.

### Language
- **LaTeX:**
    - The markup is really visible than the actual content.
    - There are many macros in the language
- **Typst:**
    - The syntax is really simple and the markup stays out of the way when editing.

### Packages

- **LaTeX:** There are many packages that are old and new and almost everything exists.
- **Typst:**
    - Fewer packages than compared to LaTeX.
    - The number of packages are rapidly growing
    - Many built-in functions which reduce the need for third party packages.


## Use Cases: When to Use What
### Use Typst When
- You want speed in writing and compiling.
- You’re writing:
        - Homework/assignments
        - Reports
        - Thesis drafts
        - Technical documentation
        - Notes
- You want good output without fighting the compiler.
- You need custom formatting or programmatic layouts.
- Best for:
    - Students
    - Engineers
    - Technical writers
    - Fast prototyping

### Use LaTeX When
- You are submitting to a journal/conference that requires LaTeX.
- You need:
    - Highly specialized math packages
    - Complex bibliography/citation requirements
    - TikZ-based graphics
    - Perfect control for scientific publications
- You’re using a template that only exists in LaTeX.
- You're producing textbooks, research papers, or books where full TeX power is necessary.
- Best for:
    - Academics
    - Scientific publishing
    - Journals, IEEE/ACM submissions
    - Math-heavy textbooks
    - Established research workflows


## Bottom Note 

Both softwares are excellent in their own ways. LaTeX has been around since 1984 and is more mature, stable, and extensively documented. Its the industry standard for research papers, academic publishing, complex mathematical typesetting, and large technical documents.

Typst, introduced in 2023, is a modern alternative that focuses on speed, simplicity, and a more intuitive syntax. It is especially useful for class assignments, note-taking, project reports, and general documentation, where quick iteration and readability matter more.

While LaTeX still dominates in formal publishing workflows, Typst is rapidly evolving and becoming a strong choice for students and developers who want clean, beautiful documents with less overhead.
