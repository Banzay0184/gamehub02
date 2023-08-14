class MyGame {
    handlerOpenMyGame() {
        myGamePage.render()
        const topPage = document.querySelector('#top')
        topPage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.add('hide')
        const myGamePages = document.querySelector('#myGame')
        myGamePages.classList.remove('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
    }


    handleSetLocationStorages(element, id) {
        const {pushGames, games} = localStorageUtil.putGames(id)
        if (pushGames) {

        } else {
            const cardGame = document.querySelectorAll('#Del')
            cardGame.forEach(del => {
                del.addEventListener('click', (e) => {
                    del.classList.add('hide')
                })
            })
        }
    }

    render() {
        const gameStore = localStorageUtil.getGames()
        let htmlData = ''

        DATA.forEach((element) => {
            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) !== -1) {
                htmlData += `
                <div id="Del" class="card-game">
                    <img class='card-game-img' src=${element.img} alt="${element.id}"/>
                    <div class='star'>
                        <img src='./img/star-svgrepo-com.svg' alt="${element.id}"/>
                    </div>
                    <h1 class="count">Reviews count: ${element.reviews}</h1>
                    <h1 class='card-game-text'>${element.title}</h1>
                    <button class='btnDel' onclick="myGamePage.handleSetLocationStorages(this,${element.id})">del</button>
                </div>   
                `
            }
        });

        const html = `
            <div class="container">
                <div class="mygame-container">
                    <h1 class="text">MyGame</h1>
                    <div class="cards-game">
                        ${htmlData}
                    </div>
                </div>
            </div>
        `;
        ROOT_myGAME.innerHTML = html
    }
}

const myGamePage = new MyGame()