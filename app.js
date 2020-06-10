//Cards arrays

const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suites = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
let deck = [];
let team = [{ Name: 'Alice', ID: 0, Points: 0, hand:[] },{ Name: 'Bob', ID: 1, Points: 0, hand:[] },{ Name: 'Carol', ID: 2, Points: 0, hand: [] },{ Name: 'Eve', ID: 3, Points: 0, hand:[] }];


//event listeners 

var button =document.getElementById("btn-start")

button.addEventListener("click",startPesten)

var playbutton = document.getElementById("btn-play")
playbutton.addEventListener("click",playPesten)
//Functions 

//CREATE A DECK ARRAY FROM THE NUMBERS AND SUITES
function makeDeck(){
let deck = [];
    for (let i =0 ; i<suites.length;i++){
    for (let j=0;j<numbers.length; j++){

    let card = {Number: numbers[j], Suites: suites[i]}
    deck.push(card)
    }

    }
    return deck;
}


//SHUFFLE THE DECK RANDOM

function Shuffle(deck){

    for (let i =0 ; i<1000;i++){

        let first = Math.floor(Math.random()* deck.length);
        let second = Math.floor(Math.random()* deck.length);
        let temp= deck[first];

        deck[first]= deck[second];
        deck[second] = temp;
    }
    return deck;
}


//Deal the cards

function dealCards(deck){
    let num =52;
   for ( i =0 ; i < 4 ; i++){
  
       for(let j =0 ; j <7 ; j++) {
       
        let cardDealed= deck[Math.floor(Math.random() * num)];
        console.log(cardDealed);
        let index= deck.indexOf(cardDealed);
        team[i].hand.push(cardDealed);
        deck.splice(index,1);
        num= num-1;
   }
}
 
 return team;

}

function middleSelect(deck){
let middleCard =[];
middleCard.push(deck[0])
console.log(middleCard)
return middleCard;
}




//points calculate
function getPoints(player)
{
    var points = 0;
    for(var i = 0; i < team[player].hand.length; i++)
    {
        points += team[player].hand[i].Number;
    }
    team[player].Points = points;
    return points;
}

//points update

function updatePoints()
{
    for (var i = 0 ; i < team.length; i++)
    {
        getPoints(i);
        document.getElementById('points_' + i).innerHTML = team[i].Points;
    }
}




// Reset your deck
function resetDeck(deck) {

	deck = [];

	suites.forEach(function(suit) {
		numbers.forEach(function(rank) {
			deck.push(rank + suit);
		});
	});

	return deck;

};


//UI 

//Render the cards

function renderCard(cardDealed){
        var hand = document.getElementById('hand_' + team[i].ID);
        hand.appendChild(getCardUI(cardDealed));
    }


 

    // Get the card UI

    function getCardUI(cardDealed)
    {
        var el = document.createElement('div');
        var icon = '';
      
        if (cardDealed.Suites == 'Hearts')
        icon='./icons/hearts.svg';
        else if (cardDealed.Suites == 'Spades')
        icon='./icons/spades.svg';
        else if (cardDealed.Suites == 'Diamonds')
        icon='./icons/diamonds.svg';
        else
        icon='./icons/clubs.svg';

        
        el.className = 'card';
        el.innerHTML = cardDealed.Number + '<br/>' + `<img src= ${icon}>`;
        return el;
    }

    //players UI

    function createPlayersUI()
        {
            document.getElementById('players').innerHTML = '';
            for(var i = 0; i < team.length; i++)
            {
                var div_player = document.createElement('div');
                div_player.style.transition = "all 5s ease";
                var div_playerid = document.createElement('div');
                var div_hand = document.createElement('div');
                var div_points = document.createElement('div');

                div_points.className = 'points';
                div_points.id = 'points_' + i;
                div_player.id = 'player_' + i;
                div_player.className = 'player';
                div_hand.id = 'hand_' + i;

                div_playerid.innerHTML =  team[i].Name;
               
              /*   for(let i=0; i< team[i].hand.length; i++){

                    div_hand.innerHTML = team[i].hand.Number;
                } 
 */
             


                div_player.appendChild(div_playerid);
                div_player.appendChild(div_hand);
                div_player.appendChild(div_points);
                document.getElementById('players').appendChild(div_player);
            }
        }

      

      function startPesten()
{
    
    currentPlayer = 0;
    let seyma = makeDeck();
    Shuffle(seyma);
    dealCards(seyma);
    console.log(team)
    createPlayersUI();
    middleSelect(seyma);
    getCardUI(seyma);
    document.getElementById('player_' + currentPlayer).classList.add('active');

}

//game logic

function playPesten(team){
       
 
        for(let j=0 ; j< team[0].hand.length; j++){
        if (team[0].hand[j].Number=middleCard[0].Number){
    
         middleCard.push(cteam[0].hand[j]);
         team[0].hand.splice(j,1);
        } else if(  team[0].hand[j].Suites== middleCard[0].Suites){
            
        middleCard.push(team[0].hand[j]);
        team[0].hand.splice(j,1);
        } else{
    
            return deck;
        }
    }
    
    
    }





