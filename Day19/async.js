function getplay(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cricket = "cricket bat";
            resolve(cricket);
        },2000);
    });

}

async function playWithCricket(){
    console.log("Let's play with Cricket!!");
    try{
        const cricket = await getplay();
    console.log("Yay! I got my", cricket );
    console.log("Now i can continue playing new bat");
    } catch (err){
        console.log("Oops something went wrong: ", err)
    }
    
}

playWithCricket();