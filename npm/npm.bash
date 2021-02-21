#Initlize your NPM repo
npm init


#Install jQuery
npm install jquery --save

#Install the Firebase CLI
npm i @firebase/cli -g

#Check the file size of node_modules
du -h ./node_modules/ #BIG, probably in GB(angular + angularfire + angularmaterials = ~53 GB)

ls .
#node_modules, package.json

#Publish your package
npm publish