export const BeautifulPlayFont = '{"headlineFont" : "Roboto", "regularTextFont" : "Roboto", "linksFont" : "Roboto", "subHead" : "Roboto"}';

const BeautifulPlayStyleJSON = {
   "basicStyles":{
      "h1FontSize":"60",
      "h2FontSize":"40",
      "RegularFontSize":"20",
      "LinksColor":"#ffff",
      "LinksHover":"#021528",
      "MenuLinksPosition":"center",
      "headerBackground":"#0B2C56",
      "buttonsBackground":"transparent",
      "buttonsColor":"#ffff",
      "borderRadius":"0",
      "border":"3"
   },
   "sections":[
      {
         "name":"about",
         "type":"text",
         "style":{
            "background":"#0B2C56",
            "color":"#fff",
            "headlineColor":"#fff",
            "displayHeadline":"false"
         },
         "content":""
      },
      {
         "name":"merch",
         "type":"merch",
         "style":{
            "background":"#021528",
            "color":"#fff",
            "headlineColor":"#fff",
            "displayHeadline":"true"
         },
         "content":""
      },
      {
         "name":"Upcoming Shows",
         "type":"events",
         "style":{
            "background":"#0B2C56",
            "color":"#fff",
            "headlineColor":"#fff",
            "displayHeadline":"true"
         },
         "content":""
      }
   ]
}


export const BeautifulPlayStyle = JSON.stringify(BeautifulPlayStyleJSON);
