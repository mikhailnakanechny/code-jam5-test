(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return D}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(137),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(139),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var s=a(29);a.d(t,"parsePath",function(){return s.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function D(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(48),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},148:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(140),c=a(138),d=(a(28),function(e){var t=e.changeLng,a=e.lng,n=e.availableLngs;return i.a.createElement("select",{onChange:function(e){return t(e.target.value)}},n.map(function(e){return i.a.createElement("option",{key:e,selected:a===e},e)}),";")}),m=function(e){return i.a.createElement(c.Language,null,function(t){return i.a.createElement(d,Object.assign({},e,t))})},s=function(e){e.siteTitle;var t=e.navLink1,a=e.navLink2,n=e.navLink3;return i.a.createElement("div",{style:{background:"#38393d",fontFamily:"Segoe UI, sans-serif"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__item"},i.a.createElement(c.Link,{className:"nav__link",to:"/",style:{textDecoration:"none"}},i.a.createElement("div",null,t))),i.a.createElement("li",{className:"nav__item"},i.a.createElement(c.Link,{className:"nav__link",to:"/directors-list",style:{textDecoration:"none"}},i.a.createElement("div",null,a))),i.a.createElement("li",{className:"nav__item"},i.a.createElement(c.Link,{className:"nav__link",to:"/team",style:{textDecoration:"none"}},i.a.createElement("div",null,n)))))),i.a.createElement("div",{style:{position:"absolute",top:0,right:0}},i.a.createElement(m,null)))},p=function(e){var t=e.footerDescr,a=e.footerC,n=e.footerBtn,r=e.footerPlacholder;return i.a.createElement("footer",{className:"footer",style:{background:"#37383b",fontFamily:"Segoe UI, sans-serif"}},i.a.createElement("div",{className:"container",style:{maxWidth:"960px",margin:"0 auto",padding:"1rem"}},i.a.createElement("div",{className:"footer__inner"},i.a.createElement("div",{className:"footer__about"},i.a.createElement("p",{style:{color:"#ffffff",fontSize:"0.9rem",margin:"15px 0px 0px"}},t)),i.a.createElement("div",{className:"footer__mail"},i.a.createElement("form",{style:{marginBottom:"0"}},i.a.createElement("div",{style:{display:"flex",position:"relative"}},i.a.createElement("input",{type:"text",placeholder:r,className:"footer__input",style:{background:"#47474b",fontSize:"0.9rem",paddingLeft:"1rem",margin:"15px 0px 0px",border:"none",color:"#ffffff"}}),i.a.createElement("button",{className:"footer__button",style:{background:"#ed2324",border:"none",color:"#ffffff",fontSize:"0.9rem",margin:"15px 0px 0px",height:"100%",right:"0"}},n)))),i.a.createElement("div",{className:"footer__copyright",style:{display:"flex"}},i.a.createElement("span",{style:{color:"#ffffff"}},"© 2019 ",a)))))},u=(a(150),function(e){var t=e.children,a=(e.data,e.t);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.Head,{hreflang:!0},i.a.createElement("title",null,a("Gatsby I18next")),i.a.createElement("meta",{name:"description",content:"Example Gatsby site with i18next"}),i.a.createElement("meta",{name:"keywords",content:"gatsby, react, i18next"})),i.a.createElement(s,{siteTitle:a("This is Gatsby with I18next"),navLink1:a("navLink1"),navLink2:a("navLink2"),navLink3:a("navLink3")}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,minHeight:"100vh"}},t),i.a.createElement(p,{footerDescr:a("footerDescr"),footerC:a("footerC"),footerBtn:a("footerBtn"),footerPlacholder:a("footerPlacholder")}))});u.propTypes={children:o.a.node.isRequired};t.a=Object(l.withNamespaces)()(u)},150:function(e,t,a){},157:function(e){e.exports=[{id:"0",name:"Владимир Корш-Саблин",placeOfBirth:"Москва",dateOfBirth:"16.03.1900",dateOfDeath:"06.06.1974",shortInfo:"Белорусский советский кинорежиссёр, актёр кино. Народный артист СССР (1969). Лауреат Сталинской премии (1950). Один из основоположников белорусского кино",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%9A%D0%BE%D1%80%D1%88-%D0%A1%D0%B0%D0%B1%D0%BB%D0%B8%D0%BD.gif/332px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%9A%D0%BE%D1%80%D1%88-%D0%A1%D0%B0%D0%B1%D0%BB%D0%B8%D0%BD.gif?uselang=ru",gallery:["https://upload.wikimedia.org/wikipedia/commons/2/23/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%9A%D0%BE%D1%80%D1%88-%D0%A1%D0%B0%D0%B1%D0%BB%D0%B8%D0%BD.gif","https://www.kino-teatr.ru/acter/album/19250/560402.jpg","https://www.kino-teatr.ru/acter/album/19250/560401.jpg","https://upload.wikimedia.org/wikipedia/ru/7/74/Iskateli_schastya.jpg","https://upload.wikimedia.org/wikipedia/ru/9/90/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%97%D0%B0%D1%81%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2_%28%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg"],video:"g1qkRRX6aKc",timelineBiography:[{date:"16.03.1900",event:"Владимир Корш-Саблин родился в Москве."},{date:"1917",event:"После окончания театрального училища, в 1917 году начал творческую деятельность как актёр в театре своего деда по матери, Федора Адамовича Корша — Театре Корша (по семейному преданию, дед, впечатленный успехами внука, разрешил ему соединить обе фамилии)."},{date:"1923",event:"Пришёл в кино."},{date:"1925",event:"Помощник и ассистент режиссёра, актёр киностудии «Госкино» («Совкино») в Москве."},{date:"1926",event:"Актёр и режиссёр (с 1929 года) киностудии «Советская Беларусь» специального управления «Белгоскино» (позже «Беларусьфильм»); снимал комедии, фильмы-драмы, биографические фильмы"},{date:"1945—1960",event:"Корш-Саблин был художественным руководителем киностудии «Беларусьфильм»."},{date:"1957",event:"Председателем Оргбюро Союза работников кинематографии Белорусской ССР."},{date:"1962—1974",event:"Первый секретарь Союза кинематографистов БССР."},{date:"06.06.1974",event:"Владимир Владимирович Корш-Саблин скончался 6 июля 1974 года. Похоронен в Минске на Восточном кладбище[3"}],works:["1929 — В огне рождённая","1930 — Жизнь и учеба кавдивизии (документальный)","1930 — Из топи болот (документальный)","1931 — Бумага (документальный)","1931 — 3 штыка (документальный)","1931 — Стальной путь (документальный)","1931 — Солнечный поход","1933 — Первый взвод","1934 — Золотые огни (совместно с Б. Л. Бродянским","1936 — Искатели счастья","1937 — Дочь Родины","1939 — Огненные годы","1940 — Моя любовь","1942 — Белорусские новеллы (киносборник) (новеллы Пчёлка, На зов матери) (совместно с Ю. В. Таричем)","1943 — Живи, родная Беларусь! (киноконцерт) (совместно с Н. Ф. Садковичем)","1944 — Освобождение советской Белоруссии (документальный) (совместно с Н. Ф. Садковичем)","1947 — Новый дом","1949 — Константин Заслонов (совместно с А. М. Файнциммером)","1951 — Советская Белоруссия (документальный) (совместно с Н. Кравчуновским)","1953 — Поют жаворонки (совместно с К. Н. Санниковым)","1954 — Кто смеется последним?","1955 — Посеяли девушки лён","1958 — Красные листья","1961 — Первые испытания","1964 — Москва — Генуя (совместно с А. В. Спешневым и П. Н. Армандом)","1967 — Запомним этот день","1970 — Крушение империи "],map:[{lat:55.751244,lng:37.618423,title:"Родился 16.03.1900 / Работал "},{lat:53.9,lng:27.56667,title:"Умер 06.06.1974 / Работал"}]},{id:"1",name:"Виктор Тимофеевич Туров",placeOfBirth:"Могилев",dateOfBirth:"25.10.1936",dateOfDeath:"31.10.1996",shortInfo:"Белорусский советский кинорежиссёр, сценарист, педагог. Народный артист СССР ",photo:"https://p.cinemate.cc/media/p/9/3/265639/0.big.jpg",gallery:["https://upload.wikimedia.org/wikipedia/commons/8/8d/Alexey_Kuzmich_Portrait_of_national_actor_Victor_Turov_1989.JPG","https://p.cinemate.cc/media/p/9/3/265639/0.big.jpg","https://p.cinemate.cc/media/m/4/0/37704/0.big.jpg","https://p.cinemate.cc/media/m/0/0/51000/0.big.jpg","https://p.cinemate.cc/media/m/6/0/33106/0_7u9I9Yb.big.jpg"],video:"2juET6V3YpM",timelineBiography:[{date:"25.10.1936",event:"Виктор Туров родился в Могилёве."},{date:"1959",event:"Режиссёр киностудии «Беларусьфильм» (Минск). Автор ряда документальных фильмов и сюжетов в киножурнале «Советская Беларусь». "},{date:"1961",event:"Закончил режиссёрский факультет ВГИК (мастерская А. П. Довженко и М. Э. Чиаурели)."},{date:"1989—1996",event:"Вёл режиссёрскую мастерскую в Белорусской академии искусств (профессор)"},{date:"1976—1981",event:"1-й секретарь Союза кинематографистов Белорусской ССР. Академик Всемирной академии славянского искусства."},{date:"31.10.1996",event:"Виктор Туров умер 31 октября 1996 года. Похоронен в Минске на Восточном кладбище."}],works:["1959 — Гомельские танцоры (документальный)","1959 — Наш Солигорск (документальный)","1961 — Комстрой (новелла) (киноальманах «Рассказы о юности»)","1962 — Звезда на пряжке (новелла) (киноальманах «Маленькие мечтатели»)","1964 — Через кладбище (дипломная работа)","1966 — Я родом из детства","1967 — Война под крышами","1969 — Сыновья уходят в бой","1971 — Жизнь и смерть дворянина Чертопханова","1973 — Горя бояться — счастья не видать","1974 — Время её сыновей","1976 — Воскресная ночь","1979 — Точка отсчёта","1981 — Люди на болоте","1982 — Дыхание грозы","1984 — Меньший среди братьев","1984 — Близкое и далёкое (8-серийная телеверсия фильмов Люди на болоте и Дыхание грозы с дополнительно отснятыми сценами)[3]","1988 — Красный цвет папоротника («Переправа»)","1989 — Высокая кровь","1993 — Черный аист","1994 — Шляхтич Завальня, или Беларусь в фантастических рассказах"],map:[{lat:53.9168,lng:30.3449,title:"Родился 25.10.1936"},{lat:53.9,lng:27.56667,title:"Умер 31.10.1996 / Работал"}]},{id:"2",name:"Михаил Николаевич Пташук",placeOfBirth:"Федюки",dateOfBirth:"28.01.1943",dateOfDeath:"26.04.2002",shortInfo:"Советский и белорусский кинорежиссёр. Народный артист БССР (1990). ",photo:"https://upload.wikimedia.org/wikipedia/ru/f/f7/M_Ptashuk.jpg",gallery:["https://upload.wikimedia.org/wikipedia/ru/f/f7/M_Ptashuk.jpg","https://p.cinemate.cc/media/images/poster/2001/41/1292319390.big.jpg","https://p.cinemate.cc/media/m/5/8/23585/0.big.jpg","https://p.cinemate.cc/media/images/poster/1986/33690/1378015073.big.jpg","https://p.cinemate.cc/media/images/poster/1979/30370/1377925964.big.jpg"],video:"JlyFr3XbmM8",timelineBiography:[{date:"28.01.1943",event:"Михаил родился в оккупированной немецкими захватчиками деревне Федюки."},{date:"1967",event:"Окончил Московское театральное училище имени Б. В. Щукина."},{date:"1972",event:"Обучался на Высших режиссёрских курсах Госкино СССР в мастерской Георгия Данелии."},{date:"26.04.2002",event:"Погиб в Москве в автомобильной катастрофе по пути на присуждение премии «Ника». Похоронен в Минске на Восточном кладбище."}],works:["1973 — Про Витю, про Машу и морскую пехоту","1975 — Лесные качели","1976 — Время выбрало нас","1980 — Возьму твою боль","1984 — Чёрный замок Ольшанский","1986 — Знак беды","1989 — Наш бронепоезд","1992 — Кооператив «Политбюро», или Будет долгим прощание","1995 — Игра воображения","2001 — В августе 44-го…","2003 — В июне 41-го /The Burning Land"],map:[{lat:53.067529,lng:26.168977,title:"Родился 28.01.1943"},{lat:53.9,lng:27.56667,title:"Работал"},{lat:55.751244,lng:37.618423,title:"Умер 26.04.2002 / Работал"}]},{id:"3",name:"Леонид Алексеевич Нечаев",placeOfBirth:"Москва",dateOfBirth:"03.05.1939",dateOfDeath:"23.01.2010",shortInfo:"Советский, белорусский и российский кинорежиссёр, писатель, Заслуженный деятель искусств Российской Федерации, народный артист Российской Федерации (2003). ",photo:"https://vokrug.tv/pic/person/d/5/8/3/d583ad338f6aede06db0b8864bc4bb03.jpeg",gallery:["https://upload.wikimedia.org/wikipedia/commons/1/11/Leonid_Nechayev_A.jpg","https://p.cinemate.cc/media/images/poster/1975/24884/1371138025.medium.jpg","https://p.cinemate.cc/media/images/poster/1987/24196/1377724453.medium.jpg","https://p.cinemate.cc/media/images/poster/1983/23266/1377682455.medium.jpg","https://p.cinemate.cc/media/m/0/0/23200/0_2.medium.jpg"],video:"mq4P_PndrPE",timelineBiography:[{date:"03.05.1939",event:"Леонид родился в Москве."},{date:"1967",event:"В 1967 году Леонид Нечаев окончил режиссёрский факультет ВГИК, (мастерская Якова Сегеля). "},{date:"1967-1974",event:"Работал на творческом объединении «Экран», где снял ряд хроникально-документальных фильмов"},{date:"1974",event:"Начал снимать детские художественные фильмы"},{date:"23.01.2010",event:"Скончался  в Москве, смерть наступила в результате перенесённого инсульта. Леонида Нечаева похоронили 28 января 2010 года на Домодедовском кладбище."}],works:["1974 — Приключения в городе, которого нет / режиссёр","1975 — Приключения Буратино / режиссёр","1976 — Эквилибрист / режиссёр","1977 — Про Красную Шапочку / режиссёр","1979 — Примите телеграмму в долг / режиссёр","1980 — Мнимый больной / режиссёр","1981 — Проданный смех / режиссёр, актёр (капитан корабля)","1983 — Сказка о Звёздном мальчике / режиссёр","1984 — Рыжий, честный, влюблённый / режиссёр","1987 — Питер Пэн / режиссёр","1987 — Репетитор / режиссёр","1989 — Не покидай / режиссёр, актёр (точильщик ножей), озвучивание (Лысый Лакей)","1991 — Безумная Лори / режиссёр, автор сценария","1997 — Сладкая сказка / режиссёр (в рамках проекта «100 фильмов о Москве»)","2001 — Сверчок за очагом / режиссёр","2007 — Дюймовочка / режиссёр, автор сценария"],map:[{lat:55.751244,lng:37.618423,title:" Работал / Умер 02.03.2011 "},{lat:53.9,lng:27.56667,title:"Родился 17.04.1940 / Работал"}]},{id:"4",name:"Валерий Давидович Рубинчик",placeOfBirth:"Минск",dateOfBirth:"17.04.1940",dateOfDeath:"02.03.2011",shortInfo:"Белорусский и российский советский кинорежиссёр и сценарист. ",photo:"https://upload.wikimedia.org/wikipedia/ru/a/a8/Rubinchik_vd.jpg",gallery:["https://upload.wikimedia.org/wikipedia/ru/a/a8/Rubinchik_vd.jpg","https://p.cinemate.cc/media/images/poster/1974/24647/1376373738.big.jpg","https://p.cinemate.cc/media/m/7/9/47397/0_1.big.jpg","https://p.cinemate.cc/media/m/7/5/73757/0.big.jpg","https://p.cinemate.cc/media/m/5/9/23495/0.big.jpg"],video:"WJDTza3xXZo",timelineBiography:[{date:"17.04.1940",event:"Валерий родился в Минске."},{date:"1969",event:"Окончил ВГИК, мастерская Я. Сегеля. "},{date:"1969",event:"Режиссёр на студии «Беларусьфильм». Был художественным руководителем «Беларусьфильма»."},{date:"1990",event:"Режиссёр на студии «Мосфильм». "},{date:"1999",event:"Возглавил мастерскую режиссуры кино и телевидения в Институте Современного Искусства, с 2004 года — декан факультета режиссуры кино и ТВ там же."},{date:"2004",event:"Декан факультета режиссуры кино и ТВ в Институте Современного Искусства."},{date:"02.03.2011",event:"Скончался после тяжёлой продолжительной болезни. Похоронен на Востряковском кладбище."}],works:["1965 — Сын","1967 — Осенний этюд","1967 — Шестое лето","1969 — Красный агитатор Трофим Глушков","1972 — Могила льва","1974 — Последнее лето детства (по трилогии А. Н. Рыбакова)[18]","1975 — Гамлет Щигровского уезда","1976 — Венок сонетов — приз за лучший фильм для детей и юношества на 10 ВКФ(1977, Рига)","1979 — Дикая охота короля Стаха","1982 — Культпоход в театр","1983 — Комический любовник, или Любовные затеи сэра Джона Фальстафа","1987 — Отступник","1989 — Комедия о Лисистрате","1991 — Нелюбовь","1995 — Пейзаж с тремя купальщицами","2002 — Кино про кино","2006 — Нанкинский пейзаж"],map:[{lat:55.751244,lng:37.618423,title:"Родился 03.05.1939 / Работал / Умер 23.01.2010 "},{lat:53.9,lng:27.56667,title:"Работал"}]}]}}]);
//# sourceMappingURL=2-8d3d79d17bfac00528c4.js.map