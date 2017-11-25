var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/header.json', function(req, res, next) {
  res.json({
		"ret":true,
		"data":{
			"list":[{
				"title":"大家说英语",
				"id":"1",
				"link":"/list/1"
			},{
				"title":"空中英语教室",
				"id":"2",
				"link":"/list/2"
			},{
				"title":"彭蒙惠英语",
				"id":"3",
				"link":"/list/3"
			},{
				"title":"科学美国人",
				"id":"4",
				"link":"/list/4"
			},{
				"title":"冬吴相对论",
				"id":"5",
				"link":"/list/5"
			},{
				"title":"走遍美国",
				"id":"6",
				"link":"/list/6"
			},{
				"title":"英文名著",
				"id":"7",
				"link":"/list/7"
			},{
				"title":"托福考试",
				"id":"8",
				"link":"/list/8"
			},{
				"title":"美国脱口秀",
				"id":"9",
				"link":"/list/9"
			},{
				"title":"BBC听力资料",
				"id":"10",
				"link":"/list/10"
			},{
				"title":"外教课堂",
				"id":"11",
				"link":"/list/11"
			}],
			"standardEnglish":[{
				"title":"音频",
				"id":1,
				"link":"nav/standard-english/audio"
			},{
				"title":"视频",
				"id":2,
				"link":"nav/standard-english/video"
			},{
				"title":"翻译",
				"id":3,
				"link":"nav/standard-english/translation"
			}],
			"specialEnglish":[{
				"title":"科技报道",
				"id":1,
				"link":"nav/special-english/1"
			},{
				"title":"词汇掌故",
				"id":2,
				"link":"nav/special-english/2"
			},{
				"title":"美国故事",
				"id":3,
				"link":"nav/special-english/3"
			},{
				"title":"时事新闻",
				"id":4,
				"link":"nav/special-english/4"
			},{
				"title":"经济报道",
				"id":5,
				"link":"nav/special-english/5"
			},{
				"title":"建国史话",
				"id":6,
				"link":"nav/special-english/6"
			},{
				"title":"教育报道",
				"id":7,
				"link":"nav/special-english/7"
			},{
				"title":"自然探索",
				"id":8,
				"link":"nav/special-english/8"
			},{
				"title":"健康报道",
				"id":9,
				"link":"nav/special-english/9"
			},{
				"title":"美国万花筒",
				"id":10,
				"link":"nav/special-english/10"
			},{
				"title":"科学动态",
				"id":11,
				"link":"nav/special-english/11"
			},{
				"title":"农业报道",
				"id":12,
				"link":"nav/special-english/12"
			},{
				"title":"美国专栏",
				"id":13,
				"link":"nav/special-english/13"
			},{
				"title":"美国人物",
				"id":14,
				"link":"nav/special-english/14"
			}],
			"teachingEnglish":[{
				"title":"流行美语",
				"id":1,
				"link":"nav/teaching-english/1"
			},{
				"title":"美语三级跳",
				"id":2,
				"link":"nav/teaching-english/2"
			},{
				"title":"美国习惯用语",
				"id":3,
				"link":"nav/teaching-english/3"
			},{
				"title":"学个词",
				"id":4,
				"link":"nav/teaching-english/4"
			},{
				"title":"AS IT IS",
				"id":5,
				"link":"nav/teaching-english/5"
			},{
				"title":"体育美语",
				"id":6,
				"link":"nav/teaching-english/6"
			},{
				"title":"美语怎么说",
				"id":7,
				"link":"nav/teaching-english/7"
			},{
				"title":"商务礼节美语",
				"id":8,
				"link":"nav/teaching-english/8"
			},{
				"title":"美国万花筒",
				"id":9,
				"link":"nav/teaching-english/9"
			},{
				"title":"美语咖啡屋",
				"id":10,
				"link":"nav/teaching-english/10"
			},{
				"title":"中级美语",
				"id":11,
				"link":"nav/teaching-english/11"
			},{
				"title":"美语训练班",
				"id":12,
				"link":"nav/teaching-english/12"
			},{
				"title":"VOA每日一课",
				"id":13,
				"link":"nav/teaching-english/13"
			},{
				"title":"OMG美语",
				"id":14,
				"link":"nav/teaching-english/14"
			},{
				"title":"VOA相关资料",
				"id":15,
				"link":"nav/teaching-english/15"
			}]
		}
	})
});

router.get('/index.json', function(req, res, next) {
  res.json({
		"ret":true,
		"data":{
			"list":[{
				"id":0,
				"link":"/detail/0",
				"category":"空中英语教室",
				"title":"本年度亚洲最敬爱英文教学奖：《空中英语教室》系列杂志",
				"time":null
			},{
				"id":20,
				"link":"/detail/20",
				"category":"AS IT IS",
				"title":"Gerald Ford: Unelected",
				"time":"(2017-11-20)"
			},{
				"id":21,
				"link":"/detail/21",
				"category":"AS IT IS",
				"title":"Too Much Tourism?",
				"time":"(2017-11-20)"
			},{
				"id":22,
				"link":"/detail/22",
				"category":"科技报道",
				"title":"Scientists: CO2 Levels Will Rise This Year",
				"time":"(2017-11-20)"
			},{
				"id":23,
				"link":"/detail/23",
				"category":"科技报道",
				"title":"American Women Try to Break Barriers in Show Business",
				"time":"(2017-11-20)"
			},{
				"id":1,
				"link":"/detail/1",
				"category":"AS IT IS",
				"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
				"time":"(2017-11-17)"
			},{
				"id":2,
				"link":"/detail/2",
				"category":"AS IT IS",
				"title":"Small Montana City Elects Former Refugee as Mayor",
				"time":"(2017-11-17)"
			},{
				"id":3,
				"link":"/detail/3",
				"category":"AS IT IS",
				"title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
				"time":"(2017-11-17)"
			},{
				"id":4,
				"link":"/detail/4",
				"category":"VOA常速英语",
				"title":"Clearing Explosive Remnants of War in the West Bank",
				"time":"(2017-11-17)"
			},{
				"id":5,
				"link":"/detail/5",
				"category":"AS IT IS",
				"title":"Japan Seeks to Expand Influence in Southeast Asia",
				"time":"(2017-11-16)"
			},{
				"id":6,
				"link":"/detail/6",
				"category":"科技报道",
				"title":"Distant Star Refuses to Die",
				"time":"(2017-11-16)"
			},{
				"id":7,
				"link":"/detail/7",
				"category":"科技报道",
				"title":"5 Reasons to Try Firefox ‘Quantum’ Browser",
				"time":"(2017-11-16)"
			},{
				"id":8,
				"link":"/detail/8",
				"category":"VOA常速英语",
				"title":"President Trump at ASEAN Summit",
				"time":"(2017-11-16)"
			},{
				"id":9,
				"link":"/detail/9",
				"category":"VOA常速英语",
				"title":"U.S. Supports Safe Return of Rohingya to Burma",
				"time":"(2017-11-16)"
			},{
				"id":10,
				"link":"/detail/10",
				"category":"AS IT IS",
				"title":"Richard Nixon: Resigned",
				"time":"(2017-11-13)"
			},{
				"id":11,
				"link":"/detail/11",
				"category":"AS IT IS",
				"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
				"time":"(2017-11-17)"
			},{
				"id":12,
				"link":"/detail/12",
				"category":"AS IT IS",
				"title":"Many North Koreans Depend on Informal Markets",
				"time":"(2017-11-13)"
			},{
				"id":13,
				"link":"/detail/13",
				"category":"AS IT IS",
				"title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
				"time":"(2017-11-13)"
			},{
				"id":14,
				"link":"/detail/14",
				"category":"科技报道",
				"title":"New Orangutan Species Discovered in Indonesia",
				"time":"(2017-11-13)"
			},{
				"id":15,
				"link":"/detail/15",
				"category":"AS IT IS",
				"title":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
				"time":"(2017-11-07)"
			},{
				"id":16,
				"link":"/detail/16",
				"category":"AS IT IS",
				"title":"Saudi Crown Prince Detains Opponents, Expands Power",
				"time":"(2017-11-07)"
			},{
				"id":17,
				"link":"/detail/17",
				"category":"健康报道",
				"title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
				"time":"(2017-11-07)"
			},{
				"id":18,
				"link":"/detail/18",
				"category":"AS IT IS",
				"title":"Vietnam Tech Startups Seek Next Step Forward",
				"time":"(2017-11-06)"
			},{
				"id":19,
				"link":"/detail/19",
				"category":"VOA常速英语",
				"title":"Ongoing U.S. Support for Rohingya Refugees",
				"time":"(2017-10-26)"
			}],
			"friendLink":[{
				"id":1,
				"title":"小马过河",
				"link":"http://www.xiaoma.com"
			},{
				"id":2,
				"title":"雅思培训",
				"link":"http://www.longre.com"
			},{
				"id":3,
				"title":"留学机构",
				"link":"http://www.idp.cn"
			},{
				"id":4,
				"title":"出国语言培训",
				"link":"http://www.ntoefl.com.cn"
			},{
				"id":5,
				"title":"大学生",
				"link":"http://www.daxues.cn"
			},{
				"id":6,
				"title":"人人听力网",
				"link":"http://www.rrting.net"
			},{
				"id":7,
				"title":"英语口语",
				"link":"http://yingyu.juren.com"
			},{
				"id":8,
				"title":"英文小说网",
				"link":"http://novel.tingroom.com/"
			},{
				"id":9,
				"title":"口译",
				"link":"http://www.xiaoma.com"
			},{
				"id":10,
				"title":"美国之音",
				"link":"http://www.xiaoma.com"
			},{
				"id":11,
				"title":"给力英语网",
				"link":"http://www.xiaoma.com"
			},{
				"id":12,
				"title":"中小学教育",
				"link":"http://www.xiaoma.com"
			},{
				"id":13,
				"title":"翻译资格考试",
				"link":"http://www.idp.cn"
			},{
				"id":14,
				"title":"GCT",
				"link":"http://www.ntoefl.com.cn"
			},{
				"id":15,
				"title":"英语六级",
				"link":"http://www.daxues.cn"
			},{
				"id":16,
				"title":"英语学习网站",
				"link":"http://www.rrting.net"
			},{
				"id":17,
				"title":"泰语学习网站",
				"link":"http://yingyu.juren.com"
			},{
				"id":18,
				"title":"英蕊幼儿英语",
				"link":"http://novel.tingroom.com/"
			},{
				"id":19,
				"title":"手抄报",
				"link":"http://www.xiaoma.com"
			},{
				"id":20,
				"title":"简单学习网",
				"link":"http://www.xiaoma.com"
			},{
				"id":21,
				"title":"哈尔滨英语",
				"link":"http://www.xiaoma.com"
			},{
				"id":22,
				"title":"英语口语培训",
				"link":"http://www.xiaoma.com"
			},{
				"id":23,
				"title":"在线英语培训",
				"link":"http://www.idp.cn"
			},{
				"id":24,
				"title":"英语培训",
				"link":"http://www.ntoefl.com.cn"
			},{
				"id":25,
				"title":"韩语学习网",
				"link":"http://www.daxues.cn"
			},{
				"id":26,
				"title":"职称英语考试",
				"link":"http://www.rrting.net"
			},{
				"id":27,
				"title":"家教",
				"link":"http://yingyu.juren.com"
			},{
				"id":28,
				"title":"在线英语培训",
				"link":"http://www.xiaoma.com"
			}]
		}
	})
});

router.get('/list.json', function(req, res, next) {
  if(req.query.id === '1'){
  	res.json({
			"ret" : true,
			"data" : {
				"list":[{
					"id":1,
					"link":"/detail/1",
					"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
					"time":"(2017-11-17)"
				},{
					"id":2,
					"link":"/detail/2",
					"title":"Small Montana City Elects Former Refugee as Mayor",
					"time":"(2017-11-17)"
				},{
					"id":3,
					"link":"/detail/3",
					"title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
					"time":"(2017-11-17)"
				},{
					"id":4,
					"link":"/detail/4",
					"title":"Clearing Explosive Remnants of War in the West Bank",
					"time":"(2017-11-17)"
				},{
					"id":5,
					"link":"/detail/5",
					"title":"Japan Seeks to Expand Influence in Southeast Asia",
					"time":"(2017-11-16)"
				},{
					"id":6,
					"link":"/detail/6",
					"title":"Distant Star Refuses to Die",
					"time":"(2017-11-16)"
				},{
					"id":7,
					"link":"/detail/7",
					"title":"5 Reasons to Try Firefox ‘Quantum’ Browser",
					"time":"(2017-11-16)"
				},{
					"id":8,
					"link":"/detail/8",
					"title":"President Trump at ASEAN Summit",
					"time":"(2017-11-16)"
				},{
					"id":9,
					"link":"/detail/9",
					"title":"U.S. Supports Safe Return of Rohingya to Burma",
					"time":"(2017-11-16)"
				},{
					"id":10,
					"link":"/detail/10",
					"title":"Richard Nixon: Resigned",
					"time":"(2017-11-13)"
				},{
					"id":11,
					"link":"/detail/11",
					"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
					"time":"(2017-11-17)"
				},{
					"id":12,
					"link":"/detail/12",
					"title":"Many North Koreans Depend on Informal Markets",
					"time":"(2017-11-13)"
				},{
					"id":13,
					"link":"/detail/13",
					"title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
					"time":"(2017-11-13)"
				},{
					"id":14,
					"link":"/detail/14",
					"title":"New Orangutan Species Discovered in Indonesia",
					"time":"(2017-11-13)"
				},{
					"id":15,
					"link":"/detail/15",
					"title":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
					"time":"(2017-11-07)"
				},{
					"id":16,
					"link":"/detail/16",
					"title":"Saudi Crown Prince Detains Opponents, Expands Power",
					"time":"(2017-11-07)"
				},{
					"id":17,
					"link":"/detail/17",
					"title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
					"time":"(2017-11-07)"
				},{
					"id":18,
					"link":"/detail/18",
					"title":"Vietnam Tech Startups Seek Next Step Forward",
					"time":"(2017-11-06)"
				},{
					"id":19,
					"link":"/detail/19",
					"title":"Ongoing U.S. Support for Rohingya Refugees",
					"time":"(2017-10-26)"
				}]
			}
		})
  }else if(req.query.id === '2'){
  	res.json({
			"ret" : true,
			"data" : {
				"list":[{
					"id":20,
					"link":"/detail/20",
					"title":"Gerald Ford: Unelected",
					"time":"(2017-11-20)"
				},{
					"id":21,
					"link":"/detail/21",
					"title":"Too Much Tourism?",
					"time":"(2017-11-20)"
				},{
					"id":22,
					"link":"/detail/22",
					"title":"Scientists: CO2 Levels Will Rise This Year",
					"time":"(2017-11-20)"
				},{
					"id":23,
					"link":"/detail/23",
					"title":"American Women Try to Break Barriers in Show Business",
					"time":"(2017-11-20)"
				}]
			}
		})
  }
});

router.get('/detail.json', function(req, res, next) {
	if(req.query.id === '0'){
		res.json({
			"ret":true,
			"data":{
				"detail":{
					"title":"《空中英语教室》",
					"info":"<small>时间：</small>2012-06-02 15:13 <small>来源：</small><a href='http://www.easyvoa.com'>VOA官网</a> <small>收听下载次数</small> 29650次",
					"content":"<p><strong>空英学习QQ群：</strong></p><p><strong>115390136</strong> <span style='color: rgb(255, 0, 0);'><strong>（已满 - 请申请开放的群）</strong></span></p><p><strong>319185915</strong>&nbsp;<strong style='color: rgb(255, 0, 0);'>（</strong><strong style='color: rgb(255, 0, 0);'>已满 - 请申请开放的群</strong><strong style='color: rgb(255, 0, 0);'>）</strong></p><p><strong>102485598&nbsp;</strong><strong style='color: rgb(51, 153, 102)';>（开放）</strong></p><p>为了让大家了解这个系列的杂志，小编做了三个专题网页，大家可以学习一下：</p><p>初级版 大家说英语：<a href='http://www.easyvoa.com/lt/'>http://www.easyvoa.com/lt/</a></p><p>中级版 空中英语教室：<a href='http://www.easyvoa.com/studioclassroom//'>http://www.easyvoa.com/studioclassroom/</a></p><p>高级版 彭蒙惠英语：<a href='http://www.easyvoa.com/advanced/'>http://www.easyvoa.com/advanced/</a></p></div>"
				}
			}
		})
	}else if(req.query.id === '1'){
  	res.json({
			"ret":true,
			"data":{
				"detail":{
					"title":"Leonardo da Vinci Painting Sells for Record $450 Million",
					"info":"<small>时间 : </small>2017-11-17 06:28<small>来源 : </small><a href='http://www.easyvoa.com'>VOA官网</a> <small>收听下载次数 : 700次",
					"content":"<p>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p>The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.</p><p>Before Wednesday, the highest-known sale price for any artwork had been $300 million for Willem de Kooning’s painting “Interchange.” Businessman Kenneth C. Griffin bought it in a private sale in 2015.</p><p><img width='245' height='140' alt='Leonardo da Vinci Painting Sells for Record $450 Million' src='http://www.easyvoa.com/uploads/allimg/171117/1H91V549-0.jpg' style='margin: 0px auto; padding: 0px; border: 0px;'></p><p>A Pablo Picasso’s painting “Les femmes D’Alger” held the previous record for artwork sold at auction. It was sold in 2015 for over $179 million.</p><p>The sale of the da Vinci painting took place at Christie’s auction house in New York City. Bidding for the piece opened at $75 million. The bidding lasted 19 minutes.</p><p>People inside Christie’s cheered as the hammer came down to mark the end of bidding. The record sale price includes money that the unnamed winner must pay to the auction house.</p><p>Jussi Pylkkänen was the auctioneer and is Global president of Christie’s. He told the Reuters news agency, “It was a moment when all the stars were aligned, and I think Leonardo would be very pleased.”</p><p>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p>The painting was in a private collection of King Charles I of England. It disappeared from view until 1900, when a British collector bought it. At that time, it was thought to have been painted by a student of Leonardo rather than the master himself.</p><p>In 2005, a group of art dealers paid less than $10,000 for the artwork. It was badly damaged and partly painted over. They restored the work and proved that the painting was done by Leonardo da Vinci himself.</p><p>Russian billionaire Dmitry Rybolovlev bought the restored painting in 2013 for $127.5 million.</p><p>Christie’s said most experts agree the painting is a work of Leonardo da Vinci. But critics say the restoration of the piece affects the work’s authorship.</p><p>I'm Caty Weaver.</p><p>Hai Do adapted this story for Learning English based on Reuters and Associated Press news reports. Ashley Thompson was the editor.</p>"
				}
			}
		})
  }else if(req.query.id === '2'){
  	res.json({
			"ret":true,
			"data":{
				"detail":{
					"title":"Small Montana City Elects Former Refugee as Mayor",
					"info":"<small>时间 : </small>2017-11-17 06:26<small>来源 : </small><a href='http://www.easyvoa.com'>VOA官网</a> <small>收听下载次数 : 278次",
					"content":"<p>Voters in Helena, Montana, have elected Wilmot Collins as their new mayor. Collins is a former refugee from Liberia. He is also the first black mayor in the state of Montana.</p><p>The story of his success in America has created interest around the world.</p><p>“There are no limits,” Collins told&nbsp;VOA. “I arrived in this country with 25 cents in my pocket. Do you think I was thinking of ever running for mayor? No! But I worked hard and I had the support of my family and my community.”</p><p>Collins says he tells his children with those things in place, “There is no reason why you can’t succeed at what you attempt to do.”</p><p><img width='245' height='140' alt='Leonardo da Vinci Painting Sells for Record $450 Million' src='http://www.easyvoa.com/uploads/allimg/171117/1HJ24419-0.jpg' style='margin: 0px auto; padding: 0px; border: 0px;'></p><p>Collins and his wife, Maddie, were part of a large group of Liberians that fled the civil war in that country in the early 1990s. Two of his brothers were killed in the war. The couple escaped to Ghana but were starving there.</p><p>So, Maddie Collins reached out to an American family she had lived with as an international high school student in Helena. As a result, she was offered a college scholarship in the same town.</p><p>About two weeks before leaving Ghana for the United States, the Collins learned that they were expecting a baby. They decided that Maddie should still go to the U.S. Wilmot would follow as soon as possible.</p><p>He tried to get a visa but was denied. After several more failed attempts, Wilmot Collins requested refugee status through the United Nations High Commission for Refugees.</p><p>“When I was finally allowed to come to America, my little daughter was turning two years old. That was the first time I had ever seen her. That was February 17, 1994.”</p><p>He was 31 years old when he finally reached America. The mayor-elect Collins says he realized immediately that the “real America” was very different from what he had seen in movies back home.</p><p>He says when he heard the pilot announce that it was “warm” at one degree Celsius, he thought the man was crazy. Collins laughs at that memory.</p><p>He says he was even more surprised to learn there were almost no black people in Montana. The state is 92 percent white and five percent Native American. The remaining three percent are listed as “other.” He says the realization gave him a lonely feeling, but that he was happy to be with his family again.</p><p>Two weeks later, Collins got a job cleaning a local school. He says it is not true when people say refugees do not offer any community service. “I didn’t get anything for free,” he argues.</p><p>Collins believes he and his wife were among the first refugees ever to settle in the Helena area. And soon, he says, he would try to persuade people in Helena that his family was in the country legally.</p><p>“Your government accepted us here,” he told local people who did not believe them.</p><p>Collins has two university degrees and is working on a doctorate. Before his election, he worked as a child protection specialist with Montana’s Department of Health and Human Services.</p><p>He also told his story in talks at high schools.</p><p>Collins believes that, generally, when people hear a person’s life story, it can change their mind. Some people realized, “Okay, this guy is just like us,” he said.</p><p>But, Montana is a traditionally conservative state and not everyone is accepting of Collins or others like him. Collins says this causes him worry, especially considering the state's very permissive gun laws.</p><p>“It makes me and my family nervous because… there are crazy people out there, and someone may not want me to do this. Everybody in Montana carries a gun.”</p><p>Even with those concerns, Collins said he feels ready to begin leading Helena.</p><p>“The voters spoke and they said, ‘Hey, you know, with your story and with your experience, it’s you we want.’”</p><p>As mayor-elect, Collins is excited by the opportunity to “give back” to the community.</p><p>“If I can just give back half of what this community gave me, my life is complete, just half. I’ll be thankful.”</p><p>His goals include improvements to the fire department, police department and other emergency services. He also plans to establish low-cost housing for homeless veterans and young people because, he says, years ago, he too was homeless.</p><p>I’m John Russell.</p><p>And I’m Alice Bryant.</p><p>Adam Phillips wrote this story for&nbsp;VOA&nbsp;News. Alice Bryant adapted it for Learning English. Caty Weaver was the editor.</p>"
				}
			}
		})
  }
});


module.exports = router;
