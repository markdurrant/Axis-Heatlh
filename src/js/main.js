// function outputUpdate(vol) {
//   document.querySelector('#volume').value = vol;
//   console.log( vol );
// }

var      dotElm = $( '.dot' ),
    yAxisSlider = $( '.y-axis-slider' ),
    xAxisSlider = $( '.x-axis-slider' ),
     posClasses = "y-pos-1 y-pos-2 y-pos-3 x-pos-1 x-pos-2 x-pos-3 x-pos-4";

// apply position classes
function dotPos ( ) {
  dotElm.removeClass( posClasses );
  dotElm.addClass( 'y-pos-' + yAxisSlider.val() );
  dotElm.addClass( 'x-pos-' + xAxisSlider.val() );
}
