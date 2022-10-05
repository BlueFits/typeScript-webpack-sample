# typeScript-webpack-sample

## Scripts

**Compile** 
Uses tsc to compile files and structure in the dist folder

**Serve** 
Uses webpack-dev-server to generate and compile  ts in memory (does not get generated in dist folder)

**Build**
Uses webpack and custom config serve to bundle optimized js file

# node-setup (barebones)

In this server, it just like any regular express app, except that typescript is being compiled into the dist folder, and the js file that is bundled there, is the one being run in node.
