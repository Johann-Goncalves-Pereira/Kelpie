clean:
	rm -f public/js/index.*
	rm -f public/css/index.*
	rm -f public/index.html
	rm -rf node_modules
	rm -rf elm-stuff
dep:
	npm install

dev: dep
	npm run-script build:dev

prod: dep
	npm run-script build

