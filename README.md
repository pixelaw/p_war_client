# Why this
I needed a blank canvas (hihi) to fully understand all the elements.
It turned out in rearchitecting everything from the ground up, mostly to be able to add bitmap tiles.

# What's new
- Separated the rendering (viewport) from the data (pixels and bitmap tiles)
- Pixels can now be show based on bitmap tile data from the server's "TileCacher" module
- Introduced "wrapping" around the unsigned int32 coordinate system. 
  - So to the left of x=0 is now x=4_294_967_295 but it all "just works"

# How to run it
please run [p_war](https://github.com/pixelaw/p_war) first.

```zsh
$ git clone git@github.com:pixelaw/p_war.git
$ cd ./p_war
```

then, please open the directory by using vscode, and build container with devcontainer.

```zsh
$ cd ../
$ git clone git@github.com:pixelaw/p_war_client.git
$ pnpm i
$ pnpm run dev
```

### Dev Notes
#### P_War
P_War is an app that takes place in a Struct called Game. A Game is set in a Board, an area of pixels where the Games’ rules takes precedence. When we were creating P_War, it was too exhaustive to create an actual Board in Katana. It was also a really slow process. And so, in the contract, the Board only consists of a height, width and the starting pixel location. The front end then creates the Board using that information. Please check: https://github.com/pixelaw/p_war_client/blob/5c5d2649f1f96b6da8e2eb430850c996253dd69f/src/App.tsx#L88C1-L125C20

As you might have noticed the Game’s Board uses the constant for GAME_ID. This is because we were only supposed to use GAME_ID 1 for the demo P_War. It should be possible to work with other Game Ids but the Game is an instance created when the P_War contracts are deployed and set up.

#### Usage of Custom Query Hooks
In the hooks folder, there are useQueries I’ve written to query from torii, because when we were developing, the dojo hooks were really slow. Instead of relying on them, we queried from torii ourselves and had it refetch from torii frequently. 