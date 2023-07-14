class Movie {
    constructor(title, studio, rating){
      this.title = title;
      this.studio = studio;
      if(rating === "")
      {
        this.rating = "PG";
      }
      else {
        this.rating = rating;
      }
    }
    
    getPG(arr) {
      return ipArr.rating;
    }
  }
  
  let film = new Movie("Casino Royale", "Eon Productions", "PG13");
  let ipArr = [{title:"Hollowood", studio: "ABC", rating: "PG"},
                {title:"Monster", studio: "HYPER", rating: ""},
                {title:"Fisherman", studio: "DEMO", rating: "PG"}];
  film.getPG(ipArr);