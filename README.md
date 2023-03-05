# Vue Bank - assignment app

## View live demo at: https://vuebank.michalantczak.com

1. Navigate to [Acccounts](https://vuebank.michalantczak.com/accounts) - to see core functionality

## Table of Contents

- [Installation:](#Installation)
- [Workspaces:](#Workspaces)
  - [1. VueBank Client](#1-insights-client)
  - [2. Server](#2-insights-mfe-playground)

## Installation:

#### Note:

**This instruction assumes you have `node` and `npm` already installed**
**This repository uses `pnpm` package manager. You need the `pnpm` to be installed globally on your machine.**
**The recommended version of `node` is at least `16.0.0`**

1. To install `pnpm` run:

`npm i -g pnpm`

2. To install dependencies for all the workspaces run:

`pnpm install`

3. To run app in development mode:

`pnpm run app:dev`

4. To run unit tests for client:

`pnpm run app:test`

## Workspaces:

### 1. VueBank Client

VueBank Client - this is the actual front-end layer of the application. It is written in `Vue` and `typescript`.

### 2. Server

Server - this is a backend for serving compiled version of front-end layer and serving data consumed by client. It is written in `nodejs` with `express` and `typescript`
