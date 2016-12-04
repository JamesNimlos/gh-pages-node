#gh-pages-node
a node based script for adding or updating gh-pages from a specific distribution directory.

#####Usage:
```sh
# clone the repo
git clone git@github.com:JamesNimlos/gh-pages-node.git

# simlink it to your bin
ln -s gh-pages-node/gh-pages-node /usr/local/bin/gh-pages-node

# navigate to your project with gh-pages to publish
cd ~/path/to/project

# run your buid script, probably:
npm run build

# use the tool
gh-pages-node dist gh-pages
```

Boom, you're killing it with some sweet gh-pages.

[![Abed celebrates](http://i.giphy.com/zPVRKhPsUP5lK.gif)](http://gph.is/29lbuHC)