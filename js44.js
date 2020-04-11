

  function getNewUrl(){
    let url = new URL("https://deckofcardsapi.com/api/deck/new/draw/?count=0");
    let search_params = url.searchParams;
    let cardnum=document.getElementById("num_card").value;
    console.log(cardnum);
    search_params.set('count', cardnum);
    url.search = search_params.toString();
    let new_url = url.toString();
    console.log(new_url);
    return new_url;
  }

    // function clean(){
    //   let clean=""
    //   document.querySelector("#card_show").innerHTML=clean
    // };



    function getbutton(){
      // clean();
      let new1_url= getNewUrl();
      fetch(new1_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let {deck_id,remaining,cards}=data;
      document.getElementById("Dick_id").textContent=deck_id;
      document.getElementById("num_left").textContent=remaining;
      let output=""

      for(i in cards){
      output+="<div>"+cards[i].value +" "+"of"+" "+ cards[i].suit + "</br>" + "<img src=" + cards[i].image + ">" + "</div>";
        document.getElementById("card_show").innerHTML=output;
        console.log(cards[i])
        console.log(cards[i].image)
    };
    
    });
    }
