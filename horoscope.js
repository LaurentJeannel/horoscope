

exports.action = function(data){

var phrasehoroscope=JarvisIA.reco

function signes(phrasehoroscope){
	var signe=""
if (phrasehoroscope.search('cancer')>-1){signe='cancer'}
if (phrasehoroscope.search('lion')>-1){signe='lion'}
if (phrasehoroscope.search('scorpion')>-1){signe='scorpion'}
if (phrasehoroscope.search('balance')>-1){signe='balance'}
if (phrasehoroscope.search('poisson')>-1){signe='poissons'}
if (phrasehoroscope.search('vierge')>-1){signe='vierge'}
if (phrasehoroscope.search('bélier')>-1){signe='belier'}
if (phrasehoroscope.search('taureau')>-1){signe='taureau'}
if (phrasehoroscope.search('gémeaux')>-1){signe='gemeaux'}
if (phrasehoroscope.search('sagittaire')>-1){signe='sagittaire'}
if (phrasehoroscope.search('capricorne')>-1){signe='capricorne'}
if (phrasehoroscope.search('verseau')>-1){signe='verseau'}
if(signe==""){callback();return false}
scrap(signe)
}//fin fnct



function scrap(signe){


 request = require('request'); cheerio = require('cheerio');
 var url='https://www.horoscope.fr/horoscopes/horoscope_'+signe+'.html'
   request({ 'uri' : url , 'headers':{'Accept-Charset': 'utf-8'} }, function (err, response, body){
    		
    		var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });
   		
   			var a= $('div.text-wrapper:nth-child(1) > p:nth-child(3)').text()
   			console.log(a)
			var b=''

				for(var i=a.search(':')+1;i<a.length;i++){var b=b+a[i]} 

				var nomduplugin="horoscopemathilde"//ou autre nom....
				var valeurduspeak='pour les '+signe+' ; '+b//phrase à dire
			JarvisIASpeech(valeurduspeak+"|tu crois en ceci ?|ne crois pas tout ce que l'on te dis|ce n'est qu'une supposition")

				return false
	})//fin request

}//fin fnct scrap

signes(phrasehoroscope)

}    
