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
         sym.$("<link rel='stylesheet' type='text/css' href='styles/styles.css'>").appendTo("#Stage");

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
         	],
         	backBtn = $( sym.getSymbol( "Menu_Item_View" ).getSymbol( 'Menu_Item_View_Content' ).$( "Go_Back_Btn" ) ),
         	definitionsBackBtn = $( sym.getSymbol( "Menu_Item_View" ).getSymbol( "Definition_View" ).$( "Navigation_Button_Back" ) );


         for ( var i = 0; i < menuItems.length; i++ ) {
         	var $item = $( sym.getSymbol( "Menu_View" ).$( menuItems[ i ] ) );

         	$item
         		.on( 'click', menuItemClicked )
         		.data( 'edge-selector', menuItems[ i ] );
         }

         backBtn.on( 'click', function () {
         	sym.playReverse();

         	sym.$( "Menu_View" ).css( {
         		pointerEvents: 'all'
         	} );

         	sym.$( "Menu_Item_View" ).css( {
         		pointerEvents: 'none'
         	} );
         } );

         definitionsBackBtn.on( 'click', function () {
         	sym.getSymbol("Menu_Item_View").playReverse();
         } );

         function menuItemClicked () {
         	var itemElement = sym.getSymbol( 'Menu_View' ).getSymbol( $( this ).data( 'edge-selector' ) ),
         		 itemLabelText = itemElement.$( 'Label' ).text(),
         		 itemViewLabel = sym.getSymbol( 'Menu_Item_View' ).getSymbol( "Menu_Item_View_Content" ).$( 'Headline' );

         	itemViewLabel.text( itemLabelText );
         	sym.play( 'Show_Item_View' );

         	sym.$( "Menu_View" ).css( {
         		pointerEvents: 'none'
         	} );

         	sym.$( "Menu_Item_View" ).css( {
         		pointerEvents: 'all'
         	} );
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

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





      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

         sym.$( "Menu_Item_View_Content" ).css( {
         	pointerEvents: 'all'
         } );

         sym.$( "Definition_View" ).css( {
         	pointerEvents: 'none'
         } );
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.$( "Menu_Item_View_Content" ).css( {
         	pointerEvents: 'none'
         } );

         sym.$( "Definition_View" ).css( {
         	pointerEvents: 'all'
         } );
      });
      //Edge binding end





      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         var definitionBtn = $( sym.getSymbol("Menu_Item_View_Content").$("Show_Definition_Btn") );

         definitionBtn.on( 'click', function () {
         	sym.play( 'Show_Definition_View' );

         	var headlineText = sym.getSymbol("Menu_Item_View_Content").$("Headline").text(),
                pagename = headlineText.toLowerCase().replace( / /g, '_' ),
         		filename = encodeURIComponent( pagename ).replace( '%E2%80%8B', '' ),
                url = 'definitions/' + filename + '.html',
                definitionContent = sym.getSymbol( 'Definition_View' ).$( 'Definition_Content' );

             definitionContent.html( 'Laden...' );

         	$.get( url, function( data ) {
                definitionContent.html( data );
         	} );
         } );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$( "Menu_Item_View_Content" ).css( {
         	pointerEvents: 'all'
         } );

         sym.$( "Definition_View" ).css( {
         	pointerEvents: 'none'
         } );
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

   //=========================================================

   //Edge symbol: 'Navigation_Button_Back'
   (function(symbolName) {

   })("Navigation_Button_Back");
   //Edge symbol end:'Navigation_Button_Back'

   //=========================================================

   //Edge symbol: 'Navigation_Button_Fore'
   (function(symbolName) {

   })("Navigation_Button_Fore");
   //Edge symbol end:'Navigation_Button_Fore'

   //=========================================================

   //Edge symbol: 'Definition_View'
   (function(symbolName) {

   })("Definition_View");
   //Edge symbol end:'Definition_View'

   //=========================================================

   //Edge symbol: 'Menu_Item_View_Content'
   (function(symbolName) {



      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         var valueButtons = [ '200', '2K', '200K', '2M' ],
         	selectorPrefix = 'Button_',
         
         	commaValue = 0,
         	maxCommaValue = 100,
         	interval,
         
         	chart,
         	chartElement = sym.$( 'Graph_Container' ),
         	lineChartData = {
         		labels : [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15" ],
         		datasets : [
         			{
         				label: "Die letzten Messungen",
         				fillColor : "rgba(43,150,211,0.2)",
         				strokeColor : "rgba(43,150,211,1.00)",
         				pointColor : "rgba(220,220,220,1)",
         				pointStrokeColor : "#fff",
         				pointHighlightFill : "#fff",
         				pointHighlightStroke : "rgba(220,220,220,1)",
         				data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
         			}
         		]
         	},
         	currentGraphIndex = 0,
         	absolutePathEntries;
         
         
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
         
         function updateValue () {
         	var randomValue = parseInt( Math.random() * 200 );
         	sym.$("Value_Display").html( ( randomValue < 10 ? '00' + randomValue : ( randomValue < 100 ? '0' + randomValue : randomValue ) ) + ',' + ( commaValue < 10 ? '0' + commaValue : commaValue ) );
         
         	chart.addData( [ randomValue ], absolutePathEntries );
         	chart.removeData();
         
         	absolutePathEntries++;
         	commaValue += 5;
         
         	if ( commaValue >= maxCommaValue ) {
         		commaValue = 0;
         	}
         }
         
         function initGraph () {
         	chartElement.html( '<canvas id="value-graph" width="469" height="285"></canvas>' );
         
         	var canvas = document.getElementById( 'value-graph' ),
         		ctx = canvas.getContext( '2d' );
         
         	absolutePathEntries = lineChartData.datasets[ 0 ].data.length;
         
         	chart = new Chart( ctx ).Line( lineChartData, {
         		responsive: true,
         		animationSteps: 10
         	} );
         }
         
         initGraph();
         interval = setInterval( updateValue, 1000 );

      });
      //Edge binding end

   })("Menu_Item_View_Content");
   //Edge symbol end:'Menu_Item_View_Content'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-68749657");
