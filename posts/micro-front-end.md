---
title: 'Micro front-end'
date: '2020-11-28'
author: 'Érick Kenji Sugahara'
categories: 'front-end, setup'
---

To build a new front-end setup, exist a lot of technologies to build a new project and various types of architectures to use. In this post we will see the micro front-end architecture and your benefits and some cautions points.

# What is micro front-end?

A simple explanation is a front-end application building with various small applications. A classic example is split a login application from the rest os application.

# How this can help?

Simple, the most powerful benefit of this architecture is the isolated maintenance, build and deploy of application.

Another benefit is you can use differents types of technologies in the same project. A examples is use react and angular in the same application.

# Why all the companies don't use?

Split the application in front-end is not the same of split a back-end application. In the front-end you need respect the design pattern and some flow rules of redirect, is not too simple manage and keep the consistency.

# How i can build a micro front-end?

You have some options, the most commons is:

* Use NGINX or another redirect api to use a reverse proxy;

* Use a orchestrator to redirect between apis;

* Use a package builder like webpack to build part of application;

* Use single-spa to build a application;
