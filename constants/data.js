const DATA = [
    {
        'id': 0,
        'title': 'Grand Theft Auto V',
        'img': 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/GTAV_Official_Cover_Art.jpg/274px-GTAV_Official_Cover_Art.jpg',
        'reviews': '6,100',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/QkkoHAzjnUs?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
        'hero': [
            {
                'img': 'https://upload.wikimedia.org/wikipedia/ru/d/d8/%D0%A2%D1%80%D0%B5%D0%B2%D0%BE%D1%80_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81.jpg',
                'characteristic': 'Тревор Филипс (англ. Trevor Philips, неизвестно) — вымышленный персонаж из серии игр «Grand Theft Auto»; один из троих протагонистов (главных героев) Grand Theft Auto V (2013) вместе с Майклом де Сантой и Франклином Клинтоном. В Grand Theft Auto V Тревора озвучил американский актёр Стивен Огг; внешность и анимация Тревора в игре также были созданы при участии Огга с помощью технологии захвата движения.'
            },
            {
                'img': 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a4/Franklin_Clinton_Face.png/548px-Franklin_Clinton_Face.png',
                'characteristic': 'Фрaнклин Клинтон (англ. Franklin Clinton) — один из трёх протагонистов Grand Theft Auto V. На момент событий игры Франклину 25 лет, является самым молодым из трёх протагонистов[5][6]. Пытается вырваться из жизни в гетто.На момент событий дополнения «The Contract» для GTA Online (вышло 15 декабря 2021 года) ему исполнилось 33 года, имеет семью и является основателем и менеджером агентства F. Clinton and Partner.'
            },
            {
                'img': 'data:image/jpeg;base64,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',
                'characteristic': 'Майкл де Санта — один из трёх протагонистов Grand Theft Auto V. До событий игры грабитель на пенсии, завершивший свою карьеру на Среднем Западе в штате Северный Янктон. На момент событий в Grand Theft Auto V Майклу 48 лет, у него есть жена Аманда и два совершеннолетних ребёнка: Трейси и Джимми.',
            },
        ],
    },
    {
        'id': 1,
        'title': 'Cyberpunk 2077: Phantom Liberty',
        'img': 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_card_v2_mobile_slider_450.jpg',
        'reviews': '6,200',
        'date': 'September 26, 2023',
        'genres': 'Role-playing - Action - Sci-fi',
        'star': 4,
        'video': 'https://www.youtube.com/embed/4QGhsGvws58?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
        'hero': [
            {
                'img':'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKABHQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADcQAAEEAQMCBAQEBgEFAQAAAAEAAgMRIQQSMUFRBRMiYQYycYFSkaGxFCMzQsHw8VNikrLRFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHREBAQEBAQEBAQEBAAAAAAAAAAERAiExQQMyIv/aAAwDAQACEQMRAD8A+J0gUaRDVnQoRrCPVRNChEBGlKQSlKURGeEApEBBThAaRDEtohynoOxCqKJdhKCr6GpvVT0/hQKCAn2agipSAJgW/hUpTaeyoJ2pSFOOVFkClKRUQClKTKUgWlKTUpSaFpRNShCBVEaUITQKUUUVApRFRAaUTIG1AqKCnRUMCiMquzaNlTFWFqXaRkJbI6pg+k9BDu7SmDmnkJd99Et+yIt9B6I03sqQe9pw5o6FQCSrwkAtF5BOFGfMFRYyBzjwQtEfh738Fa9MGloJW6EsYbTcWTXOj8HkcasrRH4FITkldRmoa3Nq7+NaAKCztbyOU7wBzmU12Uw8AIFbxfddA64njCofrXBNpZHG8T0B0Xl7qJcP1XNIXoNfINVDThluQVwnj1laYpAojSlIgBEqUogCiZRQKomQQClKRUQCkEyB5VCqIoIHRUpRRSu5U6Iu5U6FEV9UUOqK0IooogiiKiggRQCNIAUW8hSsWmaNuTwg3QPoBX+aVmjFgUtETC41RUaWxuc7k4+qujDnd1bodIXyUW/ou9o/CXyODomNoDLuyza3I4QhcTQBP2Ql05uiCPqF67SeGOcdxeAGk5GLpVTeGeY6wAB7Jpjx8kB6WuVrInRyZFXwvb6nQbDS4Xj2nEOmL3MbY9II7kjhWVmx51RFQLTAUpSZRAqiZQhAqiKNKBVESFEClBMoVQiiKNIDaKpsohxtXBYcodCoOAe6A4KgXqop1UVERpBOOFAKURKCCBM3sgAi0gHKggNEiuU20NLQ3N8pSmLXN2E0bF4RVsUux2LK2xa1sZ9bFzmhzTZaV1NMyaXTvkDGenhruT9EWa6Gl8X0oaN5LSDheh8K+INKXuEbiCW0Qeq8RqNJO2ATPY1rrNsAOBjJ/P8ARaPCaGsZYDQO4WeuZGueruPReK/EE2ke2LStw1xJv3WZvj/iepYGxRsb90/jcBmxF83JoYXM0TIGxS6bVMp7xW8Xub9FJmL1uunAda1xlnmY+8lnZY/i12/R6UN5Mhv7BdDw3wiJkbSC9wHBPP3XP+LmeU7RRjgte7/1Vl9LM59eYITAIvUatuRSFAFYggWqQTKUgVRNSiBCompSkCFRMQlKAUpSITUgopRGlKTQww1g+qA4Kavl9kreqBeqiiioiKiIFqCKKUjSAWlvKtDCUjmFpNhAWnqMFWRn1AdlUzhOOUHY0kLdQNrhyuozw2KCOxI8Y7rz+k1DoiKK2yeISPZtJ/VY6l105sN4hKQ3y2utl591Rpp9moa4V3ys87ztomyUNOwki+vVX8N9eok1wma0uWuB+mlAd5bS5vK4rNM8whws10pVNmfp5S4HDuQueb8dPn16+HXRloaAGkLy/wAXTeZrorB2tjOe1k//ABWx64btxI91g1E3m69znU66G09gFrjn1ju745Uja7FAcLW+DawmOnRXkgfKs720f1XXHIiCcBClAqlI0irAtIdU4UqypRGjCDhSf5UjjuOAgTkqFqsDNoBKLggprqjSLsJVcCIUiosicIN6qdUG9VQOqICFJmoCG2nAoIDlMSgFKEYKgKdjbe36oNsELdueQFl1TfSR26ra07W2TzlZpnNcSO4VazxzgVZwkqnV2TFRk7XK2N9LMCn3EUgveC42o2YtcB2SgmhlWxwb6cSBfulkV1G+LuZpPLDT5lYXPdPbbcbWxmgZJXlyOcTw0NVWp0rYg5u14I7jhTJ+LbVLJC3KrgeZHvc00ASSEkx2wGvoq4H7Y3AY3K/EdbRyADacNPPul1enDHEN/pu/pu6A9ljhl2lvsVvZOyUSNlssd07e6rVmxi8sg0eeqUiitAonaT/MZg+/YpHNyowoItClaG9UHBBWApWU5wldnCBDbjwrI2VymY3CYqhXi6SvFFOcoPyUGeUUaUFIy5ckpVCJiBSUo5PCwpTyg0YKeu6UcOVCWiCVKRAQGypZTNYXD08JgwD5jhMNJZbynheS+lVK4OdgUAKCv8OYHzFv/bauC3c5w/yqnsceLXR0ujfMwGuVtj8He6GRziA5hw2+Ub/HmngjJUK6et8Oljj3FpsiwPZcoHtwozYKbmkKRIpIjWzY6MChupbfDdVFo5A6XT2B3buBXLjdgHqt0MoaM1lU3HqNN4/omRvGj0sgkf8A9OMNpcnxbVB/pcKcaNA/KqtPqqdtG1gOTjos8r97i9t7t1Upnq3vXP1H9Oj3WbhbNc2hnusg5yqh2u9JOVex0m1tXhXabT3LG0iwRmsrqafRja5hjGTXrcAkbjjFzgQ+j6efotuHta4dQuhNoGbHbfKDgMgOtc+FpuSM4LSmJZiugAUj6TPVbsnHCYyU5KZrBSaNgzaYg9E0KOECU20oFhUXC3lAolpCUgqorelv2VtXymDRXCoxpoyGjKRRYBebNhBuQVE8YCoUNJV0bI2gOkd9Gt6phGA3c/g8Duq5wXAOwNvAb2WsZ1YX7vlaGj8IREY5pKw2P9yrWq4msU4qVwHC0eG+kuf1pUan+s6lo0Q/kOPvSjTp6eXy4wQAb4u10IpHPDi2Np2tsYOf1XN0z2Rx+tpc6qAV0czgGtLvSP7QcI7SeL5pWhotmQ05BOD97Xm9RGWuc4NqzxVL00s8MYaWNaARTgFzNbp3SbnRD0gWe9d1E7n65flnaCEdvpFrXDp3ObRqh2VzdE14vcVI5345lVwrGvJwTwtEmjLXVvAC06LQ6V4/mykkZIaaWmdjPp988m1oJLsX0C6kekDG2cyOcKPQCkdOIt9adpyTgrQ5+yYFoBANOU6+HPtcjxeAtAoZtcvou14vqBI70D5Gm/2XF6Kc/G79dDSEhrY2mg4ZA7roQSBkrSclhq+4XIjkLGg9VbHqC3haaldt+qja30G84Cwa+QGdj/l3N2k+6xulc5wPbhLKXSMIOSh1dmJudkEXnlWxM3YtZ435JP0KfcBkGijl8amgAIgJY3tLRnKtY2z3Wa3C0FNicMyrKHVY1tlc2ilLQtMjAchUOBVlZsUEZRpMRlSltlzlOMqUg8uaeFA1ZIvngp2ODRThkKuEg3G7F5afdWltjjhaiVbGC71OPKgbdqE07BxWE5GwZ6qsqAPLcRyDkFXNcKVUp3NoKtslNOU0ws7g6UkK6B23T13KygF10CfotDGna0DgBZabDIQ0UeOU3nt2gALMGuOCrPKcM9EdDmUnkrToJwNRG17sEkH6UshZu4BHuoInD3o3apfZjTqITpJ98ZJhJo1mle2ZrexaeyeLTzztAAsOCr0vh8j5ZNMWubLHnHUfRTNcOe7PCS+XIQAcHA9lWGPidQpa3+DatlkR7/dnRJJo9Q75jtcO7aWkvcpXTsghO03K419AqHap3vhXx+GSOfyXfRqt1fhGpi0Zl/h3gWGguxZJrClmrP6SOYxzpI5BVuk/QLCRTq7Gl7zT/C/kxMtp3kZNfovF6uAwa6WE8smLT9jSYvPW0rIyRnorms9AdWSaVkbQcUrG0XGhTW4b7qO/M8GLSuPvXKth04e7OLOFcH+WzY+iX5xyFeJIWR77Dmjp7qtZHJ1OlMb3sr1fMB+6yuYRhdfWPAEbwRtJz7Aj/hUx6cSuxwjz/wBNlc5oe00Fv0kgPpdh3cp5NGWG2i1H6f8AkbiAHWEs1J20NbTq/NEjuf0Ugjd5bN5dYHNrQ2SxtbGNvelxvld57NY3V0NhUzYqlpe0hxpqplbjIVlLGU8oo16vsoOF01zc+x2VUjtxTP8AkVZCQDjPZbI3h7Q7/wAvqslKyNzoyPwnlVKucQ392/XqkdK5/wBlcIy5hB55Cq27XXtq/wB1WSi9ysMDG6Nmqkt0ckjmNY3uADk/f91AzqBfRM1m4SaZzqD/AFM9nj/aUWM5mc6mtAYzs3/crXEBjaemVhILTR6Itc9p9KjTp3uDaGU20g5PK57NQ8cg/UK5sxeWkkmiq1Om2wxtORiIJ29DwsznOcbb1Qs4rkIuvefDEMep0jX0NzSWkK34g0w8PdpfGIWX5D9swH9zCuH8L+LHTxzxyfiDh+Vf4Xen8Vin0j4ZfllBDgrHj787eigbpNTAyVoa6N7Q5pHYou0mlPIwO+f3XhfhzxqTw/zfDdQ70RkuhJ6j8P8An812H+PsApXWLLr0TIdLHxYxS5Gtkg1/xBBpsGDQt86Uk8yH5W/bn7rj6v4kMUUkrfUQ30j36Lm+Eat8EO+b1SyOL5HdS4ppJX0c+XI3zHOaL918Z+Itn/7+v8r5f4h1fn/yvXajx1zmhjeOF4fxBxfqtRJ1dKXfmVK6fynp/N2MUbJeQsfqrKt4AWXplxsZqA4udeUHTEDDgFiJwqybKprbJqd7CwZ910dEZY9KHTRlrZAHsJ/ub3XH08RmkbGHNZu5c7ho7rpa/XslmDYv6UTBHF22j/SjHfsdD+JjZ87bBGCs75t+1uKvcVzDqScDhQTjgdOVXOcO/Ad5NGwAi1pDgbxfCo8Df5keoz8tGldIXf2s/Rebr/Vevif8ws7hRAYsMj8bSMrbKJS2/Lx3WCVrsrXJVf8Ad9kAMKNB3i0QMLo5v//Z',
                'characteristic':'Как и в Cyberpunk 2077, главным героем станет наемник Ви. Его вновь будет сопровождать цифровая копия рокера Джонни Сильверхенда в исполнении Киану Ривза. Что показали в первом тизере. Президент Розалинд Майерс требует от Ви принести клятву верности Новым Соединенным Штатам Америки, или НСША.',
            },
        ],

    },
    {
        'id': 2,
        'title': 'The Witcher 3: Wild Hunt - Complete Edition',
        'img': 'https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_card_v2_mobile_slider_639.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/JY6Bjij7XXE?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
        'hero': [
            {
                'img':'https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg',
                'characteristic':'Главный герой — Геральт из Ривии — ведьмак, охотник на чудовищ, наделённый необычайными способностями, подвергнутый генетическим мутациям и с детства проходивший интенсивные тренировки. Геральт предлагает свои услуги, полагаясь на способности в слежке, бое и магии.',
            },
        ],

    },
    {
        'id': 3,
        'title': 'F1® 2020',
        'img': 'https://games-all.net/uploads/posts/2023-01/1673956495_f1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/wF0vF1uXXYU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
    },
    {
        'id': 4,
        'title': 'Minecraft: Java Edition 1.19.2 ',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674942531_minecraft-java-edition-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/MmB9b5njVbA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
        'hero': [
            {
                'img': 'https://upload.wikimedia.org/wikipedia/ru/e/e7/Steve_%28Minecraft%29.png',
                'characteristic':'Стив (англ. Steve) — игровой персонаж из франшизы видеоигр Minecraft. Создан шведским разработчиком видеоигр Маркусом Перссоном и появился 17 мая 2009 года в начальной версии Minecraft.',
            },
        ],

    },
    {
        'id': 5,
        'title': 'World of Tanks',
        'img': 'https://games-all.net/uploads/posts/2019-08/1566776279_7.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/J2kSkF4QEe0?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,

    },
    {
        'id': 6,
        'title': 'Act of War Gold Edition: Direct Action',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674938377_act-of-war-gold-edition.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/tNExOOxlchI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,

    },
    {
        'id': 7,
        'title': 'Lost Ark',
        'img': 'https://games-all.net/uploads/posts/2019-11/thumbs/1573858391_12.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/m0Ohi0g3Q8g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,
        'hero': [
            {
                'img': 'https://games-all.net/uploads/posts/2019-11/thumbs/1573858391_12.jpg',
                'characteristic': 'Легат - это главный персонаж на аккаунте. Он обозначени золотой рамкой в левой части экрана и его можно сменить раз в сутки, удалить Легата невозможно.',
            },
        ],

    },
    {
        'id': 8,
        'title': 'Hello Neighbor 2 Alpha 1.5 ',
        'img': 'https://games-all.net/uploads/posts/2023-02/thumbs/hello-neighbor-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/ANwsrrQSE88?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,


    },
    {
        'id': 9,
        'title': 'NEXT RP  ',
        'img': 'https://games-all.net/uploads/posts/2020-06/thumbs/1591833632_4.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/5FcWiyGcNiQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
        'top': true,

    },

    {
        'id': 10,
        'title': 'Fortnite',
        'img': 'https://games-all.net/uploads/posts/2015-07/1436356452_fortnite.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/PhpNnd1FITU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.',
    },
    {
        'id': 11,
        'title': 'Far Cry 5',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513625240_far-cry-5.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/a_8THGId85U?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 12,
        'title': 'Football Manager 2019 ',
        'img': 'https://games-all.net/uploads/posts/2019-02/thumbs/1549093465_football-manager-2019.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/nP6Osa26_7g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 13,
        'title': 'Oriental Empires  ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515397324_oriental-empires.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/0mDDuU24F6c?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 14,
        'title': 'Dragon\'s Lair 2: Time Warp   ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1514908250_dragons-lair-2-time-warp.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/HzCJ5XInUqA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 15,
        'title': 'Gabelstapler 2014    ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515253498_gabelstapler-2014.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/jWaX23MZ0Ag?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 16,
        'title': 'Ski World Simulator    ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1514116443_ski-world-simulator.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/EVsqQDdf9_Q?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 17,
        'title': 'Marvel vs. Capcom: Infinite',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396931_marvel-vs.-capcom-infinite.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/L-8a6P7YKVA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 18,
        'title': 'Рождественские Истории 6: Маленький Принц ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396627_christmas-stories-6-a-little-prince.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/So-RJHuxqHw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 19,
        'title': 'Killer Instinct ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396329_killer-instinct.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/3LIL_MCJSoI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 20,
        'title': 'My Summer Car  ',
        'img': 'https://games-all.net/uploads/posts/2017-01/thumbs/1484106406_my-summer-car.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 21,
        'title': 'Enlisted ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664538438_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/DIMXKvLRtq8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 22,
        'title': 'Crossout ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664538541_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/yE8P78kVHLU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 23,
        'title': 'Warface ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1672345816_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/RzYhNpNKXPs?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 24,
        'title': 'World of Warships ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-02/1677002741_cover2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/TemOkfZe5_4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 25,
        'title': 'Star Wars Jedi Survivor ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1680950982_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/_F6YBwIPzmk?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 26,
        'title': 'Dead Island 2 ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670961819_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/aKFXvXjhBT8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 27,
        'title': 'Battle Teams 2 ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1686397946_cover.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/Qj5rGh-ww7M?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 28,
        'title': 'Atomic Heart',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670561381_library_600x900_2x-1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/njSGRN-VLAg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 29,
        'title': 'Songs of Conquest',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663623259_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/WtDQSUeQUPc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 30,
        'title': 'Way of the Hunter',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664489492_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/-UDoaPCTVr4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 31,
        'title': 'Car Mechanic Simulator 2021',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668364052_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/9nxIEgWNLhc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 32,
        'title': 'MotoGP 23',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-05/1683192317_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/4SEPRoC-dZQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 33,
        'title': 'WWE 2K23',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-01/1674493745_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/1f1qrRPfrYU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 34,
        'title': 'Assassins Creed 4 Black Flag',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670983093_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/OwsotWkpSlU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 35,
        'title': 'Farming Simulator 22',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664308622_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/Kd1QeyouQOU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 36,
        'title': 'Gloomwood',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1666879778_library_600x900_2x-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/cUx0IxuoCgE?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 37,
        'title': 'Contraband Police\n',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-03/1678292732_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/cEP7ykalRCI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 38,
        'title': 'Space Cats Tactics',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688678837_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/Geh8ypPh2ek?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 39,
        'title': 'House Flipper',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1666815966_library_600x900_2x-1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/TQGg2HrRH2I?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 40,
        'title': 'Among Us',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664320679_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/sYvKjZKunyo?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
]