/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-domprefixes-prefixed-setclasses-shiv-testallprops-testprop !*/
 !function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function i(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?u(o,n||t):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(){var e=t.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function m(e,n,r,o){var i,a,s,u,c="modernizr",f=l("div"),d=p();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:c+(r+1),f.appendChild(s);return i=l("style"),i.type="text/css",i.id="s"+c,(d.fake?d:f).appendChild(i),d.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),a=n(f,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=u,x.offsetHeight):f.parentNode.removeChild(f),!!a}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function g(e,t,o,i){function u(){f&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var f,d,p,m,g,v=["modernizr","tspan","samp"];!P.style&&v.length;)f=!0,P.modElem=l(v.shift()),P.style=P.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=P.style[m],s(m,"-")&&(m=a(m)),P.style[m]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?m:!0;try{P.style[m]=o}catch(y){}if(P.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+_.join(a+" ")+a).split(" "),c(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],E={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var x=t.documentElement,b="svg"===x.nodeName.toLowerCase();b||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var w="Moz O ms Webkit",_=E._config.usePrefixes?w.toLowerCase().split(" "):[];E._domPrefixes=_;var N=E._config.usePrefixes?w.split(" "):[];E._cssomPrefixes=N;var j=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=j;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style});E.testProp=function(e,t,r){return g([e],n,t,r)};E.testAllProps=v;E.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};E.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(C),delete E.addTest,delete E.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);

 /*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 */
 var $event = $.event,
 $special,
 resizeTimeout;
 
 $special = $event.special.debouncedresize = {
     setup: function() {
         jQuery( this ).on( "resize", $special.handler );
     },
     teardown: function() {
         jQuery( this ).off( "resize", $special.handler );
     },
     handler: function( event, execAsap ) {
         // Save the context
         var context = this,
             args = arguments,
             dispatch = function() {
                 // set correct event type
                 event.type = "debouncedresize";
                 $event.dispatch.apply( context, args );
             };
 
         if ( resizeTimeout ) {
             clearTimeout( resizeTimeout );
         }
 
         execAsap ?
             dispatch() :
             resizeTimeout = setTimeout( dispatch, $special.threshold );
     },
     threshold: 250
 };
 
 // ======================= imagesLoaded Plugin ===============================
 // https://github.com/desandro/imagesloaded
 
 // jQuery('#my-container').imagesLoaded(myFunction)
 // execute a callback when all images have loaded.
 // needed because .load() doesn't work on cached images
 
 // callback function gets image collection as argument
 //  this is the container
 
 // original: MIT license. Paul Irish. 2010.
 // contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou
 
 // blank image data-uri bypasses webkit log warning (thx doug jones)
 var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
 
 $.fn.imagesLoaded = function( callback ) {
     var $this = this,
         deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
         hasNotify = $.isFunction(deferred.notify),
         $images = $this.find('img').add( $this.filter('img') ),
         loaded = [],
         proper = [],
         broken = [];
 
     // Register deferred callbacks
     if ($.isPlainObject(callback)) {
         $.each(callback, function (key, value) {
             if (key === 'callback') {
                 callback = value;
             } else if (deferred) {
                 deferred[key](value);
             }
         });
     }
 
     function doneLoading() {
         var $proper = jQuery(proper),
             $broken = jQuery(broken);
 
         if ( deferred ) {
             if ( broken.length ) {
                 deferred.reject( $images, $proper, $broken );
             } else {
                 deferred.resolve( $images );
             }
         }
 
         if ( $.isFunction( callback ) ) {
             callback.call( $this, $images, $proper, $broken );
         }
     }
 
     function imgLoaded( img, isBroken ) {
         // don't proceed if BLANK image, or image is already loaded
         if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
             return;
         }
 
         // store element in loaded images array
         loaded.push( img );
 
         // keep track of broken and properly loaded images
         if ( isBroken ) {
             broken.push( img );
         } else {
             proper.push( img );
         }
 
         // cache image and its state for future calls
         $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );
 
         // trigger deferred progress method if present
         if ( hasNotify ) {
             deferred.notifyWith( jQuery(img), [ isBroken, $images, jQuery(proper), jQuery(broken) ] );
         }
 
         // call doneLoading and clean listeners if all images are loaded
         if ( $images.length === loaded.length ){
             setTimeout( doneLoading );
             $images.unbind( '.imagesLoaded' );
         }
     }
 
     // if no images, trigger immediately
     if ( !$images.length ) {
         doneLoading();
     } else {
         $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
             // trigger imgLoaded
             imgLoaded( event.target, event.type === 'error' );
         }).each( function( i, el ) {
             var src = el.src;
 
             // find out if this image has been already checked for status
             // if it was, and src has not changed, call imgLoaded on it
             var cached = $.data( el, 'imagesLoaded' );
             if ( cached && cached.src === src ) {
                 imgLoaded( el, cached.isBroken );
                 return;
             }
 
             // if complete is true and browser supports natural sizes, try
             // to check for image status manually
             if ( el.complete && el.naturalWidth !== undefined ) {
                 imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                 return;
             }
 
             // cached images don't fire load sometimes, so we reset src, but only when
             // dealing with IE, or image is complete (loaded) and failed manual check
             // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
             if ( el.readyState || el.complete ) {
                 el.src = BLANK;
                 el.src = src;
             }
         });
     }
 
     return deferred ? deferred.promise( $this ) : $this;
 };
 
 var Grid = (function() {
 
         // list of items
     var $grid = jQuery( '#og-grid' ),
         // the items
         $items = $grid.children( 'li' ),
         // current expanded item's index
         current = -1,
         // position (top) of the expanded item
         // used to know if the preview will expand in a different row
         previewPos = -1,
         // extra amount of pixels to scroll the window
         scrollExtra = 0,
         // extra margin when expanded (between preview overlay and the next items)
         marginExpanded = 10,
         $window = jQuery( window ), winsize,
         $body = jQuery( 'html, body' ),
         // transitionend events
         transEndEventNames = {
             'WebkitTransition' : 'webkitTransitionEnd',
             'MozTransition' : 'transitionend',
             'OTransition' : 'oTransitionEnd',
             'msTransition' : 'MSTransitionEnd',
             'transition' : 'transitionend'
         },
         transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
         // support for csstransitions
         support = Modernizr.csstransitions,
         // default settings
         settings = {
             minHeight : 500,
             speed : 350,
             easing : 'ease'
         };
 
     function init( config ) {
 
         // the settings..
         settings = $.extend( true, {}, settings, config );
 
         // preload all images
         $grid.imagesLoaded( function() {
 
             // save item´s size and offset
             saveItemInfo( true );
             // get window´s size
             getWinSize();
             // initialize some events
             initEvents();
 
         } );
 
     }
 
     // add more items to the grid.
     // the new items need to appended to the grid.
     // after that call Grid.addItems(theItems);
     function addItems( $newitems ) {
 
         $items = $items.add( $newitems );
 
         $newitems.each( function() {
             var $item = jQuery( this );
             $item.data( {
                 offsetTop : $item.offset().top,
                 height : $item.height()
             } );
         } );
 
         initItemsEvents( $newitems );
 
     }
 
     // saves the item´s offset top and height (if saveheight is true)
     function saveItemInfo( saveheight ) {
         $items.each( function() {
             var $item = jQuery( this );
             $item.data( 'offsetTop', $item.offset().top );
             if( saveheight ) {
                 $item.data( 'height', $item.height() );
             }
         } );
     }
 
     function initEvents() {
 
         // when clicking an item, show the preview with the item´s info and large image.
         // close the item if already expanded.
         // also close if clicking on the item´s cross
         initItemsEvents( $items );
 
         // on window resize get the window´s size again
         // reset some values..
         $window.on( 'debouncedresize', function() {
 
             scrollExtra = 0;
             previewPos = -1;
             // save item´s offset
             saveItemInfo();
             getWinSize();
             var preview = $.data( this, 'preview' );
             if( typeof preview != 'undefined' ) {
                 hidePreview();
             }
 
         } );
 
     }
 
     function initItemsEvents( $items ) {
         $items.on( 'click', 'span.og-close', function() {
             hidePreview();
             return false;
         } ).children( 'a' ).on( 'click', function(e) {
 
             var $item = jQuery( this ).parent();
             // check if item already opened
             current === $item.index() ? hidePreview() : showPreview( $item );
             return false;
 
         } );
     }
 
     function getWinSize() {
         winsize = { width : $window.width(), height : $window.height() };
     }
 
     function showPreview( $item ) {
 
         var preview = $.data( this, 'preview' ),
             // item´s offset top
             position = $item.data( 'offsetTop' );
 
         scrollExtra = 0;
 
         // if a preview exists and previewPos is different (different row) from item´s top then close it
         if( typeof preview != 'undefined' ) {
 
             // not in the same row
             if( previewPos !== position ) {
                 // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                 if( position > previewPos ) {
                     scrollExtra = preview.height;
                 }
                 hidePreview();
             }
             // same row
             else {
                 preview.update( $item );
                 return false;
             }
 
         }
 
         // update previewPos
         previewPos = position;
         // initialize new preview for the clicked item
         preview = $.data( this, 'preview', new Preview( $item ) );
         // expand preview overlay
         preview.open();
 
     }
 
     function hidePreview() {
         current = -1;
         var preview = $.data( this, 'preview' );
         preview.close();
         $.removeData( this, 'preview' );
     }
 
     // the preview obj / overlay
     function Preview( $item ) {
         this.$item = $item;
         this.expandedIdx = this.$item.index();
         this.create();
         this.update();
     }
 
     Preview.prototype = {
         create : function() {
             // create Preview structure:
             this.$title = jQuery( '<h3></h3>' );
       this.$category = jQuery();
             this.$location = jQuery( '<p></p>' );
             this.$owner = jQuery( '<p></p>' );
             this.$date = jQuery( '<p></p>' );
             this.$value = jQuery( '<p></p>' );
             this.$contractor = jQuery( '<p></p>' );
             this.$description = jQuery( '<p></p>' );
             this.$href = jQuery( '<a href="#">Download Pdf</a>' );
             this.$details = jQuery( '<div class="og-details"></div>' ).append( this.$title, this.$category, this.$date, this.$location, this.$owner, this.$value, this.$contractor, this.$description, this.$href );
             this.$loading = jQuery( '<div class="og-loading"></div>' );
             this.$fullimage = jQuery( '<div class="og-fullimg"></div>' ).append( this.$loading );
             this.$closePreview = jQuery( '<span class="og-close close-btn">&#10006;</span>' );
             this.$previewInner = jQuery( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
             this.$previewEl = jQuery( '<div class="og-expander"></div>' ).append( this.$previewInner );
             // append preview element to the item
             this.$item.append( this.getEl() );
             // set the transitions for the preview and the item
             if( support ) {
                 this.setTransition();
             }
         },
         update : function( $item ) {
 
             if( $item ) {
                 this.$item = $item;
             }
 
             // if already expanded remove class "og-expanded" from current item and add it to new item
             if( current !== -1 ) {
                 var $currentItem = $items.eq( current );
                 $currentItem.removeClass( 'og-expanded' );
                 this.$item.addClass( 'og-expanded' );
                 // position the preview correctly
                 this.positionPreview();
             }
 
             // update current value
             current = this.$item.index();
 
             // update preview´s content
             var $itemEl = this.$item.children( 'a' ),
                 eldata = {
                     href : $itemEl.attr( 'href' ),
                     largesrc : $itemEl.data( 'largesrc' ),
                     title : $itemEl.data( 'title' ),
           category : $itemEl.data( 'category-names' ).split('|'),
           categorySlug : $itemEl.data( 'category-slugs').split('|'),
                     description : $itemEl.data( 'description' ),
                     location: $itemEl.data( 'location' ),
                     contractor: $itemEl.data( 'contractor' ),
                     value: $itemEl.data( 'value' ),
                     owner : $itemEl.data( 'owner' )
                 };
       
       console.log(eldata.category);
       console.log(eldata.categorySlug);
       
             this.$title.html( eldata.title );
       
       if( eldata.category.length ) {
         for (k=0; k<eldata.category.length; k++) {
           this.$category.append( '<a href="' + eldata.categorySlug[k] + '" class="category-box">' + eldata.category[k] + '</a>' );
         }
       } else {
         this.$category.append('test');
       }
 
       //this.$category.html( eldata.category + eldata.categorySlug );
             
       this.$location.html( "Location: " + eldata.location );
             this.$owner.html( "Owner: " + eldata.owner );
             this.$description.html(eldata.description );
             this.$contractor.html("Contractor: " + eldata.contractor );
             this.$value.html("Value: " + eldata.value );
             this.$href.attr( 'href', eldata.href );
 
             var self = this;
 
             // remove the current image in the preview
             if( typeof self.$largeImg != 'undefined' ) {
                 self.$largeImg.remove();
             }
 
             // preload large image and add it to the preview
             // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
             if( self.$fullimage.is( ':visible' ) ) {
                 this.$loading.show();
                 jQuery( '<img/>' ).on('load', function() {
                     var $img = jQuery( this );
                     if( $img.attr( 'src' ) === self.$item.children('a').data( 'largesrc' ) ) {
                         self.$loading.hide();
                         self.$fullimage.find( 'img' ).remove();
                         self.$largeImg = $img.fadeIn( 350 );
                         self.$fullimage.append( self.$largeImg );
                     }
                 } ).attr( 'src', eldata.largesrc );
             }
 
         },
         open : function() {
 
             setTimeout( $.proxy( function() {
                 // set the height for the preview and the item
                 this.setHeights();
                 // scroll to position the preview in the right place
                 this.positionPreview();
             }, this ), 25 );
 
         },
         close : function() {
 
             var self = this,
                 onEndFn = function() {
                     if( support ) {
                         jQuery( this ).off( transEndEventName );
                     }
                     self.$item.removeClass( 'og-expanded' );
                     self.$previewEl.remove();
                 };
 
             setTimeout( $.proxy( function() {
 
                 if( typeof this.$largeImg !== 'undefined' ) {
                     this.$largeImg.fadeOut( 'fast' );
                 }
                 this.$previewEl.css( 'height', 0 );
                 // the current expanded item (might be different from this.$item)
                 var $expandedItem = $items.eq( this.expandedIdx );
                 $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );
 
                 if( !support ) {
                     onEndFn.call();
                 }
 
             }, this ), 25 );
 
             return false;
 
         },
         calcHeight : function() {
 
             var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
                 itemHeight = winsize.height;
 
             if( heightPreview < settings.minHeight ) {
                 heightPreview = settings.minHeight;
                 itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
             }
             // Added height here... need better fix than + 200 for production.
             this.height = heightPreview + 200;
             console.log(this.height);
             this.itemHeight = itemHeight + 200;
 
         },
         setHeights : function() {
 
             var self = this,
                 onEndFn = function() {
                     if( support ) {
                         self.$item.off( transEndEventName );
                     }
                     self.$item.addClass( 'og-expanded' );
                 };
 
             this.calcHeight();
             this.$previewEl.css( 'height', this.height );
             this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );
 
             if( !support ) {
                 onEndFn.call();
             }
 
         },
         positionPreview : function() {
 
             // scroll page
             // case 1 : preview height + item height fits in window´s height
             // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
             // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
             var position = this.$item.data( 'offsetTop' ),
                 previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                 scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
 
             $body.animate( { scrollTop : scrollVal }, settings.speed );
 
         },
         setTransition  : function() {
             this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
             this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
         },
         getEl : function() {
             return this.$previewEl;
         }
     }
 
     return {
         init : init,
         addItems : addItems
     };
 
 })();