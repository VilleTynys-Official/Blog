import axios from 'axios';
export  default axios.create({
    baseURL: 'http://dfc216e5.ngrok.io' /////UUSI TÄMÄ KOSKA NGROK 8H LIMIT!!!!!!
    
});


/**
 * api toimimaan
 * 1. käynnistä json server
 *          npm run db
 * 2. käynnistä ngrok  ja testaa et URL toimii selaimessa
 *          npm run tunnel     (jsonserver kansiossa) 
 * 3. päivitä baseURL yläpuolla.
 * 4. nyt pitäisi toimia..
 * 
 * jos on onkelmia nii kokeile esim. vaihtaa json serverin portti
 * 
 */


