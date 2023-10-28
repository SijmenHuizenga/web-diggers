DATA_FILE=data/web-diggers-alpha

all: build run

build: build-webapp build-server

build-server:
	@cd server && cargo build

build-webapp:
	@cd webapp && npm ci && npm run build

run:
	npx concurrently 'cd server && cargo run' 'cd webapp && npm run dev'

refresh:
	@echo "Updating and converting data"
	@( which mlr ) || ( echo "Please install miller before continuing" && exit 1 );
	@mlr --icsv --from $(DATA_FILE).csv   --c2j --jlistwrap then case -l -k then cat > $(DATA_FILE).json
