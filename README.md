# aspire
It is a Vue Js website built mainly for mobile screen. Destop screen to be developed soon.
I have used various Vue JS functionalities such as Props, Computed Properties, Slots, Vuex, Watcher, Components, Custom Events.
Data in this application is mocked using the MWC and Faker JS.

Mock Service Worker: API Mocking for Vue.js Development & Testing:
https://www.vuemastery.com/blog/mock-service-worker-api-mocking-for-vuejs-development-testing/

It has various functionality such as:
1. New Card
2. Show Card Number
3. Freeze Card
4. Cancel Card

Website is hosted on Netlify: https://dhairya-aspire.netlify.app

It is using different library listed below: 
"@beyonk/google-fonts-webpack-plugin": "^1.7.0", - For loading google fonts
"@faker-js/faker": "^6.0.0-alpha.7", - For generating fake data in bulk
"axios": "^0.26.0", - For calling the api asyncronously
"msw": "^0.38.1", - For setting the mocking server for API
"vue-carousel": "^0.18.0", - For showing the carousel
"vue-router": "^3.2.0", - For adding different routes in the Single Page Application
"vuex": "^3.4.0", - For State Management and storing and using data accross components and views



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Website is hosted on Netlify: https://dhairya-aspire.netlify.app