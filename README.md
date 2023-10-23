# CakePHP + vue 3 boilerplate

## Start project
```
docker compose up -d
```
## Setup

### CakePHP:
Install deps:
```
docker exec -i cakephp sh -c 'exec composer install'
```

### Frontend
Install deps:
```
docker exec -i frontend sh -c 'exec npm install'
```

Generate mix file:
```
docker exec -i frontend sh -c 'exec npm run dev'
```
or
```
docker exec -i frontend sh -c 'exec npm run watch'
```