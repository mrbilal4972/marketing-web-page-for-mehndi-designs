const hand = document.getElementById('hand');
const foot = document.getElementById('foot');
const fullHand = document.getElementById('fullHand');
const imgCards = document.getElementById('img-cards');
// const header = document.getElementById('header');

// console.log(header);

window.addEventListener('load', addHandCard);
hand.addEventListener('click', addHandCard);
foot.addEventListener('click', addFootCard);
fullHand.addEventListener('click', addFullHandCard);

function addHandCard(e){
    // console.log(e.target.id)
    // if(e.target.id ==='hand'){
    hand.classList.add('active');
    fullHand.classList.remove('active');
    foot.classList.remove('active');
    // }
    imgCards.innerHTML = '';
    // console.log('inside event')
    let count = 48;
    for(let i = 0; i <= count; i++){
        imgCards.insertAdjacentHTML('beforeend', `<div class="col-lg-4">
                                                    <div class="card mt-4" style="width: 18rem;">
                                                        <img src="./img/h${i}.jpg" class="img-fluid card-img-top" style="height: 16rem;" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title text-center">Design ${i+1}</h5>
                                                        </div>
                                                    </div>
                                                </div>`);
    }
}

function addFootCard(e){
    e.target.classList.add('active');
    hand.classList.remove('active');
    fullHand.classList.remove('active');
    imgCards.innerHTML = '';
    let count = 9;
    for(let i = 0; i <= count; i++){
        let randNum = Math.floor(Math.random()*48 + 1 );
        imgCards.insertAdjacentHTML('beforeend', `<div class="col-lg-4">
                                                    <div class="card mt-4" style="width: 18rem;">
                                                        <img src="./img/h${randNum}.jpg" class="img-fluid card-img-top" style="height: 16rem;" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title text-center">Design ${randNum}</h5>
                                                        </div>
                                                    </div>
                                                </div>`);
    }
}

function addFullHandCard(e){
    e.target.classList.add('active');
    hand.classList.remove('active');
    foot.classList.remove('active');
    imgCards.innerHTML = '';
    let count = 9;
    for(let i = 0; i <= count; i++){
        let randNum = Math.floor(Math.random()*48 + 1 );
        imgCards.insertAdjacentHTML('beforeend', `<div class="col-lg-4">
                                                    <div class="card mt-4" style="width: 18rem;">
                                                        <img src="./img/h${randNum}.jpg" class="img-fluid card-img-top" style="height: 16rem;" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title text-center">Design ${randNum}</h5>
                                                        </div>
                                                    </div>
                                                </div>`);
    }
}
