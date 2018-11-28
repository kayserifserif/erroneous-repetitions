# Erroneous Repetitions

> Quotation, n: The act of repeating erroneously the words of another.

—Ambrose Bierce

Generates a random selection from my personal collection of quotes.

## Installation
1. Install [nvm](https://github.com/creationix/nvm#install-script)
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
2. Install [node](https://nodejs.org/en/)
```
nvm install node
```
3. Install package
```
npm install
```
4. Install [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)

On macOS with Homebrew:
```
brew install mongodb
```
5. Create data directory
```
mkdir -p /data/db
```

## Setup
In separate windows:
1. Run MongoDB
```
mongod
```
2. Begin using MongoDB
```
mongo
```
3. Start the app
```
npm start
```