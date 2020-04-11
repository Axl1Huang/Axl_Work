 function main() {
  getbutton();
  }

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
      output+="<div>"+cards[i].value +" "+"of"+" "+ cards[i].suit + <img src="https://deckofcardsapi.com/static/img/8H.png" alt="ss" style="width:104px;height:142px;"> + "</div>";
      console.log(cards[i])
      console.log(cards[i].image)
    };
    document.getElementById("card_show").innerHTML=output;
    });
    }

        
        //Here is small function to crate images
    		function show_image(src, width, height, alt) {
          var img = document.createElement("img");
          img.src = src;
          img.width = width;
          img.height = height;
          img.alt = alt;
          document.body.appendChild(img);
   			 }