(function ($) {

    var actualPlayer = true;
    var firstPlayer = 'computer';

    
    $(document).ready(function () {
        $(".element").click(function(){
            if(gameIsNotEnded()){
             var element = $(this);
             step(element);
            }
       
        });
     });

    // The game is ended if all the balls have been used or no next step can be taken
    function gameIsNotEnded(){
        return true;
    }
    // The main alphaBeta function of the program
    function alphaBeta(kulami, alpha, beta, depth){
        if(isTerminal(kulami) || depth == 0) return heuristicEval(kulami);
        if(isMaxNode(kulami)){
            getChildren(kulami).each(function(){
                alpha = max(alpha, alphaBeta($(this), alpha, beta, depth - 1));
                if(alpha >= beta) return alpha;
            });
        }
        else{
            getChildren(kulami).each(function(){
                alpha = max(beta, alphaBeta($(this), alpha, beta, depth - 1));
                if(alpha >= beta) return beta;
            });
        }
        return beta;
    }

    // If a node is of type maximum
    function isMaxNode(Kulami){

    }

    // Opening the node by getting all of its children
    function getChildren(Kulami){

    }

    // The heuristic evaluation function - the way the computer decides what to do next
    function heuristicEval(kulami){

    }

    // This is the step of the computer
    function computerStep(element){

    }

    // This is the step of the user
    function step(element){
        var red = $('<div></div>').addClass('red');
        var black = $('<div></div>').addClass('black');
        var item = "";

        if(element.find(".red").length == 0 && element.find(".black").length==0){
        if(actualPlayer == true){
            item = red;
         }
         else{
             item = black;
         }
        }
        actualPlayer = !actualPlayer;
     element.append(item);
     computerStep();
    }

    


})(jQuery);