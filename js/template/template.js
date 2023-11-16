// export let URLLogin = `https://us-central1-fahad-402509.cloudfunctions.net/gis5login`
// export let token = 'token';

import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://us-central1-fahad-402509.cloudfunctions.net/gis-gcf";
export let urlPostGCF = "https://us-central1-fahad-402509.cloudfunctions.net/postloc";
export let UrlLogin = "https://us-central1-fahad-402509.cloudfunctions.net/hadlogin-gis"
export let UrlRegister = "https://us-central1-fahad-402509.cloudfunctions.net/gisregis"
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = ""
export let cookie = getCookie("Login")
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`