class Search {

    handlerOpenSearch() {
        const myGamePage = document.querySelector('#myGame')
        myGamePage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.remove('hide')
        const topPage = document.querySelector('#top')
        topPage.classList.add('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
    }


    render() {
        let htmlData = ''


        DATA.forEach((element) => {
            htmlData += `
            <div class="card-game">
                <img class='card-game-img' src=${element.img} alt="${element.id}"/>
                <div class='star'>
                    <img src='./img/star-svgrepo-com.svg' alt="${element.id}"/>
                </div>
                
                <h1 class="count">Reviews count: ${element.reviews}</h1>
                <h3 class='card-game-text'>${element.title}</h3>
            </div>
            `
        });

        const html = `
            <div class="container">
                <div class="search-container">
                    <h1 class="text">Search</h1>
                    <form class="form-search" action="">
                        <input id='search' onkeyup="searchPage.search()" type="text"/>
                    </form>
                    <div id="game-list" class="cards-game">
                        ${htmlData}
                    </div>
                </div>
            </div>
        `;
        ROOT_SEARCH.innerHTML = html
    }
}

const searchPage = new Search()
searchPage.render()