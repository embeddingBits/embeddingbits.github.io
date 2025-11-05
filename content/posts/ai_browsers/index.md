+++
date = '2025-11-05'
draft = false
title = 'The AI browser hype'
readTime = true
autonumber = true
toc = true
tags = ["AI", "browser", "automation"]
showTags = true
summary = "Why is there a sudden increase in the AI browser Hype"
+++

## What is an AI Browser?

So, basically an **AI Browser** is something that integrates Artificial Intelligence to automate tasks, summarise pages and much more.
There were **0 to no** AI Browsers until July when Perplexity decided to beta launch [Comet](https://www.perplexity.ai/comet) on July 22nd.

People are going crazy over this hype, they are booking tickets (by filling all the required details), applying jobs (submitting resume, filling up the questions and forms).
The new term for stuff like these are called **Agentic Browsing**.

## Are they safe? Do they ensure privacy?

Now asking the real question, how safe are they and whether they ensure privacy.

Personally, I'm nowhere closer to using an AI Browser, I have a fair share of important accounts logged in and I dont trust an LLM with my information. You're basically giving a rock that was trained with mathematics to deal with your browser automation, filling tickets, automating payments. AI does not know to differentiate between *genuine prompts* and *prompt injection* attacks.


For the people who aren't aware of **prompt injection**, it's a cyberattack made to exploit LLMs to perform unintended action. I saw this really interesting article where a user had performed a prompt injection as a reddit comment.

![injection](./injection.png)

In this injection, a comment in the post’s comment section sends a request to the Comet AI browser to open a link and then email certain details to a specified address, all without the user’s confirmation.

Another common form of prompt injection involves providing a PDF containing ANSI escape characters or whitespace language and asking the AI to read it. The AI then executes the actions embedded in the ANSI escape sequences instead of following the user’s actual request.

Personally, I don't owe my information to a malicious PDF or a reddit comment section. **Opera** has it's own AI browser called the Opera Neon, and Opera themselves have warned about prompt injection:

![opera](./opera_tnc.png)

We are nowhere near eliminating prompt injections in the near future, since it purely depends on the user to prevent the browser from falling for the injection attacks.
**Google** has made an effort to prevent prompt injection which ultimately makes the AI dumber than what it usually was.

LLMs are very prone to unexpected behaviour and will remain the same for at least the next few years, the market hype has led people to avoid researching a particular topic, tool, or software, resulting in major bugs and unexpected behavior being left unfixed. This leads to shorter release cycles that create more problems than a well-researched release would. 

I wanted to write about this since I've been noticing a lot more usage of AI browsers without precautions and side effects :(

## Bottom Note 

Browsers have been there for a while and they are one of the best creations of mankind and I can't imagine a world without them. They are also mature in terms of security as a result of multiple years of optimisation, fixes, reasearch and more.

The sense of an AI browser breaks years of maturity of security enhancement due to a software browsing on behalf of the user with or without the user's confirmation.

If we are still planning on using an AI browser, it is our responsibility to monitor every single action taken by the AI on behalf of the user and be a responsible digital user.

Thanks to Adam Convey on providing insights: [article](https://www.xda-developers.com/please-stop-using-ai-browsers/)
