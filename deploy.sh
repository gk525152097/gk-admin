
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy - pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/gk525152097/gk525152097.github.io master

cd -

git add .

git commit -m 'deploy - repo - github'

git push
