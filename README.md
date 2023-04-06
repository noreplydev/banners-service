# Banners-service
On this service you can generate banners dynamically passing parameters as url. The services converts an Html template into a image and returns it. 

###  Test it
You can test it on the following url:

```
https://banners-service.onrender.com/rust-course/01/rust%20banner
```

The url is composed by the following parts:

```
https://banners-service.onrender.com/{template}/{cap}/{topic}
```
but this params can be modified as you want changing express configurations (Also you can add more templates and endpoints).

## How to run it

### Clone the repo

```
git clone https://github.com/sanchez-cristian/banners-service.git
```

### Install dependencies

```
npm install
```

### Run it

```
npm start
```

### Used libraries

- [express](https://expressjs.com/)
- [node-html-to-image](https://www.npmjs.com/package/node-html-to-image)
- [dotenv](https://www.npmjs.com/package/dotenv)


