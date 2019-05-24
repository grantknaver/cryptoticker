# CryptoTicker
Tracks the top 10 cryptocurrencies and provides
- Realtime price updates (Avaiable Now - Improvements Coming Soon)
- What exchanges you can buy the difference currencies (Coming Soon)
- Graphs depicting the prices for the last 7 days (Coming Soon)

# API References 
Binance : https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
- Provides price data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

#Setup 


# Upcoming Frontend Updates: 

Login Page
- Enable Password Recovery and build process

Register Page
- Match password input will use hasError instead of (repeatPassword !== password)
- Password control will use Validator.pattern and will have a custom html notification

Coins Page
- Customizable (targeted) information
- Charts

# Upcoming Backend Updates: 

General 
- Setup so ccxt.js serves everything
- Better scripting in package.json
- Implementation of dotenv (https://www.youtube.com/watch?v=zDup0I2VGmk) for better security.
(Ex. app.component.ts : apiKey && authDomain)

# Security 

- The apiKey and authDomain for the Firbase SDK have been removed from app.component.ts. 

