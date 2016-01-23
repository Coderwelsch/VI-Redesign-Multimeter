/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         function init ( ChartJs ) {
         	sym.play( 0 );
         }
         
         yepnope(
         	{
         		nope: [
         			'lib/Chart.min.js'
         		] ,
         		complete: init
         	}
         );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Content'
   (function(symbolName) {   
   
   })("Content");
   //Edge symbol end:'Content'

   //=========================================================
   
   //Edge symbol: 'Loading_Wheel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Loading_Wheel");
   //Edge symbol end:'Loading_Wheel'

   //=========================================================
   
   //Edge symbol: 'Multimeter_Touch_Label'
   (function(symbolName) {   
   
   })("Multimeter_Touch_Label");
   //Edge symbol end:'Multimeter_Touch_Label'

   //=========================================================
   
   //Edge symbol: 'Boot_Animation'
   (function(symbolName) {   
   
   })("Boot_Animation");
   //Edge symbol end:'Boot_Animation'

   //=========================================================
   
   //Edge symbol: 'System'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         var menuItems = [
         	"Ampere_AC_Item", 
         	"Ampere_DC_Item", 
         	"hFE_Item", 
         	"Capacity_Item", 
         	"Capacity_Item", 
         	"Resistance_Item", 
         	"Temperature_Item", 
         	"Settings_Item", 
         	"Volt_AC_Item", 
         	"Volt_DC_Item"	
         ];
         
         for ( var i = 0; i < menuItems.length; i++ ) {
         	var itemSymbol = sym.getSymbol( "Menu_View" ).getSymbol( menuItems[ i ] ),
         		 selector = itemSymbol._variables.symbolSelector,
         		 $item = $( selector );
         
         	$item[ 0 ].onclick = menuItemClicked;
         	$item[ 0 ].dataset.edgeSelector = menuItems[ i ];
         }
         
         
         var backBtn = $( sym.getSymbol( "Menu_Item_Symbol" ).$( "Go_Back_Btn" ) );
         backBtn[ 0 ].onclick = function () {
         	sym.playReverse();
         
         	sym.$( "Menu_View" ).css( {
         		pointerEvents: 'all'
         	} );
         };
         
         function menuItemClicked () {
         	var itemElement = sym.getSymbol( "Menu_View" ).getSymbol( this.dataset.edgeSelector ),
         		 itemLabelText = itemElement.$( 'Label' ).text(),
         		 itemViewLabel = sym.getSymbol( "Menu_Item_Symbol" ).$( 'Headline' );
         	
         	itemViewLabel.text( itemLabelText ); 
         	sym.play( 'Show_Item_View' );
         
         	sym.$( "Menu_View" ).css( {
         		pointerEvents: 'none'
         	} );
         }

      });
      //Edge binding end

   })("System");
   //Edge symbol end:'System'

   //=========================================================
   
   //Edge symbol: 'Temperature_Item'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Temperature_Item");
   //Edge symbol end:'Temperature_Item'

   //=========================================================
   
   //Edge symbol: 'Temperature_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Resistance_Item");
   //Edge symbol end:'Resistance_Item'

   //=========================================================
   
   //Edge symbol: 'Resistance_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Capacity_Item");
   //Edge symbol end:'Capacity_Item'

   //=========================================================
   
   //Edge symbol: 'Capacity_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Ampere_DC_Item");
   //Edge symbol end:'Ampere_DC_Item'

   //=========================================================
   
   //Edge symbol: 'Ampere_DC_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Ampere_AC_Item");
   //Edge symbol end:'Ampere_AC_Item'

   //=========================================================
   
   //Edge symbol: 'Ampere_DC_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Volt_DC_Item");
   //Edge symbol end:'Volt_DC_Item'

   //=========================================================
   
   //Edge symbol: 'Ampere_AC_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("Volt_AC_Item");
   //Edge symbol end:'Volt_AC_Item'

   //=========================================================
   
   //Edge symbol: 'Capacity_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgb(236, 244, 242)'
         } );

      });
      //Edge binding end

   })("hFE_Item");
   //Edge symbol end:'hFE_Item'

   //=========================================================
   
   //Edge symbol: 'Temperature_Item_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: 'rgba(41,38,38,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$("Item_Background").css( {
         	backgroundColor: '#2B96D3'
         } );

      });
      //Edge binding end

   })("Settings_Item");
   //Edge symbol end:'Settings_Item'

   //=========================================================
   
   //Edge symbol: 'Menu_View'
   (function(symbolName) {   
   
   })("Menu_View");
   //Edge symbol end:'Menu_View'

   //=========================================================
   
   //Edge symbol: 'Menu_Item_View'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         var valueButtons = [ '200', '2K', '200K', '2M' ],
         	 selectorPrefix = 'Button_';
         
         for ( var i = 0; i < valueButtons.length; i++ ) {
         	var elem = sym.getSymbol( selectorPrefix + valueButtons[ i ] );
         
         	if ( i === 0 ) {
         		elem.$( 'Click_Area' )
         			.css( { pointerEvents: 'none' } );
         		elem.$( 'Btn_Background' )
         			.css( { backgroundColor: 'rgba(43,150,211,1.00)' } );
         	}
         
         	elem.$( "Label" ).html( valueButtons[ i ] );
         }
         
         setTimeout( function () {
         	var value = 0,
         		 commaValue = 0,
         		 maxValue = 1000,
         		 maxCommaValue = 100,
         		 interval,
         
         		 chart,
         		 chartElement = sym.$( 'Graph_Container' ),
         		 lineChartData = {
         				labels : [ "1", "2", "3", "4", "5", "6", "7" ],
         				datasets : [
         					{
         						label: "Die letzten Messungen",
         						fillColor : "rgba(43,150,211,0.2)",
         						strokeColor : "rgba(43,150,211,1.00)",
         						pointColor : "rgba(220,220,220,1)",
         						pointStrokeColor : "#fff",
         						pointHighlightFill : "#fff",
         						pointHighlightStroke : "rgba(220,220,220,1)",
         						data : [ 0, 1, 2, 3, 4, 5, 6 ]
         					}
         				]
         			},
         			currentGraphIndex = 0,
         			absolutePathEntries;
         
         		var updateValue = function () {
         			var randomValue = parseInt( 400 + Math.random() * 100 );
         				sym.$("Value_Display").html( ( randomValue < 10 ? '00' + randomValue : ( randomValue < 100 ? '0' + randomValue : randomValue ) ) + ',' + ( commaValue < 10 ? '0' + commaValue : commaValue ) );
         
         				chart.addData( [ randomValue ], absolutePathEntries );
         				chart.removeData();
         
         				absolutePathEntries++;
         
         				value++;
         				commaValue += 5;
         
         			if ( value >= maxValue ) {
         				value = 0;
         			}
         
         			if ( commaValue >= maxCommaValue ) {
         				commaValue = 0;
         			}
         		}
         
         		function initGraph () {
         			chartElement.html( '<canvas id="value-graph" width="469" height="285"></canvas>' );
         
         			var canvas = document.getElementById( 'value-graph' ),
         				 ctx = canvas.getContext( "2d" );
         
         			chart = new Chart( ctx ).Line( lineChartData, {
         				responsive: true,
         				animationSteps: 10
         			} );
         		}
         
         		absolutePathEntries = lineChartData.datasets[ 0 ].data.length;
         		initGraph();
         
         		interval = setInterval( updateValue, 1000 );
         }, 1000 );

      });
      //Edge binding end

   })("Menu_Item_View");
   //Edge symbol end:'Menu_Item_View'

   //=========================================================
   
   //Edge symbol: 'Button_Element'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseover", function(sym, e) {
         sym.$( "Btn_Background" ).css( {
         	backgroundColor: 'rgba(43,150,211,1.00)'
         } );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_Area}", "mouseout", function(sym, e) {
         sym.$( "Btn_Background" ).css( {
         	backgroundColor: 'rgba(101,101,101,1.00)'
         } );

      });
      //Edge binding end

   })("Button_Element");
   //Edge symbol end:'Button_Element'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-68749657");