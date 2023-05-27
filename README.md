<h3  align="center">
  <img alt="cgapp logo" src="https://clearsightadvisors.com/app/uploads/2020/06/Bigger-Perficient-Logo.png" width="144px"/><br/>
  DEL&A
</h3>
<p align="center">This is an internal project within <b>Perficient Latin America</b> that seeks to centralize all information related to projects and pursuits, as well as to track the entire flow of these.</p>

---

## Table of Contents

[Requirements](#requirements)  
[Useful Tools](#usefultools)  
[Installing and Previous Steps](#installing)  
[Running](#running)

## Overview And Scaffolding

In Progress...

<a name="requirements"/>

## Requirements

- [Node](https://nodejs.org/en/download) (16 or above)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [Docker](https://www.docker.com)

<a name="usefultools"/>

## Useful Tools

- [NX Editors' Extension](https://nx.dev/core-features/integrate-with-editors)
- [Postman](https://www.postman.com/downloads/)... or any other Rest Client you like
- [DBeaver](https://dbeaver.io/download/)... or any other Postgres DB Client you like

<a name="installing"/>

## Installing and Previous Steps

The easiest way to install the project is via `yarn`. Just open the terminal and navigate to the root folder, then run `yarn`. This will install all the dependencies needed.

Now you need to craete an environment file, just call it `.env` using the `.env.example` as your guide, and replace the values as you need.

Run the following command to run the database with docker: `docker compose up` (If you prefer, instead of using docker can install postgres database and run it the way you desire)

<a name="running"/>

## Running

This project uses [NX](https://nx.dev/getting-started/intro) as our tool to manage our monorepo. So we can use it to run one or more of the following apps.

#### A. Backend-Seeder

> **_NOTE:_** You only need to run this once, the first time you run the app.

This app populates you database tables, **_bu owner_** and **portfolio**, with the initial (adn probably final) data.

Navigate to the root folder of the project, execute `npx nx serve backend-seeder` and wait for the results. if this process ends and you want feel free to manually kill the execution of this app.

#### B. Backend

This is where our API rest lives. To run it, with the database already running, execute `npx nx serve backend-app`. If you want to perform requests, you can import the postman collection you'll find in the root folder as `delia-collection.json`.

#### C. Frontend

As. To run it, with the database already running, execute `npx nx serve frontend` or even `npx nx serve`. You can access to `http://localhost:4200/dashboard` to see the app dashboard.
