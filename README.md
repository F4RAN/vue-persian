easy to use vue digits convertor

**Demo:**  [http://byParsa.me/Plugins/vue-persian](http://byParsa.me/Plugins/vue-button-icon)

## vue-persian
### Install

    npm install vue-persian --save


### Configuration: 
Import plugin in your  `main.js`  file globally.

    import vuePersian from  'vue-button-icon';
    Vue.use(vuePersian)

## Usage:
we have two types of function in `vue-persian`

**1 - $persianDigits('everything') :** 
you pass your String or everything to this function and this function returns 
just persian digits of your variable

example : 

    $persianDigits('hello123hello4') => // Returns '۱۲۳۴'

you can use this function in your project anywhere 

**2 - $stringDigits('everything') :** 
you pass your String or everything to this function and this function just convert your digits to persian and returns persian digits and rest of your variable

example : 

    $stringDigits(' 1234 : سلام اعداد من فارسی می شوند') => // Returns 'سلام اعداد من فارسی می شوند : ۱۲۳۴ '
    $stringDigits('hello123hello4') => // Returns 'hello۱۲۳hello۴'

you can use this function in your project anywhere too


## Example:
 

    <div> {{$stringDigits('123hh4')} </div>
    <div v-html="$stringDigits('123hh4')"></div>
you can use it in input if your client writes : hello1234

    <input  type="text" :value="value" @input="value = $stringDigits($event.target.value)" /> 
    .
    .
    .
    export  default {
    	data(){
    		return{ 
    			value:''
    		}


input shows : hello۱۲۳۴



<a href="http://byparsa.me">Contact me</a>