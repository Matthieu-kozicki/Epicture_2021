module.exports = {
   about: {
      customer:{
         host:"10.101.53.35"
      },
      server:{
         current_time: 1531680780,
         services:[
            {
               name: "weather",
               widgets:[
                  {
                     name:"city_temperature",
                     description:"Display temperature for a city",
                     params:[
                        {
                           name:"city",
                           type:"string"
                        }
                     ]
                  }
               ]
            },
            {
               name:"rss",
               widgets:[
                  {
                     name:"article_list",
                     description:"Displaying  the  list of the  last  articles",
                     params:[
                        {
                           name:"link",
                           type:"string"
                        },
                        {
                           name:"number",
                           type:"integer"
                        }
                     ]
                  }
               ]
            }
         ]
      }
   }
}