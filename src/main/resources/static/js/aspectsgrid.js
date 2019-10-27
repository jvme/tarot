/**
 * 
 */
(function(aspects) {
	aspects.CONJUNCTION = "Conjunction";
	aspects.SEXTILE = "Sextile";
	aspects.SQUARE = "Square";
	aspects.TRINE = "Trine";
	aspects.OPPOSITION = "Opposition";

	aspects.createGrid = function(idGrid) {
		this.idGrid = idGrid;
		return this;
	};
	
	
	var context;
	
	/**
	 * SVG tools.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {String} elementId - root DOM Element 
	 * @param {int} width
	 * @param {int} height 
	 */
	aspects.SVG = function( elementId, width, height){		
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");		
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);									
		document.getElementById( elementId ).appendChild( svg );
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', astrology.ID_CHART);
		svg.appendChild( wrapper );
						
		this.DOMElement = svg;				
		this.root = wrapper;
		this.width = width;
		this.height = height;
						
		context = this;
	};	
	
	/**
	 * Get a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * 
	 * @return {SVG g}
	 */

	aspects.SVG.prototype.getSymbol = function( name, x, y){		
		
		switch(name) {
			case aspects.CONJUNCTION:		        
		        return conjunction( x, y);		        
		        break;
		    case aspects.SEXTILE:		        
		        return sextile( x, y);		        
		        break;
		   case aspects.SQUARE:		        
		        return square( x, y);		        
		        break;     
		   case aspects.TRINE:		        
		        return trine( x, y);		        
		        break;	
		   case aspects.OPPOSITION:		        
		        return opposition( x, y);		        
		        break;
		    default:
		    	var unknownPoint = this.circle(x, y, 8);
		    	unknownPoint.setAttribute("stroke", "#ffff00");		 
				unknownPoint.setAttribute("stroke-width", 1);
		    	unknownPoint.setAttribute("fill", "#ff0000");		    							    			    			    			    		
		    	return unknownPoint;	 
		}			
	};

	/*
	 * Square path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function square( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " H 45.911341 V 46.134005 H 4.0886593 Z");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};

	/*
	 * Sextile path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sextile( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " h -44 m 11,-19 22,37.999998 m 0,-37.999998 -22,37.999998");
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Trine path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function trine( x, y ){

		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "M" + x + ", " + y + " H 45 L 25,7 Z");		
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};

	/*
	 * Conjunction path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function conjunction( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 11,11 0 1 0 2,2 z m 1,1 22,-22");	
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};	

	
	/*
	 * Opposition path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function opposition( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 9,9 0 1 0 2,2 z m 1,1 12,-12 m 1,1 a 9,9 0 1 0 -2,-2 z");	
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};	
}( window.aspects = window.aspects || {}));