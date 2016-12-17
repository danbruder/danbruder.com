---
title: Build your own operating system
date: 1481976132000
tags: programming
---

I've spent the past year working on infrastructure for development and deployment of [Drupal](http://www.drupal.org) based projects. At my day job, we have a bunch of Drupal sites that we manage and build features for, as well as (for many of them) provide hosting support and maintenence.

We have been hard at work building a 🐳 [Docker](www.docker.com) based system. We set out to do this with these goals in mind:

- Simplifying software version management
- Making software updates easy
- Supporting any combination of technology needed for the project

There are a lot of tools out there for using Docker in production. We have settled on [Rancher](http://rancher.com), among others. Sadly, there are still major gaps in what is available for developing efficiently with Docker locally. Especially if your project is PHP based and you develop on macOS.

... More to come here about what we are doing.

This has made me want to learn all the nitty gritty of what makes an operating system. I found this gem: [https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf](https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf) and have been really enjoying the read. 

For some reason I have this desire to build things to know how they work.

- OS
- Distributed Key value store
- CDN
- Analytics provider
- Video Chat service
