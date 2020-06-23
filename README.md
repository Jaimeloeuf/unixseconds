# unixseconds
No nonsense / No Bullshit micro library to get CURRENT unix time in SECONDS.  

## Usage
Install
```sh
npm install unixseconds
```

```javascript
const unixseconds = require("unixseconds");
unixseconds(); // Current unix time in seconds.
```

## Details
- Purpose of this is to standardize how timestamp is dealt with throughout all our softwares
- Uses ```Math.trunc(Date.now() / 1000)``` internally.
    - Truncates instead of rounding, thus data lose.
    - Purpose is just to keep it simple
    - Has the same effect as using [Zero-fill right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) but using Math.trunc is more readable and understandable.
        - Take a look by running
            ```javascript
            // 1. Seconds with decimals representing milliseconds
            // 2. Seconds using Zero-fill right shift
            // 3. Seconds using Math.trunc
            console.log(Date.now() / 1000, Date.now() / 1000 >>> 0, Math.trunc(Date.now() / 1000))
            ```
- Uses common JS, so suitable for node or frontends with suitable build tools.
- Might not work on IE if ```Date.now``` is not available

## License
MIT