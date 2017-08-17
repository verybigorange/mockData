var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var dataLevel1 = [
        {
          name: '四川省',
          temperature: 30,
          people: '2000',
          isHasChildren:true,
          id:"sichuan",
          url:"/data/level2"
        },
        {
            name: '云南省',
            temperature: 20,
            people: '1000',
            isHasChildren:true,
            id:"yunnan",
            url:"/data/level2"
        },
        {
            name: '北京市',
            temperature: 10,
            people: '1500',
            id:"beijing",
        }
      ]
    res.send(dataLevel1)
});

router.post('/level2',function(req,res){
    var data = [];
    switch(req.body.id){
        case 'sichuan':
            data = [
                {
                    name: '成都市',
                    temperature: 28,
                    people: '1000',
                    isHasChildren:true,
                    id:"chengdu",
                    url:"/data/level3"
                },
                {
                    name: '绵阳市',
                    temperature: 22,
                    people: '500',
                    id:"mianyang",
                }
            ]
            break;
        case 'yunnan':
            data = [
                {
                    name: '大理',
                    temperature: 12,
                    people: '200',
                    id:"dali"
                },
            ]
            break;
    }
    res.send(data);
});

router.post('/level3',function(req,res){
    var data = [];
    switch(req.body.id){
        case 'chengdu':
            data = [
                {
                name: '武侯区',
                temperature: 27,
                people: '560',
                
                id:"shuangliu",
                
                },
                {
                    name: '成华区',
                    temperature: 26,
                    people: '500',
                    id:"chenghua",
                }
            ]
            break;
    }
    res.send(data);
})

module.exports = router;
