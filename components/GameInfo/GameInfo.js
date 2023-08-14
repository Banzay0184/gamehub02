class GameInfo {

    constructor() {
        this.classNameActive = 'btnactive';
        this.labelAdd = 'Add';
        this.labelRemov = 'Del';
    }

    handleSetLocationStorage(element, id) {
        const {pushGames, games} = localStorageUtil.putGames(id)
        if (pushGames) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemov
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
    }

    render() {
        const gameStore = localStorageUtil.getGames()
        let htmlData = ''

        DATA.forEach((element) => {
            let htmlHero = ''


            if (element.hero) {
                element.hero.forEach((el, index) => {
                    htmlHero += `
                    <div class="hero-card">
                       <img src=${el.img} alt="">
                       <p>${el.characteristic}</p>
                    </div>
                `
                })
            }

            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = '' + this.classNameActive;
                activeText = this.labelRemov;
            }


            htmlData += `
            <div class="box hide" id="box">
                <a href="./index.html" class='back' >
                Top Game
                </a>
            <div class='game-descr'>
                    <object data="${element.video}" >
                       
                    </object>
                <h1 class='game-descr-text'>${element.title}</h1>
                <button class="download" onclick="gameInfoPage.handleSetLocationStorage(this,${element.id} )" class="${activeClass}">${activeText}</button>
                <div class="game-descr-box">
                    <h1>INFO</h1>
                    <p><span>Release Date: </span>${element.date}</p>
                    <p><span>Genres: </span>${element.genres}</p>
                    <h1 class='des-tit'>DESCRIPTION:</h1>
                    <p>${element.descr}</p>
                </div>
                <h1 class="hero-text">Characteristic</h1>
                <div id="hero" class="hero">
                   ${htmlHero}
                </div>
            </div>
            </div>
            `
        });
        const html = `
            <div class="container">
                ${htmlData}
            </div>
        `;
        ROOT_gameINFO.innerHTML = html

        const cardGameParent = document.querySelector('.cards-game'),
            cardGame = document.querySelectorAll('.card-game-img'),
            cardGameContent = document.querySelectorAll('.box'),
            menu = document.querySelector('.menu'),
            gameInfoPage = document.querySelector('#gameInfo'),
            topGame = document.querySelector('#top')

        function hideGameContent() {
            cardGameContent.forEach(item => {
                item.classList.add('hide',)
                item.classList.remove('show',)


            })
        }

        function showGameContent(i = 0) {
            cardGameContent[i].classList.add('show')
            cardGameContent[i].classList.remove('hide')
            cardGame[i].classList.add('tabheader__item_active')
        }

        cardGameParent.addEventListener('click', (e) => {
            const target = e.target
            cardGame.forEach((item, idx) => {
                if (target === item) {
                    hideGameContent()
                    showGameContent(idx)
                    topGame.classList.add('hide')
                    gameInfoPage.classList.remove('hide')
                    menu.classList.add('hide')

                }
            })
        })
    }
}

const gameInfoPage = new GameInfo()
gameInfoPage.render()