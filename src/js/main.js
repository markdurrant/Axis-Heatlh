var      dotElm = $( '.dot' ),
    yAxisSlider = $( '.y-axis-slider' ),
    xAxisSlider = $( '.x-axis-slider' ),
  ingredientElm = $( '.ingredient-type' ),
        gramElm = $( '.gram' ),
          mlElm = $( '.ml' );


var posClasses = "y-pos-1 y-pos-2 y-pos-3 y-pos-4 x-pos-1 x-pos-2 x-pos-3 x-pos-4";

var ingredientsList = [
  "pesto, spinach, and green peppers",
  "hadock",
  "lean beef mince",
  "beef mince"
];

// apply position classes
function dotPos() {
  dotElm.removeClass( posClasses );
  dotElm.addClass( 'y-pos-' + yAxisSlider.val() );
  dotElm.addClass( 'x-pos-' + xAxisSlider.val() );
}

function changeIngredient( value ) {
  ingredientElm.text( ingredientsList[ value - 1 ] );
} changeIngredient( 4 );

var multiplier = 0;

function changeQuantity ( value ) {

  if ( value == 1 ) {
    multiplier = 1;
  } else if ( value == 2 ) {
    multiplier = 0.9;
  } else if ( value == 3 ) {
    multiplier = 0.75;
  } else if ( value == 4 ) {
    multiplier = 0.5;
  }

  gramElm.each( function() {
    $( this ).text(
      Math.round( $( this ).data( 'quantity' ) * multiplier )
    );
  });

  mlElm.each( function() {
    $( this ).text(
      Math.round( $( this ).data( 'quantity' ) * multiplier )
    );
  });
} changeQuantity( 1 );