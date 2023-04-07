import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "8BitDo controllers now work with Apple devices",
            "description": "You no longer need to pass on 8BitDo's gamepads if you use Apple products. 8BitDo has confirmed that its controllers now officially support iPhones, iPads and Macs thanks to both firmware upgrades and Apple's recent iOS 16.3, iPadOS 16.3, tvOS 16.3 and macOS …",
            "url": "https://www.engadget.com/8bitdo-controllers-now-work-with-apple-devices-163657954.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/ekLqo_VW4Z9CPYD1CjRT2A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/b7e1d4c0-c738-11ed-bbf0-5c28c6d322eb.cf.jpg",
            "publishedAt": "2023-03-20T16:36:57Z",
            "content": "You no longer need to pass on 8BitDo's gamepads if you use Apple products. 8BitDo has confirmed that its controllers now officially support iPhones, iPads and Macs thanks to both firmware upgrades an… [+1007 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Sarah Fielding",
            "title": "Apple's AirTag 4-pack is on sale for $90",
            "description": "Anyone looking to keep track of all their devices is in for a little treat. Apple's AirTag four-pack is currently on sale for $90. It equates to a 9 percent discount, knocking off a bit, but the lowest we've seen was $80. Still not a bad deal now, though, if …",
            "url": "https://www.engadget.com/apple-airtag-4-pack-sale-134557134.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/.YbTB.6Z.95NnqsTimbFbg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/5e6c68b0-c71f-11ed-b7f8-4742d55e229f.cf.jpg",
            "publishedAt": "2023-03-20T13:45:57Z",
            "content": "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1207 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "Apple's Delaying Products, Avoiding AI in Desperate Bid to Avoid Layoffs",
            "description": "Apple does not want to resort to layoffs, unlike many other major tech companies, which have been downsizing since around the turn of 2023. The tech giant is so desperate to not become another Google, Microsoft, or Meta (which thought 11,000 Meta staff layoff…",
            "url": "https://gizmodo.com/apple-ai-siri-chatgpt-homepod-screen-layoffs-delays-1850243150",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cf97adab98c4818fc984c06206ea548a.jpg",
            "publishedAt": "2023-03-20T15:45:00Z",
            "content": "Apple does not want to resort to layoffs, unlike many other major tech companies, which have been downsizing since around the turn of 2023. The tech giant is so desperate to not become another Google… [+3466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Mack DeGeurin",
            "title": "If You Are a Russian Diplomat, You Should Be Using a Fliphone",
            "description": "While governments around the world are racing to place restrictions on TikTok over perceived espionage and security concerns, Kremlin leaders in Moscow have their sights set on another target: smartphones. The officials, according to Russian newspaper Kommers…",
            "url": "https://gizmodo.com/iphone-russian-diplomat-kremlin-putin-use-flip-phones-1850243229",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/287ff4aa016e2fef3462ac218030c990.jpg",
            "publishedAt": "2023-03-20T15:41:54Z",
            "content": "While governments around the world are racing to place restrictions on TikTok over perceived espionage and security concerns, Kremlin leaders in Moscow have their sights set on another target: smartp… [+2869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "techkritiko@gmail.com (Jay Bonggolto)",
            "title": "The Galaxy Watch 6 series' battery specs have surfaced in a new listing",
            "description": "Samsung's upcoming Galaxy Watch 6 and Watch 6 Classic may have the same battery capacities for each size category.",
            "url": "https://www.androidcentral.com/wearables/samsung-galaxy-watch-6-battery-specs-leak",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/dy7eQ45GRhXsfGFUdpsJ36-1200-80.jpeg",
            "publishedAt": "2023-03-20T05:03:45Z",
            "content": "<ul><li>A new listing on a Chinese regulator has revealed the battery specs of Samsung's next Galaxy Watch series.</li><li>Both the Galaxy Watch 6 and Watch 6 Classic appear to share a similar batter… [+1985 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Robyn Cowen and Will Unwin. Produced by Joel Grove and our executive producer is Danielle Stephens.",
            "title": "Conte’s off-pitch outburst and Mitrovic’s on-field rage – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Robyn Cowen and Will Unwin to review the weekend action, from the Premier League and FA CupRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Fac…",
            "url": "https://www.theguardian.com/football/audio/2023/mar/20/antonio-conte-aleksandar-mitrovic-fa-cup-premier-league-football-weekly-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/8d5eb4bb410243c7cb3642f2085db442f3a7cd9e/452_56_1393_836/master/1393.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95fe7659767c48fe952f5ac0846535c7",
            "publishedAt": "2023-03-20T12:43:58Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Antonio Conte delivers a quite astonishin… [+609 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ann Lee",
            "title": "‘There was cruelty and unpleasantness’: Emily Watson on school, stardom and sex scenes in her 50s",
            "description": "The actor grew up in an alleged cult and was expelled after her explicit role in Breaking the Waves. She discusses method acting, the #MeToo movement and mixing work and familyEmily Watson had big plans to turn up for our interview looking immaculately made u…",
            "url": "https://www.theguardian.com/film/2023/mar/20/there-was-cruelty-and-unpleasantness-emily-watson-on-school-stardom-and-sex-scenes-in-her-50s",
            "urlToImage": "https://i.guim.co.uk/img/media/a8da94c6ad950753602a7984054f96e225f57d18/0_221_7995_4800/master/7995.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=022907be0c387c2073c61ea1fdc257ce",
            "publishedAt": "2023-03-20T06:00:00Z",
            "content": "Emily Watson had big plans to turn up for our interview looking immaculately made up, but then family members started getting sick and her morning fell apart. When my husbands ill, chaos descends, sh… [+12761 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Apple's Flagship Mumbai Store to Open in April, Followed by Second Store in New Delhi",
            "description": "Apple will open its flagship India retail store in Mumbai next month, after several delays, soon to be followed by another store in New Delhi, reports The Economic Times, citing industry executives.\n\n\n\n\n\nLocated in the Jim World Drive mall and covering 22,000…",
            "url": "https://www.macrumors.com/2023/03/20/apple-mumbai-store-opening-april/",
            "urlToImage": "https://images.macrumors.com/t/yQIJcb8Y-avkal6pF9GMKjehEcY=/2304x/article-new/2020/08/apple-india.jpg",
            "publishedAt": "2023-03-20T12:17:02Z",
            "content": "Apple will open its flagship India retail store in Mumbai next month, after several delays, soon to be followed by another store in New Delhi, reports The Economic Times, citing industry executives.\r… [+1800 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Apple's HomePod With a Screen Delayed Until Next Year at the Earliest",
            "description": "Apple's project to design its first HomePod with a screen has been pushed back until next year at the earliest, as part of a series of cost-cutting measures and belt-tightening efforts to make its operations more efficient.\n\n\n\n\n\nIn his latest Power On newslet…",
            "url": "https://www.macrumors.com/2023/03/20/homepod-with-screen-delayed-next-year/",
            "urlToImage": "https://images.macrumors.com/t/ygkHtLXG3Ezp-6anw0erdUmeKww=/1920x/article-new/2022/01/HomePod-With-Screen.jpg",
            "publishedAt": "2023-03-20T10:57:38Z",
            "content": "Apple's project to design its first HomePod with a screen has been pushed back until next year at the earliest, as part of a series of cost-cutting measures and belt-tightening efforts to make its op… [+1267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Microsoft Plans Mobile Games Store To Rival Apple and Google",
            "description": "Microsoft is preparing to launch a new app store for games on iPhones and Android smartphones as soon as next year if its $75bn acquisition of Activision Blizzard is cleared by regulators, according to the head of its Xbox business. From a report: New rules r…",
            "url": "https://apple.slashdot.org/story/23/03/20/0541237/microsoft-plans-mobile-games-store-to-rival-apple-and-google",
            "urlToImage": "https://a.fsdn.com/sd/topics/microsoft_64100.png",
            "publishedAt": "2023-03-20T15:20:00Z",
            "content": "New rules requiring Apple and Google to open up their mobile platforms to app stores owned and operated by other companies are expected to come into force from March 2024 under the EU's Digital Marke… [+1426 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Eduardo Arcos",
            "title": "iPhone 15: se filtra el nuevo botón de volumen y la desaparición del interruptor para silenciar el móvil",
            "description": "Tal y como se viene rumoreando desde hace meses, el iPhone 15 contará con nuevos botones para subir y bajar el volumen. Estos serían hápticos, es decir, no hay movimiento físico, pero al ser presionados, vibrarán dar retroalimentación al usuario. Similar a la…",
            "url": "http://hipertextual.com/2023/03/iphone-15-nuevo-boton-volumen-filtrado",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/03/iphone-15-botones-volumen.jpg",
            "publishedAt": "2023-03-20T16:50:40Z",
            "content": "Tal y como se viene rumoreando desde hace meses, el iPhone 15 contará con nuevos botones para subir y bajar el volumen. Estos serían hápticos, es decir, no hay movimiento físico, pero al ser presiona… [+2226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Probamos el Samsung Galaxy Book 3 Pro 360: ¿es este el mejor convertible para profesionales?",
            "description": "Aunque los Samsung Galaxy S23, S23 Plus y Galaxy S23 Ultra suelen acaparar todas las miradas, la compañía surcoreana también tiende a anunciar a principios de año su nueva línea de portátiles de gama alta; los Galaxy Book. Este 2023, la firma ha presentado ju…",
            "url": "http://hipertextual.com/2023/03/samsung-galaxy-book-3-pro-360-review-analisis-opinion",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/03/samsung-galaxy-book-pro-360-001.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1",
            "publishedAt": "2023-03-20T13:01:00Z",
            "content": "Aunque los Samsung Galaxy S23, S23 Plus y Galaxy S23 Ultra suelen acaparar todas las miradas, la compañía surcoreana también tiende a anunciar a principios de año su nueva línea de portátiles de gama… [+10002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Tom Nardi",
            "title": "The Rise and (Eventual) Fall of the SIM Card",
            "description": "There are few devices that better exemplify the breakneck pace of modern technical advancement than the mobile phone. In the span of just a decade, we went from flip phones and polyphonic ringtones…",
            "url": "https://hackaday.com/2023/03/20/the-rise-and-eventual-fall-of-the-sim-card/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2023/03/Sim.jpg",
            "publishedAt": "2023-03-20T14:00:23Z",
            "content": "There are few devices that better exemplify the breakneck pace of modern technical advancement than the mobile phone. In the span of just a decade, we went from flip phones and polyphonic ringtones t… [+8308 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Oli Welsh",
            "title": "Xbox hoping to launch mobile game store as early as next year",
            "description": "Microsoft’s Phil Spencer has said that the company wants to bring an Xbox mobile games app store to iOS and Android when EU law requires Apple and Google to open their platforms, and said that acquiring Activision Blizzard was key to this strategy",
            "url": "https://www.polygon.com/23648499/xbox-mobile-games-app-store-activision-blizzard",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/-OZJs2bI5Ire17Qm9SKKJaoR85I=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22687100/xbox_game_pass_phone.jpg",
            "publishedAt": "2023-03-20T16:55:32Z",
            "content": "Phil Spencer, Microsofts head of gaming, has told the Financial Times Microsoft would like to launch Xbox-branded mobile gaming app stores on both Android and iOS ideally as soon as next year.\r\nUntil… [+2999 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Liam Mathews",
            "title": "9 Keanu Reeves movies that reveal the many faces of John Wick",
            "description": "Keanu Reeves’ new John Wick movie is out, so it’s a great time to revisit the best Keanu movies and performances that helped define him as a great actor.",
            "url": "https://www.polygon.com/what-to-watch/23640292/best-keanu-reeves-movies-john-wick",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2_Nsastlbay7zvUdn7LZzlAFMoc=/0x131:1793x1070/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24508019/The_Gift_129538147_large.jpeg",
            "publishedAt": "2023-03-20T17:00:00Z",
            "content": "For much of his career, Keanu Reeves had a reputation as a mediocre actor. Everyone knew he was amazing in action scenes, but people joked about how wooden he could be when required to emote. More re… [+13226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Cómo saber quién ha visitado tu perfil de TikTok activando el historial de visualizaciones",
            "description": "Vamos a explicarte cómo puedes saber quién ha visitado tu perfil de TikTok, activando una opción que te envía avisos cuando alguien nuevo lo hace. Se trata del historial de visualizaciones, que te dice quién ha visitado tu perfil en los últimos 30 días.\n<!-- …",
            "url": "https://www.xataka.com/basics/como-saber-quien-ha-visitado-tu-perfil-tiktok-activando-avisos",
            "urlToImage": "https://i.blogs.es/b1ef80/tiktok/840_560.jpeg",
            "publishedAt": "2023-03-20T10:15:40Z",
            "content": "Vamos a explicarte cómo puedes saber quién ha visitado tu perfil de TikTok, activando una opción que te envía avisos cuando alguien nuevo lo hace. Se trata del historial de visualizaciones, que te di… [+1714 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "USA TODAY, Naledi Ushe, USA TODAY",
            "title": "Gwyneth Paltrow to go to trial 7 years after Utah ski slopes crash",
            "description": "Gwyneth Paltrow was sued for allegedly crashing into a fellow skier in Park City, Utah, in 2016. She countersued, accusing the plaintiff of the crash.",
            "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/03/20/gwyneth-paltrow-trial-2016-utah-ski-crash/11507703002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/20/USAT/282797da-b5c0-4110-a909-6f6534c0f5db-GTY_1436557405.jpg?auto=webp&crop=4999,2812,x0,y298&format=pjpg&width=1200",
            "publishedAt": "2023-03-20T13:12:36Z",
            "content": "Gwyneth Paltrow is due to stand trial in Utah after being sued for a ski crash in 2016, referred to as a \"hit and run.\" \r\nPaltrow's trial is set for eight days, starting Tuesday. It's unclear if the … [+2204 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Alex Blake",
            "title": "6 things I want to see in the new iMac",
            "description": "A new 24-inch iMac is reportedly on the way, complete with new features and better performance. Here’s everything we want to see in Apple’s next all-in-one Mac.",
            "url": "https://www.digitaltrends.com/computing/imac-24-2023-rumors-news-price-release-date/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/07/Apples-24-inch-M1-iMac-is-an-all-in-one-solution.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2023-03-20T10:00:37Z",
            "content": "Apples 24-inch iMac got a major redesign in spring 2021, but its been a long two years with no updates to speak of since then. Many of us are impatiently waiting to see what comes next.\r\nNow, though,… [+5786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Asahilinux.org"
            },
            "author": null,
            "title": "Paving the Road to Vulkan on Asahi Linux",
            "description": "Porting Linux to Apple Silicon",
            "url": "https://asahilinux.org/2023/03/road-to-vulkan/",
            "urlToImage": "https://asahilinux.org/img/AsahiLinux_logomark_256px.png",
            "publishedAt": "2023-03-20T15:56:12Z",
            "content": "Hello everyone, Asahi Lina here!\r\nAs you probably know, I’ve been working together with the rest of the Asahi Linux team on open source GPU drivers for Apple Silicon platforms. It’s been a wild ride!… [+30656 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "Launch HN: Lume (YC W23) – Generate custom data integrations with AI",
            "description": "Comments",
            "url": "https://news.ycombinator.com/item?id=35232171",
            "urlToImage": null,
            "publishedAt": "2023-03-20T14:40:35Z",
            "content": "Hi HN, were Nicolas, Nebyou, and Robert and were building Lume (https://lume.ai). Lume uses AI to generate custom data integrations. We transform data between any start and end schema and pipe the da… [+4604 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Generalist.com"
            },
            "author": null,
            "title": "Who becomes an entrepreneur? Insights from 7 research studies",
            "description": "Seven research studies reveal the traits and experiences that influence the decision to start a business.",
            "url": "https://www.generalist.com/briefing/who-becomes-an-entrepreneur",
            "urlToImage": "https://assets.website-files.com/5f73bbd13fa8b95aedaf300b/63e9196568e3265991eb70af_Entrepreneur_main.jpg",
            "publishedAt": "2023-03-20T02:12:22Z",
            "content": "One of The Generalists primary obsessions is understanding how great organizations are made. In pursuit of that subject, weve studied companies from around the world, across industries, and at differ… [+16418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "iPhone 15 Pro Max: \"Dünnster Display-Rand aller Zeiten\"?",
            "description": "Ein weiteres Hardware-Detail zum kommenden großen Profi-iPhone ist durchgesickert: Angeblich reduziert Apple den Rand um den Screen weiter.",
            "url": "https://www.heise.de/news/iPhone-15-Pro-Max-Duennster-Display-Rand-aller-Zeiten-7550824.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/2/0/6/9/4/Screen_Shot_2023-03-20_at_08.50.50-2-ca6bb028ebcbec22.png",
            "publishedAt": "2023-03-20T09:08:00Z",
            "content": "Apple will seinem nächsten iPhone-Topmodell, dem iPhone 15 Pro Max, einem Bericht zufolge den bislang dünnsten Bildschirmrand aller Smartphones verpassen. Die \"ultra-thin bezels\" tauchen laut einem B… [+2202 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Sophia Zimmermann",
            "title": "Kurz informiert: Emotet, Atomkraft für den Mond, Drohnenflüge, Original-iPhone",
            "description": "Unser werktäglicher News-Überblick fasst die wichtigsten Nachrichten des Tages kurz und knapp zusammen.",
            "url": "https://www.heise.de/news/Kurz-informiert-Emotet-Atomkraft-fuer-den-Mond-Drohnenfluege-Original-iPhone-7555096.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/2/1/3/7/2/Thumb_KurzInformiert2022_4Themen_Kopie_2-0f5d39a7bec5a3c3.png",
            "publishedAt": "2023-03-20T16:00:00Z",
            "content": "Inhaltsverzeichnis\r\nEmotet ist zurück mal wieder. Die Cybergang hinter der hoch entwickelten Schadsoftware ist bekannt für zwischenzeitliche, längere Pausen. Nun jedoch gehen die Cyberkriminellen wie… [+2518 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Apple delays certain projects as it reallocates R&D spending to cut costs",
            "description": "Last week, a report went in-depth on some of the cost-cutting measures Apple is putting into place as it looks to avoid broader layoffs. Perhaps unsurprisingly, these new policies are also going to have an impact on future product releases from Apple…\n more…\n…",
            "url": "https://9to5mac.com/2023/03/20/apple-new-products-cost-cutting/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/AAPL-Q4-2022.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T12:40:07Z",
            "content": "Last week, a report went in-depth on some of the cost-cutting measures Apple is putting into place as it looks to avoid broader layoffs. Perhaps unsurprisingly, these new policies are also going to h… [+1592 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "8BitDo game controllers now officially support iPhone, iPad, Mac, and Apple TV",
            "description": "8BitDo just opened up its game controllers to iPhone, iPad, Mac, and Apple TV for the first time. The company has officially confirmed that six of its popular controllers now work with Apple devices thanks to recent software updates…\n more…\nThe post 8BitDo ga…",
            "url": "https://9to5mac.com/2023/03/20/8bitdo-game-controllers-apple-devices/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/8bitdo-controllers.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T17:00:38Z",
            "content": "8BitDo just opened up its game controllers to iPhone, iPad, Mac, and Apple TV for the first time. The company has officially confirmed that six of its popular controllers now work with Apple devices … [+1354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Michael Potuck",
            "title": "Best iPhone trade-in values following the new yellow iPhone 14",
            "description": "It’s almost spring and Apple has updated its iPhone 14 and 14 Plus with a new yellow model. Whether you’re planning to pick that up or are considering upgrading to a different iPhone, here’s a look at the best iPhone trade-in values.\n more…\nThe post Best iPho…",
            "url": "https://9to5mac.com/2023/03/19/best-iphone-trade-in-values-spring-2023/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/yellow-iphone-14-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T00:03:15Z",
            "content": "It’s almost spring and Apple has updated its iPhone 14 and 14 Plus with a new yellow model. Whether you’re planning to pick that up or are considering upgrading to a different iPhone, here’s a look a… [+2725 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Apple set to open first retail store in India next month, followed quickly by its second",
            "description": "The opening of Apple’s first retail in India has been years in the making and has faced countless delays. According to a new report from the Economic Times, however, Apple is finally on track to open its flagship store in India sometime in April.\n more…\nThe p…",
            "url": "https://9to5mac.com/2023/03/20/apple-first-retail-store-in-india/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2017/12/iphone-x-india.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T12:15:13Z",
            "content": "The opening of Apple’s first retail in India has been years in the making and has faced countless delays. According to a new report from the Economic Times, however, Apple is finally on track to open… [+1774 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Rikka Altland",
            "title": "Deals: Official Apple iPhone 14 series cases from $31, black Magic Trackpad II $120, more",
            "description": "With Monday now ushering in the new work week, we’re checking in with the folks over at 9to5Toys to see what’s on tap for all of today’s best deals. The savings today kick off with Apple’s entire collection of official iPhone 14 cases starting at $31, deliver…",
            "url": "https://9to5mac.com/2023/03/20/apple-black-magic-accessories-iphone-14-cases/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/apple-black-magic-accessories-iphone-14-cases.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T15:49:35Z",
            "content": "With Monday now ushering in the new work week, we’re checking in with the folks over at 9to5Toys to see what’s on tap for all of today’s best deals. The savings today kick off with Apple’s entire col… [+4907 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Michael Potuck",
            "title": "Here’s how to block texts on iPhone in a few taps",
            "description": "Whether it’s someone you know, someone you don’t, or just a scam message, unwanted text messages can be a pain. Follow along for how to block texts on iPhone as well as how to report scam messages to Apple and your carrier.\n more…\nThe post Here’s how to block…",
            "url": "https://9to5mac.com/2023/03/20/block-texts-on-iphone/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/08/block-texts-on-iphone.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T15:35:00Z",
            "content": "Whether it’s someone you know, someone you don’t, or just a scam message, unwanted text messages can be a pain. Follow along for how to block texts on iPhone as well as how to report scam messages to… [+2274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Microsoft planning to offer its own Xbox app store on iPhone as soon as next year",
            "description": "Microsoft is already hard at work preparing for a world in which Apple is forced to allow third-party app stores on iPhone. In an interview with the Financial Times, Microsoft Gaming head Phil Spencer said that the company wants to be “in a position to offer …",
            "url": "https://9to5mac.com/2023/03/20/microsoft-xbox-app-store-iphone/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/xbox-cloud-gaming-iphone-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T13:16:24Z",
            "content": "Microsoft is already hard at work preparing for a world in which Apple is forced to allow third-party app stores on iPhone. In an interview with the Financial Times, Microsoft Gaming head Phil Spence… [+2152 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Jeff Benjamin",
            "title": "Mac mini with M2 Pro diary: flexible, affordable, and creator-focused [Video]",
            "description": "Back in the Intel days, the Mac mini’s small stature resulted in huge performance tradeoffs. In the past, you could have a small footprint, or you could have high performance, but you couldn’t have both. Apple Silicon has totally changed the game in that resp…",
            "url": "https://9to5mac.com/2023/03/20/mac-mini-with-m2-pro-diary-flexible-affordable-and-creator-focused-video/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/Mac-mini-M2-Pro-review-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T13:02:41Z",
            "content": "Back in the Intel days, the Mac mini’s small stature resulted in huge performance tradeoffs. In the past, you could have a small footprint, or you could have high performance, but you couldn’t have b… [+11769 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "iPhone 15 Pro design leak corroborates revamped mute and volume buttons",
            "description": "Earlier this month, 9to5Mac exclusively reported that the upcoming iPhone 15 Pro will have new unified volume buttons and a new “pressing type” mute button. Now, freshly-leaked CAD files have corroborated our report and offered a closer look at the new design…",
            "url": "https://9to5mac.com/2023/03/20/iphone-15-pro-design-leak-corroborates-revamped-mute-and-volume-buttons/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/iphone-15-buttons.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-20T15:40:44Z",
            "content": "Earlier this month, 9to5Mac exclusively reported that the upcoming iPhone 15 Pro will have new unified volume buttons and a new “pressing type” mute button. Now, freshly-leaked CAD files have corrobo… [+1710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Genbeta.com"
            },
            "author": "Bárbara Bécares",
            "title": "Steve Jobs ya aplicaba el teletrabajo en Apple en 1981. \"Es una oportunidad única de incluir la tecnología en nuestra vida\"",
            "description": "Aunque mucho hablamos ahora del teletrabajo, sobre todo tras el confinamiento que trajo una pandemia, hay una entrevista a Steve Jobs del año 1981 donde habla del teletrabajo dentro de Apple. El líder, innovador no solo en la informática, sino también en otra…",
            "url": "https://www.genbeta.com/a-fondo/steve-jobs-aplicaba-teletrabajo-apple-1981-oportunidad-unica-incluir-tecnologia-nuestra-vida",
            "urlToImage": "https://i.blogs.es/17a4e2/1366_2000-2-/840_560.jpeg",
            "publishedAt": "2023-03-20T11:19:39Z",
            "content": "Aunque mucho hablamos ahora del teletrabajo, sobre todo tras el confinamiento que trajo una pandemia, hay una entrevista a Steve Jobs del año 1981 donde habla del teletrabajo dentro de Apple. El líde… [+2507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Chip Loder)",
            "title": "How to get Apple's 30-inch Cinema Display to work on a modern Mac",
            "description": "A vintage Apple 30-inch Cinema Display can be used as your second or main display on your modern Mac. Here's how to hook it up.When Apple added USB-C and Thunderbolt ports to modern Macs, it also added DisplayPort connectivity over the same ports. This means …",
            "url": "https://appleinsider.com/inside/mac/tips/how-to-get-apples-30-inch-cinema-display-to-work-on-a-modern-mac",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53536-107559-lede-xl.jpg",
            "publishedAt": "2023-03-20T11:47:55Z",
            "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA vintage Apple 30-inch Cinema Display can be used as your second or main display on your modern Mac. Here'… [+3958 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Apple increased grip on premium smartphone market in 2022",
            "description": "The premium smartphone market make up more than half of global smartphone revenue in 2022, a report claims, with Apple's iPhone providing the lion's share.iPhone 14Sales in the overall global smartphone market dropped 12% year-on-year between 2021 to 2022 due…",
            "url": "https://appleinsider.com/articles/23/03/20/apple-increased-grip-on-premium-smartphone-market-in-2022",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53557-107591-52827-105701-iPhone-14-xl-xl.jpg",
            "publishedAt": "2023-03-20T17:02:55Z",
            "content": "iPhone 14\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe premium smartphone market make up more than half of global smartphone revenue in 2022, a rep… [+1552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "This Steve Jobs autograph costs more than a Tesla Model S",
            "description": "An award plaque signed by Apple co-founder Steve Jobs is up for sale, a rare item as Jobs didn't sign things often.Steve JobsMoments in Time buys and sells original letters and other documents that feature autographs, and they recently put a unique piece of A…",
            "url": "https://appleinsider.com/articles/23/03/20/this-steve-jobs-autograph-costs-more-than-a-tesla-model-s",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53550-107582-steve-jobs-xl.jpg",
            "publishedAt": "2023-03-20T13:51:21Z",
            "content": "Steve Jobs\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAn award plaque signed by Apple co-founder Steve Jobs is up for sale, a rare item as Jobs didn'… [+1203 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Jess Pingrey)",
            "title": "Daily Deals: $199 Apple Watch, $600 off 16\" MacBook Pro, up to 25% off Google Pixel Buds, more",
            "description": "Today's top finds include 69% off an iPhone 13 Pro case with MagSafe, a Philips Hue Play HDMI sync box for $168, 63% off a Microsoft Surface Pro X, MacBooks from $450, and a $199 Apple Watch SE.Save on Apple Watch Series 8The AppleInsider team scours the web …",
            "url": "https://appleinsider.com/articles/23/03/20/daily-deals-199-apple-watch-600-off-16-macbook-pro-up-to-25-off-google-pixel-buds-more",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53543-107570-daily-deals-march-20-xl.jpg",
            "publishedAt": "2023-03-20T13:32:42Z",
            "content": "Save on Apple Watch Series 8\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nToday's top finds include 69% off an iPhone 13 Pro case with MagSafe, a Phili… [+1743 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Leaked images back up solid state iPhone 15 Pro button rumor",
            "description": "Apple leaker ShrimpApplePro has shared new iPhone 15 Pro renders showing a unified volume and mute buttons.Render of new buttons on the iPhone 15 Pro modelsThe iPhone 15 Pro versions are anticipated to include a single, long button for controlling the volume …",
            "url": "https://appleinsider.com/articles/23/03/20/leaked-images-back-up-solid-state-iphone-15-pro-button-rumor",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53556-107588-iPhone-15-Pro-Max-haptic-buttons-xl.jpg",
            "publishedAt": "2023-03-20T16:18:56Z",
            "content": "Render of new buttons on the iPhone 15 Pro models\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple leaker ShrimpApplePro has shared new iPhone 15 Pro… [+956 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Apple TV+ 'Ted Lasso' cast to visit White House to promote mental health",
            "description": "Jason Sudeikis and the cast behind the Apple TV+ hit comedy \"Ted Lasso\" will be meeting President Joe Biden and First Lady Jill Biden on Monday, to promote mental health and well-being.Announced late on Sunday, the visit will see the on-screen stars of the ce…",
            "url": "https://appleinsider.com/articles/23/03/20/apple-tv-ted-lasso-cast-to-visit-white-house-to-promote-mental-health",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53545-107577-52545-104933-Ted_Lasso_Photo_030401jpgphoto_modal_show_home_large-xl-xl.jpg",
            "publishedAt": "2023-03-20T10:57:07Z",
            "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nJason Sudeikis and the cast behind the Apple TV+ hit comedy \"Ted Lasso\" will be meeting President Joe Biden… [+1461 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Mumbai Apple Store will finally open in April, Delhi to follow",
            "description": "The first flagship Apple Store in India will be opening in Mumbai in April, a report claims, with a second outlet in New Delhi set to arrive soon after.[Laurenz Heymann/Unsplash]Apple is in the middle of preparing its first-party stores in India for launch, a…",
            "url": "https://appleinsider.com/articles/23/03/20/mumbai-apple-store-will-finally-open-in-april-delhi-to-follow",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53547-107579-50024-98115-Apple-Logo-Header-xl-xl.jpg",
            "publishedAt": "2023-03-20T12:30:18Z",
            "content": "[Laurenz Heymann/Unsplash]\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe first flagship Apple Store in India will be opening in Mumbai in April, a r… [+1783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Kremlin says nyet to iPhone ahead of presidential election",
            "description": "The Russian government has told officials preparing for the country's 2024 presidential election not to use iPhones, because there is worry that spies have hacked the phones.MoscowRussia is gearing up for another presidential election in 2024, but preparation…",
            "url": "https://appleinsider.com/articles/23/03/20/kremlin-says-nyet-to-iphone-ahead-of-presidential-election",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53546-107578-47436-92568-47271-92175-Moscow-xl-xl-xl.jpg",
            "publishedAt": "2023-03-20T11:39:31Z",
            "content": "Moscow\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Russian government has told officials preparing for the country's 2024 presidential election no… [+1786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew O'Hara)",
            "title": "Belkin's Matter woes, ESR Find My wallet, & more smart home news",
            "description": "Belkin is stepping back from the Matter standard, ESR got a new Find My-enabled Geo Wallet & Stand, and there is much more news on the Homekit Insider podcast.HomeKit InsiderAfter previously committing to Matter, Belkin is now putting its rollout on hold. It …",
            "url": "https://appleinsider.com/articles/23/03/20/belkins-matter-woes-esr-find-my-wallet-more-smart-home-news",
            "urlToImage": "https://photos5.appleinsider.com/gallery/46889-91403-HKI-Header-xl.jpg",
            "publishedAt": "2023-03-20T14:19:43Z",
            "content": "HomeKit Insider\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nBelkin is stepping back from the Matter standard, ESR got a new Find My-enabled Geo Wallet… [+1585 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Microsoft's app store for iPhone could arrive as soon as 2024",
            "description": "Microsoft's gaming chief has his eye on the iPhone, and has said that the company is planning its own store to bring Xbox games to Apple hardware outside of the App Store once EU rules come into forceThe European Union's Digital Markets Act will make major ch…",
            "url": "https://appleinsider.com/articles/23/03/20/microsofts-app-store-for-iphone-could-arrive-as-soon-as-2024",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53548-107581-42818-83200-Microsoft-Header-xl-xl.jpg",
            "publishedAt": "2023-03-20T13:32:50Z",
            "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nMicrosoft's gaming chief has his eye on the iPhone, and has said that the company is planning its own store… [+2552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Amazon slashing 9,000 more jobs in fresh round of layoffs",
            "description": "Amazon is preparing another round of layoffs, with 9,000 more roles to be cut from its human resources, advertising, Twitch, and Amazon Web Services teams.Amazon logoThe tech giant jobs bloodbath continues, with Amazon the latest to initiate a second round of…",
            "url": "https://appleinsider.com/articles/23/03/20/amazon-to-cull-9000-more-jobs-in-fresh-round-of-layoffs",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53555-107589-52313-104159-amazon-xl-xl.jpg",
            "publishedAt": "2023-03-20T16:22:33Z",
            "content": "Amazon logo\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAmazon is preparing another round of layoffs, with 9,000 more roles to be cut from its human r… [+1781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "Samsung expands OLED 4K TV lineup with two new series",
            "description": "Samsung has announced expanding its OLED 4K TV lineup with new TVs with a Neural Quantum Processor and the Apple TV app built-in.New Samsung TVsThe two new series — the S90C and S95C — feature Quantum Dot technology, 4K upscaling, Quantum HDR, and hubs for ga…",
            "url": "https://appleinsider.com/articles/23/03/20/samsung-expands-oled-4k-tv-lineup-with-two-new-series",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53553-107587-new-samsung-TVs-xl.jpg",
            "publishedAt": "2023-03-20T15:49:39Z",
            "content": "New Samsung TVs\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nSamsung has announced expanding its OLED 4K TV lineup with new TVs with a Neural Quantum P… [+2774 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew Orr)",
            "title": "The BBC is advising staff to remove TikTok from work phones",
            "description": "Though the BBC still has a TikTok channel, it is advising staff to delete the app from their work phones over China fears.TikTokAs a TikTok ban edges closer in the US, the UK's British Broadcasting Corporation (BBC) seeks to remove it from corporate devices o…",
            "url": "https://appleinsider.com/articles/23/03/20/the-bbc-is-advising-staff-to-remove-tiktok-from-work-phones",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53552-107584-TikTok-xl.jpg",
            "publishedAt": "2023-03-20T14:45:21Z",
            "content": "TikTok\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThough the BBC still has a TikTok channel, it is advising staff to delete the app from their work p… [+2309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elespanol.com"
            },
            "author": "Manuel Ramírez",
            "title": "Microsoft tiene un nuevo y ambicioso plan: una tienda propia de juegos para móviles",
            "description": "Microsoft está siendo bien ambicioso después del éxito descomunal de ChatGPT. Ahora su próximo objetivo es lanzar una app independiente para juegos para móviles y así ponérselo difícil a Apple y Google.",
            "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230320/microsoft-nuevo-ambicioso-tienda-propia-juegos-moviles/749925182_0.html",
            "urlToImage": "https://s1.eestatic.com/2023/03/20/elandroidelibre/noticias-y-novedades/749935326_231780243_1200x630.jpg",
            "publishedAt": "2023-03-20T15:23:00Z",
            "content": "Con Google Play Juegos ya disponible en Europa para que puedas descargar juegos de Android en tu PC con Windows, ahora Microsoft ha puesto el tiro en una tienda propia de juegos para móviles. Con est… [+3332 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "宮城圭介",
            "title": "近い将来、Apple Watchに糖尿病患者の血糖値測定機能が付くかも",
            "description": "Appleは、人体に傷をつけず糖尿病患者の血糖値測定ができる機能をApple Watchに搭載しようとしている。",
            "url": "https://www.gizmodo.jp/2023/03/blood-glucose-measurement-with-apple-watch.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/20/Shutterstock_1439349791.jpeg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-03-20T03:00:00Z",
            "content": "Copyright © mediagene Inc. All Rights Reserved."
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "メディアジーンメディアコマース",
            "title": "Appleがセール継続中！ 驚異の最大27％オフを逃さないで【Amazonタイムセール】",
            "description": "昨日3月19日まで開催されていた｢Amazon Fashion×新生活タイムセール祭り｣は終了しましたが、なんとApple Watch Series 8をはじめとするApple製品がセールを継続中！このチャンスをお見逃しなく。",
            "url": "https://www.gizmodo.jp/2023/03/amazon-timesale-2023-0320-1.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/20/Apple-1.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-03-20T09:45:00Z",
            "content": "319Amazon Fashion×Apple Watch Series 8Apple 24\r\n202332017\r\nAmazonATM\r\n10% iPad\r\nApple10.2 iPad (Wi-Fi, 64GB)- A13 BionicCPU\r\nApple PencilSmart Keyboard10%\r\nApple Watch Series 8 Cellular\r\nSOSApple Wat… [+290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "はらいさん",
            "title": "iPhoneにつけられた謎の番号「IMEI」を調べる方法",
            "description": "Image:はらいさん知っておくと便利。iPhoneやiPadなどの端末に割り振られている謎の番号、IMEI。IMEIは（シリアル番号のように）サポートに問い合わせる際に必要となります。そう、「事前にどこで確認できるか知っておいた方が安心な番号」だったりするんです。今回はiPhoneでIMEIを調べる方法をお伝えします。1.「設定」アプリから調べる方法Image:はらいさんまずはiPhoneの「設",
            "url": "https://www.gizmodo.jp/2023/03/iphone-imei.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/20/409350A2-DEA9-4BE4-B8A4-61CFABE8C91F.jpeg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-03-20T09:30:00Z",
            "content": "iPhoneiPadIMEIIMEI\r\niPhoneIMEI\r\n1.\r\nImage: \r\niPhone\r\nImage: \r\nIMEI\r\nImage: \r\nSiriiPhone\r\n2. SIM\r\nIMEI\r\nSIM Image: \r\n1iPhoneSIMSIM\r\niPhoneSIMSIM\r\nSIMIMEI\r\niPhone 14SIMIMEI\r\niPhone 56iPhone SEiPhoneIME… [+134 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "編集部",
            "title": "Amazonタイムセール祭りとは？攻略法や心得、過去の目玉商品や開催時期など",
            "description": "Amazonタイムセール祭りでは、パソコンやガジェット、家電など幅広いカテゴリの商品がセール価格で登場。AmazonデバイスやApple製品などがお得に買えるチャンスも。タイムセール祭りで役立つツールや心構え、いつ頃開催かなどを解説します。",
            "url": "https://www.gizmodo.jp/2023/03/amazaon-timesale-fes.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/15/AmazonSEO_TOP.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-03-20T06:45:00Z",
            "content": "AmazonAmazonEcho DotFire TV StickAmazon\r\nAmazon\r\nAmazon\r\n2AmazonAmazon\r\n<table><tr><th>2021</th><th>2022</th></tr><tr><td>1/302/1</td><td>2/262/28</td></tr><tr><td>4/244/26</td><td>4/244/26</td></tr>… [+1197 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "かみやまたくみ",
            "title": "PITAKAの「iPad Proをワイヤレス充電対応にするケース」は“弱点”も解消しちゃう",
            "description": "iPadProをワイヤレス充電対応にするケース「MagEZCasePro」Photo:かみやまたくみ中国の周辺機器メーカー「PITAKA」がiPadPro用のマグネットつきの保護ケース「MagEZCasePro」と、それに対応するスタンド「ChargingStandforiPadPro」を発表しました。詳しくは後ほど紹介しますが、この2つの製品を組み合わせるとiPadProをワイヤレスで充電できる",
            "url": "https://www.gizmodo.jp/2023/03/pitaka-magez-case-pro-and-charging-stand-for-ipad-pro.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/20/20230320-DSC00688.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-03-20T14:30:00Z",
            "content": "PITAKAiPad ProMagEZ Case ProCharging Stand for iPad Pro\r\n2iPad Pro\r\niPad Pro\r\niPad Pro\r\nMagEZ Case ProX\r\nMagEZ Case ProX\r\nCharging Stand for iPad ProiPad Pro20W45WMagSafeiPad ProPITAKA\r\niPad ProMagSa… [+571 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "Samuel Tolbert",
            "title": "Microsoft Gaming CEO Phil Spencer talks 'huge opportunity' for Xbox mobile store",
            "description": "Microsoft Gaming CEO Phil Spencer has offered additional comments on the opportunity Microsoft has coming up in mobile gaming.",
            "url": "https://www.windowscentral.com/gaming/xbox/microsoft-gaming-ceo-phil-spencer-talks-huge-opportunity-for-xbox-mobile-store",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/mgav4bjVsFfVnaRjo9TPeH-1200-80.jpg",
            "publishedAt": "2023-03-20T15:19:19Z",
            "content": "What you need to know\r\n<ul><li>Microsoft Gaming CEO Phil Spencer recently offered additional comments on how Microsoft aims to build a mobile Xbox storefront following the acquisition of Activision B… [+2870 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Tristan",
            "title": "Microsoft ouvre le menu démarrer de Windows à la concurrence",
            "description": "Le très populaire menu démarrer de Windows va s'ouvrir à la concurrence et aux applications tierces d'ici \"quelques mois\" selon Microsoft. \nMicrosoft ouvre le menu démarrer de Windows à la concurrence",
            "url": "https://www.journaldugeek.com/2023/03/20/microsoft-ouvre-le-menu-demarrer-de-windows-a-la-concurrence/",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/02/widgets-meteo-windows-11.jpg",
            "publishedAt": "2023-03-20T17:00:43Z",
            "content": "Le très populaire menu démarrer de Windows va s'ouvrir à la concurrence et aux applications tierces d'ici \"quelques mois\" selon Microsoft.Depuis des années la barre des tâches de Microsoft est bloqué… [+2797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Rédacteur Invité",
            "title": "140 Go pour 13 euros par mois, le forfait le moins cher de France ?",
            "description": "C'est une nouvelle qui risque de faire grand bruit chez les opérateurs : l'un d'eux casse les prix.\n140 Go pour 13 euros par mois, le forfait le moins cher de France ?",
            "url": "https://www.journaldugeek.com/?p=50400736",
            "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/02/smartphone-main-appel.jpg",
            "publishedAt": "2023-03-20T16:21:21Z",
            "content": "C'est une nouvelle qui risque de faire grand bruit chez les opérateurs : l'un d'eux casse les prix.En ce moment chez le MVNO Prixtel, le forfait mobile avec 140 Go de données est proposé avec un prix… [+4765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Isra Fdez",
            "title": "Así de fascinante es un Apple Watch Ultra por dentro: el corazón de un reloj suizo",
            "description": "Un Apple Watch por dentro es un prodigio. No contiene las 400 o 500 piezas de un reloj mecánico de alta complejidad: contiene más, de hecho, si contamos los transistores de su SoC. \"Verdaderas maravillas de la ingeniería\", decían en el desmontaje de iFixit.\n<…",
            "url": "https://www.applesfera.com/apple-watch/asi-fascinante-apple-watch-ultra-dentro-corazon-reloj-suizo",
            "urlToImage": "https://i.blogs.es/12e1ab/reloj/840_560.jpeg",
            "publishedAt": "2023-03-20T12:00:33Z",
            "content": "Un Apple Watch por dentro es un prodigio. No contiene las 400 o 500 piezas de un reloj mecánico de alta complejidad: contiene más, de hecho, si contamos los transistores de su SoC. \"Verdaderas maravi… [+2687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "¿Quieres trabajar en Apple España? Esto es lo que te piden en sus últimas ofertas de empleo",
            "description": "Hay movimientos en Apple Retail, la división de tiendas físicas de Apple. Mientras que en LinkedIn la compañía sigue buscando a expertos para mejorar las funciones de Siri en sus oficinas de Barcelona, en la web oficial han aparecido un conjunto de nuevas ofe…",
            "url": "https://www.applesfera.com/apple-1/quieres-trabajar-apple-espana-esto-que-te-piden-sus-ultimas-ofertas-empleo",
            "urlToImage": "https://i.blogs.es/815697/empleada-apple-store/840_560.jpeg",
            "publishedAt": "2023-03-20T15:00:35Z",
            "content": "Hay movimientos en Apple Retail, la división de tiendas físicas de Apple. Mientras que en LinkedIn la compañía sigue buscando a expertos para mejorar las funciones de Siri en sus oficinas de Barcelon… [+2281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Isra Fdez",
            "title": "\"Dos días a la semana desde casa\": Steve Jobs creía en el teletrabajo en pleno 1981 y así lo fomentó",
            "description": "Hace apenas un año un equipo denominado Apple Together desarrolló una campaña, el #AppleToo, como forma de protesta ante la vuelta a las oficinas debido al conflicto entre la vida familiar y laboral. Apple se mostraba inflexible en un momento delicado: hubo d…",
            "url": "https://www.applesfera.com/apple-1/dos-dias-a-semana-casa-steve-jobs-creia-teletrabajo-pleno-1981-asi-fomentab",
            "urlToImage": "https://i.blogs.es/c8b68b/piensa/840_560.jpeg",
            "publishedAt": "2023-03-20T16:30:35Z",
            "content": "Hace apenas un año un equipo denominado Apple Together desarrolló una campaña, el #AppleToo, como forma de protesta ante la vuelta a las oficinas debido al conflicto entre la vida familiar y laboral.… [+3525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "La NASA se inspira en Apple: este es el traje espacial que nos llevará de vuelta a la Luna",
            "description": "A veces la inspiración puede aparecer de los lugares más inesperados. La NASA está inmersa en preparaciones para empujar al hombre a la Luna de nuevo, y es lo que se han propuesto hacer con las misiones Artemis. Una parte del trabajo de esas misiones es crear…",
            "url": "https://www.applesfera.com/curiosidades/nasa-se-inspira-apple-este-traje-espacial-que-nos-llevara-vuelta-a-luna",
            "urlToImage": "https://i.blogs.es/d54013/news_spacesuitartemisiii140323/840_560.jpeg",
            "publishedAt": "2023-03-20T09:38:27Z",
            "content": "A veces la inspiración puede aparecer de los lugares más inesperados. La NASA está inmersa en preparaciones para empujar al hombre a la Luna de nuevo, y es lo que se han propuesto hacer con las misio… [+2475 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Isra Fdez",
            "title": "Cómo instalar iOS 16.4 ahora y probar en tu iPhone todas sus novedades por adelantado",
            "description": "¿Te gustaría probar la última versión del sistema operativo de Apple, iOS 16.4, antes del lanzamiento de la versión pública? Ya lo decíamos: salvo sorpresas, en dos o tres semanas ya tendremos iOS 16.4 entre nosotros. Pero si no eres de los que se conforman c…",
            "url": "https://www.applesfera.com/tutoriales/como-instalar-ios-16-4-ahora-probar-tu-iphone-todas-sus-novedades-adelantado",
            "urlToImage": "https://i.blogs.es/ba66a9/16.4-ios/840_560.jpeg",
            "publishedAt": "2023-03-20T13:00:33Z",
            "content": "¿Te gustaría probar la última versión del sistema operativo de Apple, iOS 16.4, antes del lanzamiento de la versión pública? Ya lo decíamos: salvo sorpresas, en dos o tres semanas ya tendremos iOS 16… [+3420 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "Trabajó al servicio de Steve Jobs antes de crear Los Simpsons: así es la curiosa \"Guía del estudiante\" de Matt Groening",
            "description": "Conocemos a Matt Groening por lo obvio: es el creador del clásico 'Los Simpson' y de 'Futurama', pero antes de convertirse en una leyenda de la animación hizo otros trabajos por los que también se merece una mención. Suele pasar desapercibido en su historia, …",
            "url": "https://www.applesfera.com/curiosidades/trabajo-al-servicio-steve-jobs-antes-crear-simpsons-asi-curiosa-guia-estudiante-matt-groening",
            "urlToImage": "https://i.blogs.es/12ece2/macintosh-matt-groening/840_560.jpeg",
            "publishedAt": "2023-03-20T10:40:34Z",
            "content": "Conocemos a Matt Groening por lo obvio: es el creador del clásico 'Los Simpson' y de 'Futurama', pero antes de convertirse en una leyenda de la animación hizo otros trabajos por los que también se me… [+2127 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Lindsay E. Mack",
            "title": "How to Track Your Cadence to Improve Your Running",
            "description": "Cadence is a valuable metric for anyone who likes to run, and you can track it with handy apps and smart hardware.",
            "url": "https://www.makeuseof.com/track-cadence-improve-your-running/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/person-running-against-sunlit-background.jpg",
            "publishedAt": "2023-03-20T15:30:16Z",
            "content": "The number of steps you take per minute, cadence is a key measurement for runners. Here’s how to track your cadence while running and use this measurement to improve as an athlete. With a little help… [+6042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Romain Vitt",
            "title": "Pourquoi Apple sort un iPhone 14 jaune maintenant ?",
            "description": "Pourquoi Apple lance un iPhone 14 jaune six mois après l'annonce de cette nouvelle génération ? Quelques éléments de réponse.",
            "url": "https://www.presse-citron.net/pourquoi-apple-sort-un-iphone-14-jaune-maintenant/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/03/iphone-14-jaune.jpg",
            "publishedAt": "2023-03-20T12:30:20Z",
            "content": "<ul><li>Apple lançait un nouvel iPhone 14 jaune début mars 2023</li><li>La stratégie d’Apple consiste à relancer le cycle de vie de son produit pour continuer à concurrencer les nouveaux modèles sous… [+5458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "Simplifiez-vous la vie avec un Mac",
            "description": "C’est incontestable : sur le marché des ordinateurs, le Mac est un incontournable. Conçu pour vous faciliter la vie, vous avez toutes les raisons de craquer chez Boulanger.",
            "url": "https://www.presse-citron.net/simplifiez-vous-la-vie-avec-un-mac/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/03/mac-apple.jpg",
            "publishedAt": "2023-03-20T14:00:27Z",
            "content": "Si Apple séduit avec ses iPhone, la firme de Cupertino domine également le marché des ordinateurs. Son MacBook Air est, dailleurs, son ordinateur le plus populaire, toutes gammes confondues. Combinan… [+3881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "RPB",
            "title": "L’antivirus est-il vraiment obligatoire sur Mac ?",
            "description": "Voici pourquoi utiliser une suite antivirus est une bonne idée sur Mac...",
            "url": "https://www.presse-citron.net/lantivirus-est-il-vraiment-obligatoire-sur-mac/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/02/test-macbook-pro-14-m2pro-clavier.jpg",
            "publishedAt": "2023-03-20T07:55:32Z",
            "content": "<ul><li>Des fonctionnalités comme Gatekeeper et la protection de l’intégrité du système contribuent à protéger les utilisateurs de Mac, mais peuvent être contournées</li><li>Opter pour une suite anti… [+4001 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "50 000 euros : pourquoi un iPhone s’est vendu aussi cher cette année",
            "description": "Un autre iPhone de première génération encore scellé s’est vendu à prix d’or.",
            "url": "https://www.presse-citron.net/50-000-euros-pourquoi-un-iphone-sest-vendu-aussi-cher-cette-annee/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/03/argent-dollars-richesse-economie-paiement.jpg",
            "publishedAt": "2023-03-20T09:04:02Z",
            "content": "<ul><li>Un iPhone de première génération encore scellé sest vendu à plus de 50 000 euros sur un site denchères</li><li>Un signe sur lemballage indiquerait quil sagit de lune des premières productions… [+2346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Simon Krebs",
            "title": "Anzeige: Apple Macbook Pro bei Amazon mit 460 Euro Rabatt",
            "description": "Apples aktuelles Premium-Notebook ist bei Amazon deutlich im Preis gesenkt. Bis zu 460 Euro lassen sich auf das Macbook Pro mit M2 Pro sparen. (Macbook, Apple)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-apple-macbook-pro-bei-amazon-mit-460-euro-rabatt-2303-172772.html&referer=https%3A%2F%2Ft.co%2F447e3b4071",
            "urlToImage": null,
            "publishedAt": "2023-03-20T14:15:03Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pitchfork"
            },
            "author": "Pitchfork",
            "title": "Yves Tumor, Taylor Swift, Amaarae, and More: This Week’s Pitchfork Selects Playlist",
            "description": "Our weekly playlist highlights songs that our writers, editors, and contributors are listening to on repeat",
            "url": "https://pitchfork.com/news/yves-tumor-taylor-swift-amaarae-this-week-pitchfork-selects/",
            "urlToImage": "https://media.pitchfork.com/photos/641496ac2c1807fe15cc99c6/16:9/w_1280,c_limit/Selects%20Web%20March%2020%20Header.jpg",
            "publishedAt": "2023-03-20T12:54:23Z",
            "content": "The staff of Pitchfork listens to a lot of new music. A lot of it. On any given day our writers, editors, and contributors go through an imposing number of new releases, giving recommendations to eac… [+1125 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pitchfork"
            },
            "author": "Pitchfork",
            "title": "Pitchfork Music Festival 2023 Lineup and Dates Announced",
            "description": "Tickets on sale now for Chicago fest taking place July 21-23, headlined by The Smile, Big Thief, and Bon Iver",
            "url": "https://pitchfork.com/news/pitchfork-music-festival-2023-lineup-and-dates-announced/",
            "urlToImage": "https://media.pitchfork.com/photos/6414c8993d953a6c8b110935/16:9/w_1280,c_limit/Pitchfork-Music-Festival-2023.jpg",
            "publishedAt": "2023-03-20T15:00:00Z",
            "content": "Pitchfork is excited to announce that Pitchfork Music Festival will return to Chicagos Union Park from Friday, July 21, through Sunday, July 23. Headlining the 2023 festival are The Smile, Big Thief,… [+1685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GameSpot"
            },
            "author": "Darryn Bonthuys",
            "title": "Phil Spencer Talks Xbox Mobile Store Planned For 2024",
            "description": "Microsoft's mobile games store could launch as early as next year, the company's head of gaming Phil Spencer has said. Thanks to the new Digital Markets Act--legislation that forces Apple and Google to allow users on its platforms to access apps from sources …",
            "url": "https://www.gamespot.com/articles/phil-spencer-talks-xbox-mobile-store-planned-for-2024/1100-6512489/",
            "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4114696-xbox-mobile.jpg",
            "publishedAt": "2023-03-20T13:29:00Z",
            "content": "Microsoft's mobile games store could launch as early as next year, the company's head of gaming Phil Spencer has said. Thanks to the new Digital Markets Act--legislation that forces Apple and Google … [+2304 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GameSpot"
            },
            "author": "Lan Pitts",
            "title": "WWE Wrestlemania 2023: Match Card, Start Time, How To Watch, And More",
            "description": "WWE's Road to Wrestlemania is about to culminate again in its biggest annual event. WrestleMania 39 is back in Hollywood for a two-night spectacle, expected to be headlined by a big-time match between WWE Undisputed Universal Champion Roman Reigns and Royal R…",
            "url": "https://www.gamespot.com/articles/wwe-wrestlemania-2023-match-card-start-time-how-to-watch-and-more/1100-6512501/",
            "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1597/15976769/4114699-20230130-wm-romancody-temp-fc-date-a4f9f55b61b31d73a4e47a0053a8916b.jpg",
            "publishedAt": "2023-03-20T16:47:00Z",
            "content": "WWE's Road to Wrestlemania is about to culminate again in its biggest annual event. WrestleMania 39 is back in Hollywood for a two-night spectacle, expected to be headlined by a big-time match betwee… [+3435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Arif Bacchus",
            "title": "Microsoft might launch app store on iOS and Android catering exclusively to games",
            "description": "According to Xbox head Phil Spencer, Microsoft is planning to launch a new app store for games on iOS and Android as soon as next year.",
            "url": "https://www.xda-developers.com/microsoft-app-store-ios-android-next-year-rumor/",
            "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2016/04/Microsoft-Google-Agree-to-Withdraw-Regulatory-Complaints.jpg",
            "publishedAt": "2023-03-20T15:01:27Z",
            "content": "Microsoft could be digging its gaming feet even deeper into rival platforms soon beyond simple web apps that it already has. That's because, Microsoft Xbox head Phil Spencer recently said in an inter… [+2335 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Mary Kate Carr",
            "title": "Ted Lasso is going to the White House",
            "description": "Ted Lasso is bringing his fish-out-of-water charm to somewhere else he doesn’t belong. He will at least be returning to his homeland, but instead of inspiring from the sidelines, this time he’ll be inspiring from the oval office. That’s right: Jason Sudiekis …",
            "url": "https://www.avclub.com/ted-lasso-is-going-to-the-white-house-1850243336",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2a93fe83c291d7109bd7da604f83debc.jpg",
            "publishedAt": "2023-03-20T15:28:29Z",
            "content": "Ted Lasso is bringing his fish-out-of-water charm to somewhere else he doesnt belong. He will at least be returning to his homeland, but instead of inspiring from the sidelines, this time hell be ins… [+2016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mental Floss"
            },
            "author": "Anastasia Rose Hyden",
            "title": "The Long History of the Figurative 'Literally'—and 8 Great Writers Who Used It",
            "description": "From Austen to Dickens and beyond, famous authors have had no problem with using the word 'literally' in a figurative sense.",
            "url": "https://www.mentalfloss.com/posts/famous-writers-used-literally-figuratively",
            "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3840,h_2160,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01gv6cfxjdm736wy41ym.jpg",
            "publishedAt": "2023-03-20T12:00:01Z",
            "content": "Few things anger members of the self-appointed grammar police more than when people use the word literally in ways outside its strictest definition: In a literal manner or sense, according to the Oxf… [+8638 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka Android"
            },
            "author": "Álvaro García M.",
            "title": "Que tu móvil sólo cargue hasta el 80% no es un fallo: esta es la razón y así puedes cambiarlo",
            "description": "Dejas tu móvil cargando con la esperanza de que cuando pasen unos minutos u horas (dependiendo de si tiene carga rápida o no) esté al 100%. Lo miras pasado ese tiempo y, sorpresa, solo ha cargado hasta el 80%. Y puede que no lo desconectes del cargador y aún …",
            "url": "https://www.xatakandroid.com/tutoriales/que-tu-movil-solo-cargue-80-no-fallo-esta-razon-asi-puedes-cambiarlo",
            "urlToImage": "https://i.blogs.es/2cf343/movil-carga-80/840_560.jpeg",
            "publishedAt": "2023-03-20T16:00:35Z",
            "content": "Dejas tu móvil cargando con la esperanza de que cuando pasen unos minutos u horas (dependiendo de si tiene carga rápida o no) esté al 100%. Lo miras pasado ese tiempo y, sorpresa, solo ha cargado has… [+3079 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka Android"
            },
            "author": "Alejandro Alcolea",
            "title": "El mejor editor de fotografía gratis para tu móvil es de Google. Y no es Google Fotos",
            "description": "Las cámaras de los móviles son cada vez mejores. Cuentan con sensores más grandes, tienen focales muy interesantes, mayores aperturas y emplean, en algunos casos, lentes de mayor calidad. Sumado a esto, hay veces que los fabricantes emplean procesados bastant…",
            "url": "https://www.xatakandroid.com/aplicaciones-android/mejor-editor-fotografia-gratis-para-tu-movil-google-no-google-fotos",
            "urlToImage": "https://i.blogs.es/f3736f/dscf6342/840_560.jpeg",
            "publishedAt": "2023-03-20T15:00:35Z",
            "content": "Las cámaras de los móviles son cada vez mejores. Cuentan con sensores más grandes, tienen focales muy interesantes, mayores aperturas y emplean, en algunos casos, lentes de mayor calidad. Sumado a es… [+4093 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Ryan McNeal",
            "title": "Microsoft plans to launch a game app store on Android and iOS",
            "description": "Phil Spencer spoke about Microsoft's desire to launch an app store specifically for games on Android and iOS.",
            "url": "https://www.androidauthority.com/microsoft-app-store-3300161/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/03/Microsoft-logo-at-MWC-scaled.jpg",
            "publishedAt": "2023-03-20T16:58:53Z",
            "content": "<ul><li>Phil Spencer spoke about Microsofts desire to launch an app store for games on Android and iOS.</li><li>Google and Apple still prevent other app stores from existing on their platforms.</li><… [+1954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Le (nouveau) plan de Microsoft pour s’imposer sur les smartphones",
            "description": "Microsoft va concurrencer l’App Store sur iOS et le Play Store sur Android, si on l’autorise à racheter Activizion Blizzard.",
            "url": "https://www.presse-citron.net/?p=544748",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2020/10/Xbox-Manettes.jpg",
            "publishedAt": "2023-03-20T17:00:47Z",
            "content": "<ul><li>En sappuyant sur le DMA et sur les jeux dActivision Blizzard, Microsoft pourra rivaliser avec lApp Store sur iOS et le Play Store sur Android</li><li>Le DMA entre en vigueur en 2024, tandis q… [+3236 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "OnePlus 11 : erreur de prix ou non, le smartphone est ultra abordable (-30%)",
            "description": "AliExpress nous fait une immense surprise pour son anniversaire : il baisse drastiquement le prix du nouveau OnePlus 11.",
            "url": "https://www.presse-citron.net/oneplus-11-erreur-de-prix-ou-non-le-smartphone-est-ultra-abordable-30/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/03/oneplus11-5g.jpg",
            "publishedAt": "2023-03-20T09:09:33Z",
            "content": "Sur les dernières années, OnePlus a décidé de monter en gamme pour se frotter à ses rivaux Samsung et Apple. Le OnePlus 11, qui est disponible en France depuis le début du mois de février, est une pé… [+4529 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Meredith Hobbs Coons",
            "title": "My Kind Of Country review: Our kind of TV music competition",
            "description": "Apple TV+ has its own Nashville-based singing show now, and it’s actually pretty good. My Kind Of Country, which premieres March 24, aims to set itself apart from other music competition shows with the diversity of talent represented on its stages: people fro…",
            "url": "https://www.avclub.com/my-kind-of-country-review-apple-tv-plus-kacey-musgraves-1850226413",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fd94088d025465a30af903a135fd44cb.jpg",
            "publishedAt": "2023-03-20T15:00:00Z",
            "content": "Apple TV+ has its own Nashville-based singing show now, and its actually pretty good. My Kind Of Country, which premieres March 24, aims to set itself apart from other music competition shows with th… [+5850 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Rita El Khoury",
            "title": "I really want a ChatGPT-like voice assistant in my Google Nest speakers",
            "description": "ChatGPT is currently an on-screen AI model, but I really want its conversational AI abilities as a voice assistant in my Nest smart speakers.",
            "url": "https://www.androidauthority.com/chatgpt-voice-assistant-nest-smart-speakers-3298982/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2020/10/Google-Nest-Audio-AA-1-of-10.jpg",
            "publishedAt": "2023-03-20T13:00:26Z",
            "content": "The past few months in the tech world have been a whirlwind. One minute were amazed but not so impressed by Dall-Es low-quality AI-generated images, the next were somehow chatting with Bing, our favo… [+9429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "José Adorno",
            "title": "Microsoft Xbox app store could come to iPhone in 2024",
            "description": "In an interview with the Financial Times (via 9to5Mac), Microsoft Gaming head Phil Spencer says the company is heavily working in a world where Apple …\nThe post Microsoft Xbox app store could come to iPhone in 2024 appeared first on BGR.",
            "url": "https://bgr.com/tech/microsoft-xbox-app-store-could-come-to-iphone-in-2024/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2022/07/Xbox-One-Backward-Compatibility.jpg?quality=82&strip=all",
            "publishedAt": "2023-03-20T13:51:29Z",
            "content": "In an interview with the Financial Times (via 9to5Mac), Microsoft Gaming head Phil Spencer says the company is heavily working in a world where Apple allows third-party app stores as it wants to brin… [+1595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "José Adorno",
            "title": "iPhone 15 Pro leak shows unified mute and volume buttons won’t come to base models",
            "description": "Unseen iPhone 15 Pro CAD drawing shows unified mute and volume buttons for Apple’s upcoming release. As shared by Twitter user ShrimpApplePro, the Cupertino firm …\nThe post iPhone 15 Pro leak shows unified mute and volume buttons won’t come to base models app…",
            "url": "https://bgr.com/tech/iphone-15-pro-leak-shows-unified-mute-and-volume-buttons-wont-come-to-base-models/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/03/iphone-15-pro-cad-leak-bgr.jpg?quality=82&strip=all",
            "publishedAt": "2023-03-20T17:20:00Z",
            "content": "Unseen iPhone 15 Pro CAD drawing shows unified mute and volume buttons for Apple’s upcoming release. As shared by Twitter user ShrimpApplePro, the Cupertino firm could adopt a similar approach it had… [+1633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Joe Wituschek",
            "title": "Netflix wants its gaming service to succeed where Google Stadia failed",
            "description": "Netflix is going to try to succeed where Google failed. In a briefing with reporters that included The Verge, Leanne Loombe, Netflix’s vice president of …\nThe post Netflix wants its gaming service to succeed where Google Stadia failed appeared first on BGR.",
            "url": "https://bgr.com/tech/netflix-wants-its-gaming-service-to-succeed-where-google-stadia-failed/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/01/Netflix-logo.jpg?quality=82&strip=all",
            "publishedAt": "2023-03-20T15:32:24Z",
            "content": "Netflix is going to try to succeed where Google failed.\r\nIn a briefing with reporters that included The Verge, Leanne Loombe, Netflix’s vice president of external games, confirmed that the company is… [+2486 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Small Business Trends"
            },
            "author": "Small Business Radio Show",
            "title": "How Deep Listening Will Boost Your Small Business",
            "description": "On the Small Business Radio Show, my guest is Oscar Trimboli who is on a quest to create 100 million Deep Listeners.",
            "url": "https://smallbiztrends.com/2023/03/how-deep-listening-will-boost-your-small-business.html",
            "urlToImage": "https://media.smallbiztrends.com/2023/03/how-deep-listening-will-boost-your-small-business.png",
            "publishedAt": "2023-03-20T11:30:13Z",
            "content": "While I know that listening is an important part of building any relationship in business, I am admittedly lousy at it. Unfortunately, I am either not interested in what the speaker is saying or I am… [+1694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
            "title": "Apple could avoid damaging layoffs thanks to these key decisions",
            "description": "Apple is reportedly making changes to product plans and more in an attempt to avoid laying off employees as its competitors fire people by the thousands.",
            "url": "https://www.imore.com/apple/apple-could-avoid-damaging-layoffs-thanks-to-these-key-decisions",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/nvkHYTvCVvLgt8RVfEaFwN-1200-80.jpeg",
            "publishedAt": "2023-03-20T14:44:32Z",
            "content": "Apple is reportedly \"doing whatever it can to avoid laying off employees\" at a time when competitors like Meta, Microsoft, and Google are all firing people by the thousands.\r\nOngoing economic uncerta… [+1892 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
            "title": "Rare Apple computer worth thousands found in $250 auctioned storage unit",
            "description": "A rare and boxed Apple IIgs has been found after someone won a storage space auction for just $250.",
            "url": "https://www.imore.com/apple/rare-apple-computer-worth-thousands-found-in-dollar250-auctioned-storage-unit",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/qQV8mhbVjayghrWzVfi5zj-1200-80.jpg",
            "publishedAt": "2023-03-20T12:52:40Z",
            "content": "Some people have all the luck! After winning an auction for a storage space ,one lucky buyer found that they'd managed to pick up a boxed Apple IIgs and accessories. And some of the boxes are still s… [+1739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
            "title": "Apple Pay comes to Korea but still faces critical infrastructure challenges",
            "description": "Apple Pay is coming to Korea on Tuesday, March 21 but some are worried that the infrastructure isn't ready to support it.",
            "url": "https://www.imore.com/iphone/apple-pay-comes-to-korea-but-still-faces-critical-infrastructure-challenges",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/xYxdJHAL55pVVX5Ai5hLEj-1200-80.jpg",
            "publishedAt": "2023-03-20T11:21:13Z",
            "content": "Apple Pay is finally coming to South Korea starting on Tuesday, March 21 but only one card will be supported at launch. What's more, some industry watchers are concerned that there won't be enough su… [+1835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
            "title": "A mobile gaming subscription war looms as Netflix sets its sights on Apple Arcade",
            "description": "Apple, Microsoft, and Netflix are on a collision course in the world of mobile gaming if third-party app stores are allowed on iOS.",
            "url": "https://www.imore.com/apple/a-mobile-gaming-subscription-war-looms-as-netflix-sets-its-sights-on-apple-arcade",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/GJxaAxqGBKjYGDvwmcAkxg-1200-80.png",
            "publishedAt": "2023-03-20T17:01:41Z",
            "content": "Microsoft and Netflix are ready to take on Apple in the mobile gaming space — and the first shots have already been fired.\r\nApple has long been the master of its kingdom, calling the App Store shots … [+4118 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "Stephen Warwick",
            "title": "iPhone 15 Pro leak reveals design change 16 years in the making",
            "description": "A new iPhone 15 Pro leak has revealed Apple plans to ditch its famous mute switch in favor of a button.",
            "url": "https://www.imore.com/iphone/iphone-15/iphone-15-pro-leak-reveals-design-change-16-years-in-the-making",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZyLRj2Zj7tTuoas88XAmFb-1200-80.jpg",
            "publishedAt": "2023-03-20T16:52:49Z",
            "content": "A new iPhone 15 Pro leak appears to have revealed that Apple is indeed planning to drop the mute switch after sixteen years, eschewing a design feature Apple has kept on the iPhone since its very fir… [+1632 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "gerald.lynch@futurenet.com (Gerald Lynch)",
            "title": "Apple smart home push hits cost-cutting snag just as the Matter race speeds up",
            "description": "A number of Apple's future products have been put on the back burner, including a screen-equipped HomePod, according to a new report.",
            "url": "https://www.imore.com/smart-home/apple-smart-home-push-hits-cost-cutting-snag-just-as-the-matter-race-speeds-up",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/9RocdbypnUAJQtYiK8NWqj-1200-80.jpg",
            "publishedAt": "2023-03-20T10:24:45Z",
            "content": "Apple is said to be delaying plans to make a renewed push into the smart home space in an effort to cut spending across the company, a new report states.\r\nIn Mark Gurman’s Power On newsletter (opens … [+2129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "Stephen Warwick",
            "title": "Apple's new Mumbai \"retail landmark\" is finally going to open next month",
            "description": "Apples' retail landmark store in Mumbai is reportedly set to open next month.",
            "url": "https://www.imore.com/apple/apples-new-mumbai-retail-landmark-is-finally-going-to-open-next-month",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/fHapWc6SoVxcKGDSrmStMc-1200-80.jpg",
            "publishedAt": "2023-03-20T10:41:30Z",
            "content": "Apple's first-ever India retail store is reportedly set to open next month, after years of delays. \r\nA new report says that Apple's Mumbai store, which is set to occupy 22,000 square feet of prime re… [+1819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "Tammy Rogers",
            "title": "Ted Lasso cast and Joe Biden team up to promote the importance of mental health",
            "description": "The cast of Ted Lasso is off to the White House to meet Joe and Jill Biden to talk mental health.",
            "url": "https://www.imore.com/music-movies-tv/apple-tv/ted-lasso-cast-and-joe-biden-team-up-to-promote-mental-health",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/tR9ZahQurN5ZchFq5YLNbh-1200-80.jpg",
            "publishedAt": "2023-03-20T10:38:39Z",
            "content": "Ted Lasso and a small contingent of the AFC Richmond crew are going to the White House to meet Joe and Linda Biden to talk about the importance of mental health.\r\nReported by Variety, confirmed by Ap… [+1594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
            "title": "Microsoft is planning a new games app store for iPhone",
            "description": "Microsoft is planning to launch an Xbox Marketplace on iPhone in the coming year, according to the CEO, Phil Spencer.",
            "url": "https://www.imore.com/iphone/microsoft-is-planning-a-new-games-app-store-for-iphone",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/F7WxDRGXW84bbTzaJbK4aW-1200-80.jpg",
            "publishedAt": "2023-03-20T12:37:49Z",
            "content": "Microsoft wants to launch a new app store for games on iPhone and Android as soon as next year, according to the CEO of Microsoft Gaming, Phil Spencer.\r\nSpeaking in an interview ahead of the Game Dev… [+1588 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
            "title": "Russia's Kremlin bans iPhones as Putin's workers fear espionage threat",
            "description": "The Kremlin has banned those working on President Putin's 2024 re-election from using iPhones over espionage fears.",
            "url": "https://www.imore.com/iphone/russias-kremlin-bans-iphones-as-putins-workers-fear-espionage-threat",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/jfzMtns8deDP7APXfNi2zn-1200-80.jpg",
            "publishedAt": "2023-03-20T12:45:59Z",
            "content": "Russians working on President Putin's 2024 re-election campaign have been told that they cannot use an iPhone over espionage fears.\r\nWorkers have been told that they have until April 1, 2023, to get … [+1799 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
            "title": "How to clear cache on iPhone & iPad",
            "description": "It's easy to clear cache on iPhone. Here's how to clear the Safari and third-party app caches on your iPhone or iPad.",
            "url": "https://www.imore.com/iphone/how-to-clear-cache-on-iphone-and-ipad",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/vXho67r8go7hURRnHALjMR-1200-80.jpg",
            "publishedAt": "2023-03-20T16:43:14Z",
            "content": "Over time your iOS device can slow down and feel sluggish due to the system cache filling up. Whether it’s because of Safari or third-party apps, it’s easy to clear the cache, history, and cookies on… [+2468 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "/FILM"
            },
            "author": "Joe Roberts",
            "title": "Blade Runner 2099: What We Know About The Limited Series For Prime Video",
            "description": "No matter how much time passes, \"Blade Runner\" consistently holds up as not just one of Harrison Ford's best films, but one of the greatest sci-fi movies of all time. Forty years after Ridley Scott's 1982 masterpiece debuted, it still feels fresh, relevant, a…",
            "url": "https://www.slashfilm.com/1229650/blade-runner-2099-what-we-know-about-the-limited-series-for-prime-video/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/blade-runner-2099-what-we-know-about-the-limited-series-for-prime-video/l-intro-1678957450.jpg",
            "publishedAt": "2023-03-20T02:00:05Z",
            "content": "\"Blade Runner 2099\" comes from Alcon Entertainment, which also produced fellow Prime Video series \"The Expanse.\" Ridley Scott's Scott Free Productions and Amazon Studios are helping realize the \"Blad… [+1447 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "/FILM"
            },
            "author": "Shania Russell",
            "title": "Ted Lasso Season 3 Has Established The Show's First Proper Villain Narrative",
            "description": "There's a reason that Nathan Shelley (Nick Mohammed) is the very first person that jolly football coach Ted Lasso (Jason Sudeikis) meets when he arrives at Nelson Road in season 1 of the Apple TV+ series. At the time, Nate was the perfect encapsulation of the…",
            "url": "https://www.slashfilm.com/1232703/ted-lasso-season-3-has-established-the-shows-first-proper-villain-narrative/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/ted-lasso-season-3-has-established-the-shows-first-proper-villain-narrative/l-intro-1679290640.jpg",
            "publishedAt": "2023-03-20T06:17:12Z",
            "content": "For two seasons, Nate was empowered by Ted, who listened to his ideas, valued his input, and praised him at every turn. But how long can you call a guy Nate the Great before it starts going to his he… [+1510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "/FILM"
            },
            "author": "Joe Roberts",
            "title": "Harrison Ford Says He's Never Played A Character Like 1923's Jacob Dutton",
            "description": "Harrison Ford is trying new things of late, and we're all for it. After decades of sticking exclusively to movies, barring that cameo he did for \"The Young Indiana Jones Chronicles\" in the '90s, the veteran star has finally waded into the streaming waters and…",
            "url": "https://www.slashfilm.com/1229625/harrison-ford-says-hes-never-played-a-character-like-1923s-jacob-dutton/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/harrison-ford-says-hes-never-played-a-character-like-1923s-jacob-dutton/l-intro-1678952042.jpg",
            "publishedAt": "2023-03-20T01:00:17Z",
            "content": "Over the course of a decades-long career, Harrison Ford has proven himself a multi-faceted and dedicated performer. Even on the upcoming \"Indiana Jones and the Dial of Destiny,\" Ford wasn't afraid to… [+1561 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vox"
            },
            "author": "Vox Communications",
            "title": "Vox’s March Highlight Issue Is a Package Examining Doomerism",
            "description": "Inside this issue: For the March issue of The Highlight, Vox examines pervasive, unearned pessimism.",
            "url": "https://www.vox.com/2023/3/20/23648456/voxs-march-highlight-issue-is-a-package-examining-doomerism",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Sc8xOmRpTjk5GLu6pG54D_Wbyg0=/0x137:7200x3907/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24492545/Doomerism_Header_Final_01.jpg",
            "publishedAt": "2023-03-20T16:29:54Z",
            "content": "Tyler Comrie for Vox\r\n\n \n\n Inside this issue: For the March issue of The Highlight, Vox examines pervasive, unearned pessimism. For the March issue of The Highlight, Vox examines pervasive pessimism.… [+1693 chars]"
        }
    ]
  constructor(){
super();
console.log("hell i nam constroaform news apppp")

this.state={
    articles:this.articles,
    loading:false,
}
  }
  render() {
    return (
      <div className="container my-3">
      <h2>News Monkey Top HeadLine</h2>
      <div className="row">
        <div className="col-md-4">
        <NewsItem title="my title" descr="seddd" iurl="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/287ff4aa016e2fef3462ac218030c990.jpg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="my title" descr="seddd" iurl="https://cdn.vox-cdn.com/thumbor/2_Nsastlbay7zvUdn7LZzlAFMoc=/0x131:1793x1070/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24508019/The_Gift_129538147_large.jpeg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="my title" descr="seddd" iurl="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/287ff4aa016e2fef3462ac218030c990.jpg"/>
        </div>
        


        
        </div>

      </div>
    )
  }
  }

