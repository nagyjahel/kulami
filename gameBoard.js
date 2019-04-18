(function ($) {

    function isTopLeftElement(i,j){
        if( (i == 0 && j ==0) ||
            (i == 0 && j == 6) ||
            (i == 1 && j == 3) ||
            (i == 2 && j == 0) ||
            (i == 3 && j == 2) ||
            (i == 4 && j == 5) ||
            (i == 5 && j == 1) ||
            (i == 6 && j == 3) ||
            (i == 6 && j == 6) 
        ){
            return true;
        }
        return false;
    }

    function isTopRightElement(i,j){
        if( (i == 0 && j == 1) ||
            (i == 0 && j == 7) ||
            (i == 1 && j == 4) ||
            (i == 2 && j == 1) ||
            (i == 3 && j == 4) ||
            (i == 4 && j == 6) ||
            (i == 5 && j == 2) ||
            (i == 6 && j == 5) ||
            (i == 6 && j == 7)
        ){
            return true;
        }
        return false;
    }

    function isBottomLeftElement(i,j){
        if( (i == 1 && j == 0) ||
            (i == 2 && j == 3) ||
            (i == 2 && j == 6) ||
            (i == 3 && j == 0) ||
            (i == 4 && j == 2) ||
            (i == 5 && j == 5) ||
            (i == 7 && j == 1) ||
            (i == 7 && j == 3)  ||
            (i == 7 && j == 6)
        ){
            return true;
        }
        return false;
    }

    function isBottomRightElement(i,j){
        if( (i == 1 && j == 1) ||
            (i == 2 && j == 4) ||
            (i == 2 && j == 7) ||
            (i == 3 && j == 1) ||
            (i == 4 && j == 4) ||
            (i == 5 && j == 6) ||
            (i == 7 && j == 2) ||
            (i == 7 && j == 5) ||
            (i == 7 && j == 7) 
        ){
            return true;
        }
        return false;
    }

    function isLeftElement(i,j){
        if( (i == 1 && j == 2) ||
            (i == 1 && j == 3) ||
            (i == 1 && j == 6) ||
            (i == 6 && j == 0) ||
            (i == 6 && j == 1)) {
                return true;
            }
        return false;
    }

    function isRightElement(i,j){
        if( (i == 1 && j == 2) ||
            (i == 1 && j == 7) ||
            (i == 6 && j == 0) ||
            (i == 6 && j == 2)){
                return true;
            }
            return false;
    }

    function isTopElement(i,j){
        if( (i == 0 && j == 4) ||
            (i == 3 && j == 3) ||
            (i == 3 && j == 6) ||
            (i == 6 && j == 4)){
                return true;
            }
        return false;
    }

    function isBottomElement(i,j){
        if( (i == 0 && j == 4) ||
            (i == 3 && j == 6) ||
            (i == 7 && j == 4) ||
            (i == 4 && j == 3)){
                return true;
            }
        return false;
    }

    function isLeftCornerElement(i,j){
        if( (i == 0 && j ==3 ) ||
            (i == 4 && j == 0) ||
            (i == 3 && j == 5) ||
            (i == 5 && j == 3)){
                return true;
            }
        return false;
    }

    function isRightCornerElement(i,j){
        if( (i == 0 && j == 5) ||
            (i == 3 && j == 7) ||
            (i == 4 && j == 1) ||
            (i == 5 && j == 4)){
                return true;
            }
        return false;
    }

    function isTopCornerElement(i,j){
        if( (i == 0 && j == 2) ||
            (i == 1 && j == 5) ||
            (i == 4 && j == 7) ||
            (i == 5 && j == 0)){
                return true;
            }
        return false;
    }

    function isBottomCornerElement(i,j){
        if( (i == 2 && j == 2) ||
            (i == 2 && j == 5) ||
            (i == 7 && j == 0) || 
            (i == 5 && j == 7)){
                return true;
            }
        return false;
    }

    function prepareElement(i,j, element){
        if(isTopLeftElement(i,j)) element.addClass("topLeftBorder");
        if(isTopRightElement(i,j)) element.addClass("topRightBorder");
        if(isBottomLeftElement(i,j)) element.addClass("bottomLeftBorder");
        if(isBottomRightElement(i,j))element.addClass("bottomRightBorder");
        if(isLeftElement(i,j))element.addClass("leftBorder");
        if(isRightElement(i,j)) element.addClass("rightBorder");
        if(isTopElement(i,j)) element.addClass("topBorder");
        if(isBottomElement(i,j)) element.addClass("bottomBorder");
        if(isLeftCornerElement(i,j)) element.addClass("topLeftBottomBorder");
        if(isRightCornerElement(i,j)) element.addClass("topRightBottomBorder");
        if(isTopCornerElement(i,j))  element.addClass("leftRightTopBorder");
        if(isBottomCornerElement(i,j))  element.addClass("leftRightBottomBorder");
    }
    
    function initGameBoard() {
        var gameBoard = $("#gameBoard");

        for (var i = 0; i < 8; ++i) {
            var row = $('<div></div>').attr('id', 'row' + i).addClass('tableRow col-xs-12');
            for (var j = 0; j < 8; ++j) {
                var element = $('<div></div>').attr('id', 'row' + i + 'column' + j).addClass('element');
               prepareElement(i,j,element);
                row.append(element);
            }
            gameBoard.append(row);
        }
    }

    $(document).ready(function () {
        initGameBoard();
    });

})(jQuery);