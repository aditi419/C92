player_1 = localStorage.getItem("player_1").value;
player_2 = localStorage.getItem("player_2").value;
player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + " : "; 
document.getElementById("player_2").innerHTML = player_2 + " : "; 
document.getElementById("player1_Score").innerHTML = player1_score ; 
document.getElementById("player2_Score").innerHTML = player2_score ; 
document.getElementById("player_Question").innerHTML = "Question Turn - " + player_1;
document.getElementById("player_Answer").innerHTML = "Answer Turn - " + player_2;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("lower case word is " + word);
    charaAt_1 = word.charAt(1);
    console.log(charaAt_1);
    length_divide_two = Math.floor(word.length/2);

    charaAt_2 = word.charAt(length_divide_two);
    console.log(charaAt_2);
    
    length_minus_one = word.length - 1;
    charaAt_3 = charAt(length_minus_one);
    console.log(charaAt_3);
     
    remove_charAt_1 = word.replace(charaAt_1, "_");
    remove_charAt_2 = remove_charAt_2.replace(charaAt_2, "_");
    remove_charAt_3 = remove_charAt_3.replace(charaAt_3, "_");

    question_word = "<h4 id='wordDisplay'> q."+ remove_charAt_3 + "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_checkbox>";
    checkButton = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value;
}

question_turn = "player1";
answer_turn = "player2";

function check() {
   get_answer = documnent.getElementById("input_checkbox").value;
   answer = get_answer.toLowerCase();
   console.log(answer);

   if (answer == word){

      if (answer_turn == player_1) {
          player1_score = player1_score + 1;
          document.getElementById("player1_score").innerHTML = player1_score;
      }
      else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
      }

      if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_Question").innerHTML = "Question_turn" + player_2;
      }

      else {
        question_turn = "player_1";
        document.getElementById("player_Question").innerHTML = "Question_turn" + player_1;
      }

      if (answer_turn == "player_1"){
          answer_turn = "player_2";
          document.getElementById("player_Answer").innerHTML = "Answer_turn" + player_2;
      }

      else {
         answer_turn = "player_1";
         document.getElementById("player_Answer").innerHTML = "Answer_turn" + player_1;
      }

   }
   document.getElementById("output").innerHTML = "";
}