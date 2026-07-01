# Runescape's Progression Graph

The objective of this site is to provide a very visual, light and all-compassing reasonable Ironman gear progression map for someone to follow.
Idea is very simple: React Flow for a graph visualization, each node is: toggleable green for you to map what you've done, each node also needs a card to contain useful notes to assist people in making their choices.

Choices need to be storaged in cookies somehow. Site needs to ask for cookie permission.

No backend, and only external resource is the wiki to steal the item miniatures (and maybe discord images). Not sure how CORS will apply to this.

Currently in development!
I have no idea where i'm going to host it.

npm run dev

lmao

# Roadmap

1 - Implement Floating Edges
2 - Browser cache holds the state of the graph (DONE)
3 - Clicking on an element opens a pop-up with following text
4 - Edges are dotted when the they're attached to the "most below" node
5 - Actually make the missing content
6 - Cookie permission pop-up i guess

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

