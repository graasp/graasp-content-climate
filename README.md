# Graasp Climate Landing Page

[Landing page](https://climate.graasp.org) for the suite of interactive web applications for investigating the science of global warming, which were built by the Graasp team and its collaborators in 2021.

The landing page contains links to the applications, a _Team_ section, a contact form, and logos of the project's sponsors.

![screenshot](https://user-images.githubusercontent.com/19311953/138866621-f55abf6f-b78a-48bf-bb12-cdc1d52c92d1.png)

## Getting Started

To edit and view the website in your local environment, follow the instructions below.

### Prerequisites

Make sure you have GatsbyJS installed. If you don't, click [here](https://www.gatsbyjs.org/docs/preparing-your-environment/) for installation instructions.

### Installation

1. After cloning the repository, run `yarn install`.
2. Run `yarn start` to launch the project on a live local server. By default, the project will launch on [http://localhost:8000](#).
3. Edit the source code! The main content of the site is located in `/src/subpages`. When you finish editing, save your changes, and Gatsby will automatically reload [http://localhost:8000](#) to reflect them.

### Deployment

When you are ready to deploy the website:

1. Run `yarn build`.
2. Deploy the website to the development environment ([https://climate.dev.graasp.org](https://climate.dev.graasp.org)) by running `./scripts/deploy.sh -e .env.dev`.
3. Deploy the website to production ([https://climate.graasp.org](https://climate.graasp.org)) by running `./scripts/deploy.sh -e .env.prod`.

## Credits

The landing page was adapted from the [Krisp template](https://github.com/algokun/gatsby-starter-krisp) by [algokun](https://github.com/algokun).
