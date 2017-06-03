var enem = (function ($) {
    
    var enemProjectName = 'ahu',
        enemTestElement = '<div class="enem_test_element" style="position:fixed; color:white; z-index:9999; bottom:0; right:0; background:tomato; padding:8px 15px;"></div>';
  
	var bismillah = function() {
        console.log('alhamdulillah');
    }
    
    var uhuy = function() {
		console.log('hello :)');
	};
    
    var btnClick = function () {
        $('.enem_btn').click(function(){
            var en = $(this),
                em = en.attr('data-enem-btn-type'),
                lo = en.attr('data-enem-visible');
            
            var enem_wr_search = $('.enem_ahu_wrapper_searchin');
            
            if(em === 'search') {
                if(lo === 'hidden') {  
                    $('.enem_search_icon').removeClass('fa-search');
                    $('.enem_search_icon').addClass('fa-close');
                    $('.enem_search_icon').addClass('enem_btn_search_open');
                    $('.enem_ahu_wrapper_logo').css({
                        'opacity': 0.2
                    });
                    enem_wr_search.fadeIn(1000);
                    en.attr('data-enem-visible','show');
//                    console.info('enemtrue');
                } else {
                    $('.enem_search_icon').removeClass('fa-close');
                    $('.enem_search_icon').removeClass('enem_btn_search_open');
                    $('.enem_search_icon').addClass('fa-search');
                    $('.enem_ahu_wrapper_logo').css({
                        'opacity': 1
                    });
                    enem_wr_search.fadeOut(1000);
                    en.attr('data-enem-visible','hidden');
//                    console.info('enemfalse');

                }
            }
            //alert(em);
        });
    };
    
    var smoothScroll = function () {
        var $window = $(window);		//Window object
//        var $window = $('body');
		
		var scrollTime = .7;			//Scroll time
		var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
			
		$window.on("mousewheel DOMMouseScroll", function(event){
			
			//event.preventDefault();	
											
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
				
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
					autoKill: true,
					overwrite: 5							
				});
						
		});
    }
    
    var normalSlide = function () {
        var enem_width = '100%',
            enem_height = '100%',
            enem_slideJssor = $('.enem_slide div');
        
        var en = enem_slideJssor.attr('u');
        
        $('.enem_slide').css({
            'position' : 'relative',
            'width' : enem_width,
            'height' : enem_height,
        });
        
        if(en === 'slides') {
            en.css({
                'position' : 'relative'
            });
        }
    }
    
    var customSlide = function () {
            var _SlideshowTransitions = [
                {$Duration:1200,$Opacity:2}
            ];

            var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 400, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $ScaleHorizontal: 0.6, $Opacity: 2 };
            _CaptionTransitions["R"] = { $Duration: 400, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $ScaleHorizontal: 0.6, $Opacity: 2 };
            _CaptionTransitions["B"] = { $Duration: 400, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $ScaleVertical: 0.6, $Opacity: 2 };
            
            var options = {
                $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actuall size, default value is 0
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
                $SlideDuration: 1200,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
                $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                },

                $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                },

                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },
                //$SlideHeight: 500,
            };

            var jssor_slider1 = new $JssorSlider$("slider_container", options);
        
            function setWidthSlide() {
                var we = $('.enem_ahu_box_slider').width();
                jssor_slider1.$SetScaleWidth(Math.min(we, 1920));
            }
        
            function setHeightSlide() {
                var he = $('.enem_ahu_box_slider').height();
                jssor_slider1.$SlideHeight(he);
            }
        
            setWidthSlide();
            //setHeightSlide();

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
//            function ScaleSlider() {
//                var bodyWidth = document.body.clientWidth;
//                if (bodyWidth)
//                    jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 1920));
//                else
//                    window.setTimeout(ScaleSlider, 30);
//            }

//            ScaleSlider();

//            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
//                $(window).bind('resize', ScaleSlider);
//            }
    }
    
    var detectImage = function () {
        var image = $('.enem_detect img'),
            imageWidth = image.width(),
            imageHeight = image.height();
        if(imageWidth > imageHeight) {
            image.css({
//                'width' : '100%',
//                'height' : '100%',
                'width' : '100%',
                'height' : 'auto'
            });
        } else {
            image.css({
//                'height' : '100%',
                'height' : 'auto',
            });
        }
    }
    
    var powerEnem = function () {
        var enemPower = $('.enem_power');
        
        $(document).on('click','.enem_power',function(){
            var enemPower = $(this),
                enemPowerType = enemPower.attr('data-enem-type'),
                enemPowerStatus = enemPower.attr('data-enem-status'),
                enemPowerId = enemPower.attr('data-enem-id');
            
            if(enemPowerType === 'enem_tab') {
                var enemClassTabActive = 'enem_' + enemProjectName + '_tab_active',
                    enemElActive = $('.' + enemClassTabActive),
                    enemTab = $('.enem_ahu_box_tab_content');
                
                var enemTabContentActive = $('.enem_tab_active');
                
                enemPowerRemoveTab();
                
                if(enemPowerStatus === 'produkhukum') {
                    enemPowerTabActive();
                } else if(enemPowerStatus === 'aplikasiahu') {
                    enemPowerTabActive();   
                } else if(enemPowerStatus === 'faq') {
                    enemPowerTabActive();   
                    swiperSlider2();
                }
                console.info(enemPowerStatus);
            } else if(enemPowerType === 'enem_toggle') {
                
                
                if(enemPowerStatus === 'produkhukum') {
                    var enemToggleContentActive = $('.enem_toggle_active');
                    var enemElBoxContent = $('.enem_ahu_' + enemPowerStatus + '_content'),
                        enemElWrapperContent = $('.enem_ahu_wrapper_' + enemPowerStatus + '_content_' + enemPowerId);
                    
                    
                    if(enemPowerId === 'perdata') {
                        
                        if(enemElWrapperContent.is(':hidden')) {
                            enemPowerToggleActive();
                        } else {
                            enemPowerRemoveToggle();
                        }
                        
                        
                    } else if(enemPowerId === 'pidana') {
                        
                        if(enemElWrapperContent.is(':hidden')) {
                            enemPowerToggleActive();
                        } else {
                            enemPowerRemoveToggle();
                        }
                        
                    } else if(enemPowerId === 'tatanegara') {
                        
                        if(enemElWrapperContent.is(':hidden')) {
                            enemPowerToggleActive();
                        } else {
                            enemPowerRemoveToggle();
                        }
                        
                    } else if(enemPowerId === 'hiop') {
                        
                        if(enemElWrapperContent.is(':hidden')) {
                            enemPowerToggleActive();
                        } else {
                            enemPowerRemoveToggle();
                        }
                        
                    }
                    console.info(enemPowerId);
                } else if(enemPowerStatus === 'faq') {
                    var enemElPowerParent = enemPower.parent(),
                        enemElTargetPowerContent = enemElPowerParent.siblings('.enem_ahu_wrapper_content_toggle_faq'),
                        enemElTargetPowerIconFaq = enemPower.children('.enem_left').children('i'),
                        enemElPowerIconFaq = $('.enem_icon_toggle_faq');
                    if(enemElTargetPowerContent.is(':hidden')) {
                        enemPowerFaqBehavior();
                    } else {
                        enemPowerFaqBehaviorOff();
                    }
                }
                console.info(enemPowerStatus);
            } else if(enemPowerType === 'enem_tab_publication') {
                $('.enem_ahu_tab_publication_active').removeClass('enem_ahu_tab_publication_active');
                enemPower.addClass('enem_ahu_tab_publication_active');
                console.info(enemPowerStatus);
            } else if(enemPowerType === 'enem_tab_profile') {
                $('.enem_ahu_tab_profile_active').removeClass('enem_ahu_tab_profile_active');
                enemPower.addClass('enem_ahu_tab_profile_active');
                if(enemPowerStatus === 'sejarahahu') {
                    $('.enem_container_profile').hide();
                    $('#' + enemPowerStatus).fadeIn();
                } else if(enemPowerStatus === 'visimisi') {
                    $('.enem_container_profile').hide();
                    $('#' + enemPowerStatus).fadeIn();
                } else if(enemPowerStatus === 'lokasiahu') {
                    $('.enem_container_profile').hide();
                    $('#' + enemPowerStatus).fadeIn();
                }
                console.info(enemPowerStatus);
            } else if(enemPowerType === 'enem_tab_category') {
                if(enemPowerStatus === 'organisasi') {
                    
                    enemPowerTabCategory();
                    
                } else if(enemPowerStatus === 'faq') {
                    
                    enemPowerTabCategory();
                    
                } else if(enemPowerStatus === 'unduh') {
                    
                    enemPowerTabCategory();
                    
                } else {
                    console.error('Check your power status. Your power status is: ' + enemPowerStatus);
                }
                
            } else if(enemPowerType === 'enem_tab_subcategory') {
                if(enemPowerStatus === 'organisasi') {
                    
                    if(enemPowerId === 'produkhukum'){
                        enemPowerTabSubCategory();
                    } else if(enemPowerId === 'overview'){
                        enemPowerTabSubCategory();
                    } else if(enemPowerId === 'struktur'){
                        enemPowerTabSubCategory();
                    }
                    
                }
            } else if(enemPowerType === 'enem_modal_unduh') {
                var enemModalStatus = $('.enem_modal').attr('data-modal-status');
                if(enemModalStatus === 'hide') {
                    
                    $('.enem_modal').fadeIn();
                    $('.enem_modal').attr('data-modal-status','show');
                    
                } else {
                    
                    $('.enem_modal').fadeOut();
                    $('.enem_modal').attr('data-modal-status','hide');
                    
                }
            } else if(enemPowerType === 'enem_big_player') {
                var enemYoutubeId = enemPower.attr('data-enem-ytid');
                if(enemYoutubeId) {
                    var enemYtVideoLink = 'http://www.youtube.com/embed/'+ enemYoutubeId +'?enablejsapi=1&wmode=opaque',
                        enemTitleVideo = enemPower.children('.enem_ahu_box_title_thumbnail_video').text(),
                        enemLikeVideo = enemPower.children('.enem_ahu_container_likeview_video').children().children().children('.enem_ahu_like_video').children('.like_video').text(),
                        enemViewerVideo = enemPower.children('.enem_ahu_container_likeview_video').children().children().children('.enem_ahu_viewer_video').children('.viewer_video').text();
                    //console.info(enemLikeVideo);
                    $('.enem_ahu_box_title_bigplayer_video').html(enemTitleVideo);
                    $('.enem_ahu_box_like_video').html(enemLikeVideo);
                    $('.enem_ahu_box_viewer_video').html(enemViewerVideo)
                    $('#enemBigPlayer').attr('src', enemYtVideoLink);
                }
            } else if(enemPowerType === 'enem_download') {
                if(enemPowerStatus === 'baganahu') {
                    var enemFileDownload = enemPower.parent().siblings('.enem_ahu_box_photo_slide_organisasi').find('img').attr('src');
                    enemPowerDownload(enemFileDownload);
                    //console.info(enemFileDownload);
                }
            }
            
            /** Enem For Download file **/
            function enemPowerDownload(fileName) {
                /** Harus ada ini nya buat ngeprosesnya lah **/
                /*<form action="/site/unduhstruktur" id="f-post" name="fpost" method="post">
                /*    <input type="hidden" name="filename"/>
                /*</form>
                /*
                /*************************/
                fpost.filename.value = fileName;
                fpost.submit();
            }
            
            /** Toggle Faq Behavior **/
            function enemPowerFaqBehavior() {
                enemPowerFaqBehaviorOff();
                enemPowerFaqBehaviorOn();
            }
            function enemPowerFaqBehaviorOff() {
                enemElTargetPowerContent.removeClass('enemPowerActive');
                enemElPowerIconFaq.removeClass('fa-caret-down');
                enemElPowerIconFaq.addClass('fa-caret-right');
                $('.enem_ahu_wrapper_content_toggle_faq').slideUp();
            }
            function enemPowerFaqBehaviorOn() {
                enemElTargetPowerIconFaq.removeClass('fa-caret-right');
                enemElTargetPowerIconFaq.addClass('fa-caret-down');
                enemElTargetPowerContent.addClass('enemPowerActive');
                enemElTargetPowerContent.slideDown();
            }
            /********************************/
            
            /** Tab Subcategory **/
            function enemPowerTabSubCategory() {
                var enemElClassActive = $('.enem_ahu_tab_right_organisasi.enem_ahu_tab_profile_active'),
                    enemThisEl = enemPower,
                    enemElOff = $('.enem_ahu_container_content_organisasi');
                
                enemElOff.hide();
                
                $('#' + enemPowerId).fadeIn();

                enemElClassActive.removeClass('enem_ahu_tab_profile_active');

                enemThisEl.addClass('enem_ahu_tab_profile_active');
            }
            /********************************/
            
            /** Tab Category **/
            function enemPowerTabCategory() {
                var enemElClassActive = $('.menu_'+ enemPowerStatus +'_active'),
                    enemThisEl = enemPower.children('.enem_ahu_box_icon'),
                    enemThisElTitle = enemPower.children('.enem_ahu_box_title_menu_' + enemPowerStatus),
                    enemThisTitle = enemThisElTitle.text(),
                    enemElTabStatus = $('.enem_ahu_tab_status');

                enemElClassActive.removeClass('menu_'+ enemPowerStatus +'_active');
                //console.info(enemPowerType);
                enemThisEl.addClass('menu_'+ enemPowerStatus +'_active');
                //console.info(ex);
                enemElTabStatus.html(enemThisTitle);
                console.info(enemThisTitle);
            }
            /*****************************/
            
            /** Toggle Beranda **/
            
            function enemPowerTabActive() {
                enemElActive.removeClass(enemClassTabActive);
//                enemPower.addClass(enemClassTabActive);  
                $('.enem_tab_' + enemPowerStatus).addClass(enemClassTabActive);
                $('#' + enemPowerStatus).fadeIn();
                $('#' + enemPowerStatus).addClass('enem_tab_active');
            }
            
            function enemPowerRemoveTab() {
                enemTabContentActive.hide();
                enemTabContentActive.removeClass('enem_tab_active');
            }
            
            /** For Toggle **/
            function enemPowerToggleActive() {
                enemPowerRemoveToggle();
                enemElWrapperContent.fadeIn();
                //console.log(enemElWrapperContent);
                enemElWrapperContent.addClass('enem_toggle_active');
            }
            
            function enemPowerRemoveToggle() {
                enemToggleContentActive.hide();
                enemToggleContentActive.removeClass('enem_toggle_active');
            }
            /***********************/
        });
    }
    
    var swiperSlider = function () {
        var swiper = new Swiper('.enem_ahu_wrapper_list_aplikasiahu', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 7,
	        paginationClickable: true,
	        spaceBetween: 40,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1024: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1250: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 30
                }
            },
            autoplay: 2500,
            autoplayDisableOnInteraction: false
	    });
    }
    
    var swiperSlider2 = function () {
        var swiper = new Swiper('.enem_ahu_wrapper_list_faq', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 7,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1250: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 30
                }
            },
            autoplay: 2500,
            autoplayDisableOnInteraction: false
	    }); 
    }
    
    var swiperSlider3 = function () {
        var swiper = new Swiper('.enem_slide_struktur', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 3,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
//                // when window width is <= 320px
//                320: {
//                  slidesPerView: 1,
//                  spaceBetweenSlides: 10
//                },
                // when window width is <= 480px
//                480: {
//                  slidesPerView: 2,
//                  spaceBetweenSlides: 20
//                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                }
            }
	    }); 
    }
    
    var swiperSliderVideo = function () {
        var swiper = new Swiper('.enem_ahu_box_other_video', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 2,
	        paginationClickable: true,
	        spaceBetween: 50,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                }
            }
	    }); 
    }
    
    var swiperSliderBanner = function() {
        var swiper = new Swiper('.enem_ahu_box_slider', {
            pagination: '.swiper-pagination',
//            nextButton: '.swiper-button-next',
//            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 5000,
            parallax: true,
            autoplayDisableOnInteraction: false,
        });
    }
    
    var swiperSliderTab = function() {
        var swiper = new Swiper('.enem_ahu_tab_slider', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 1,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            initialSlide: 1,
            breakpoints: {
                // when window width is <= 320px
//                320: {
//                  slidesPerView: 1,
//                  spaceBetweenSlides: 10
//                },
                // when window width is <= 480px
//                480: {
//                  slidesPerView: 2,
//                  spaceBetweenSlides: 20
//                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 30
                }
            }
	    });
    }
    
    var progressBar = function () {
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            //Upload progress
            xhr.upload.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with upload progress
                console.log(percentComplete);
              }
            }, false);
            //Download progress
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with download progress
                console.log(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "/",
          data: {},
          success: function(data){
            //Do something success-ish
          }
        });
    }
    
    var enemSecret = function() {
        enem_secret = '68a7998c07429dead3debb730cf0f17c'; 
        return enem_secret;
    }
    
    var enemDownload = function(elem) {
        var fileName = enemGetLinkDownload(elem);
        fpost.filename.value = fileName;
        fpost.submit();
        
        function enemGetLinkDownloadImage(elem) {
            var link = elem.attr('src');
            return link;
        }
    }
    
    var enemVideoHome = function() {

        // The API will call this function when the page has finished downloading the JavaScript for the player API
        function onYouTubePlayerAPIReady() {

            // Initialise the fancyBox after the DOM is loaded
            $(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });

        }
    }
    
    var powerHashEnem = function(enemPowerHash, enemPowerHashStatus) {
        var enemHash = enemPowerHash,
            enemPowerStatus = enemPowerHashStatus;
        console.info('This enem hash: ' + enemHash + ' and this hash status: ' + enemPowerStatus);
        if(enemHash && enemPowerStatus) {
            var enemHashEl = $('.enem_box_icon_' + enemHash),
                enemHashElTitle = enemHashEl.siblings('.enem_ahu_box_title_menu_' + enemPowerStatus);
            if(enemHashEl.length){
                enemPowerTabActiveHash();
                console.info(enemHash);
            } else {
                console.error('Coba cek Hash anda dan Statusnya. Your Hash is: ' + enemHash + ' and your status is: ' + enemPowerStatus);
            }
        } else {
            console.error('Hash dan Status Kosong');
        }
        
        function enemPowerTabActiveHash() {
            
            /** Sama Kaya enemPowerTabCategory() fungsinya buat aktifin tab tapi ini pake hash url **/
            var enemElClassActive = $('.menu_'+ enemPowerStatus +'_active'),
                enemThisEl = enemHashEl,
                enemThisElTitle = enemHashElTitle,
                enemThisTitle = enemThisElTitle.text(),
                enemElTabStatus = $('.enem_ahu_tab_status');

            enemElClassActive.removeClass('menu_'+ enemPowerStatus +'_active');
            //console.info(enemPowerType);
            enemThisEl.addClass('menu_'+ enemPowerStatus +'_active');
            //console.info(ex);
            enemElTabStatus.html(enemThisTitle);
            console.info(enemThisTitle);
        }
    }
    
    var powerModal = function(enemSiteUrl) {
        
        var enemSiteUrl = enemSiteUrl,
            enemAjaxKey = enemSecret();
        
//        console.info(enemAjaxKey);
//        console.info(enemSiteUrl);
        
        $(document).on('click','.enem_modal', function(){
           var enemPowerModalEl = $(this), 
               enemPowerModal = enemPowerModalEl.attr('data-enem-modalpower'),
               enemPowerModalTarget = enemPowerModalEl.attr('data-enem-modaltarget'),
               enemPowerModalId = enemPowerModalEl.attr('data-enem-enmodal'),
               enemPowerModalContainerTarget = $('.enem_body_modal');
            
            var enemFlag = true;
            
            if(enemPowerModal === 'modal_on') {
                
                if(enemSiteUrl) {
                    
                    if(enemPowerModalId) {
                        
                        var enemPowerModalTargetEl = $(enemPowerModalTarget);

                        if(enemPowerModalTargetEl.length) {

                            var enemFlag = false,
                                enemStatus = 'modal';
                            $('body').addClass('enem_modal_active_body');
                            
                        } else {
                            console.error('Check your modal target. Your modal target is: ' + enemPowerModalTargetEl);
                        }
                        
                    } else {
                        console.error('Check your enmodal. Your enmodal is: ' + enemPowerModalId);
                    }
                    
                } else {
                    console.error('Check your site url. Your site url is: ' + enemSiteUrl);
                }
                
                

            } else if(enemPowerModal === 'modal_off') {
                var enemPowerModalTargetEl = $('.enem_modal_active'),
                    enemContentModal = $('.enem_wrapper_content_modal');

                if(enemPowerModalTargetEl.length) {
                    enemPowerModalTargetEl.fadeOut();
                    enemContentModal.fadeOut();
                    $('body').removeClass('enem_modal_active_body');
                    
                    var enemFlag = 'modal_off';

                } else {
                    console.error('Check your modal target. Your modal target is: ' + enemPowerModalTargetEl);
                }

            } else {
                console.error('Check your modal power. Your modal power is: ' + enemPowerModal);
            }
            
            
            if(enemFlag === false) {
                
                var enemDataModal = {
                    enem_modal_target: enemPowerModalId,
                    enem_key: enemAjaxKey,
                    enem_status: enemStatus,
                }
                
                var enemLoadingModal = $('.enem_modal_loading'),
                    enemContentModal = $('.enem_wrapper_content_modal');
                
//                console.info(enemDataModal);
                enemLoadingModal.fadeIn();
                enemPowerModalTargetEl.fadeIn();
                enemPowerModalTargetEl.addClass('enem_modal_active');
                
                $.ajax({
                    url     : enemSiteUrl + '/ajax/enemmodal',
                    type    : 'POST',
                    data    : enemDataModal,
                    success   : function(data){

                      //enem_loading.fadeOut();
//                      enem_loading.hide();
                        
                        //reset element content modal
                        enemPowerModalContainerTarget.empty();
                        
                        
                        enemLoadingModal.hide();
                        
                        if(data) {
                            enemPowerModalContainerTarget.html(data);
                        } else {
                            enemPowerModalContainerTarget.html('Content Here');
                        }
                        
                        var enemElTitleModal = $('.enem_title_modal'),
                            enemGetTitleModal = $('.enem_body_content_modal').attr('data-enem-modaltitle');
                        
                        //reset element title
                        enemElTitleModal.empty();
                        
//                        console.info(enemGetTitleModal);
                        if(enemGetTitleModal) {
                            enemElTitleModal.html(enemGetTitleModal); 
                        } else {
                            enemElTitleModal.html('Title Here'); 
                            console.error('Check your modal title. Your title is: ' + enemGetTitleModal);
                        }
                        
                        enemContentModal.fadeIn();
                    /** Give some condition. Kalo butuh **/
                        /** if(asd) {
                        
                        }
                        **/
                    /*************************************/

                  }
                });
//                console.info('ok no flag');
            } else {
                if(enemFlag === 'modal_off') {
                    console.info('Thank you');
                } else {
                    console.error('Check your modal flag');
                }
            }
            
            console.info(enemPowerModal);
        });
        
    }
    
    var powerModalFix = function() {
        var enemWindow = $(window),
            enemWindowWidth = enemWindow.width(),
            enemWindowHeight = enemWindow.height(),
            enemModalElBody = $('.enem_container_body_modal'),
            enemModalBodyHeight = parseInt(enemModalElBody.height()),
            enemHeightWindowNow = Math.round(enemWindowHeight * 30 / 100),
            enemMaxHeightBodyModal = enemWindowHeight - enemHeightWindowNow,
            enemBodyContentModal = $('.enem_body_content_modal'),
            enemBodyContentWidth = enemBodyContentModal.width(),
            enemWrapperContentModalEl = $('.enem_wrapper_content_modal'),
            enemWidMinWrapperContentModal = enemWindowWidth - 80;
        
        powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight + '<br>' + ' HaWeNo: ' + enemHeightWindowNow);
        
        if(enemWindowWidth > 620) {
            enemModalElBody.css({
                'max-height' : enemMaxHeightBodyModal
            });
            setTimeout(function(){
                if(enemBodyContentWidth > enemWindowWidth) {
                    enemWrapperContentModalEl.css({
                        'min-width' : enemWidMinWrapperContentModal
                    });
                }
            },20);
        } else {
            enemModalElBody.css({
                'max-height' : enemWindowHeight - 90
            });
        }
        
        $(window).resize(function(){
            var enemWindow = $(window),
                enemWindowWidth = enemWindow.width(),
                enemWindowHeight = enemWindow.height(),
                enemModalElBody = $('.enem_container_body_modal');

            powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight);
            
            if(enemWindowWidth < 620) {
                enemModalElBody.css({
                    'height' : enemWindowHeight
                });
            } else {
                enemModalElBody.css({
                    'max-height' : enemWindowHeight - 90
                });
            }
            
        });
        
    }
    
    var powerVoting = function() {
        $(document).on('click', '.enem_vc', function(){
            var enemPowerChoice = $(this),
                enemParentElVoting = enemPowerChoice.parent();
            
            $('.enem_voting li').removeClass('power_voting_active');
            enemParentElVoting.addClass('power_voting_active');
            
            console.info('enem');
        });
    }
    
    var powerMenu = function() {
        $(document).on('click', '.enem_menu', function(){
            var enemThisBtnMenuEl = $(this),
                enemStatusBtn = enemThisBtnMenuEl.attr('data-menu'),
                enemBodyEl = $('body'),
                enemMenuEl = $('.enem_ahu_menu_side');
            
            var dataMenu = {
                enemThisBtnMenuEl: enemThisBtnMenuEl,
                enemBodyEl: enemBodyEl,
                enemMenuEl: enemMenuEl,
            }
            
            if(enemStatusBtn === 'hidden') {
                enemMenuMobile(dataMenu, 'ON');
            } else if(enemStatusBtn === 'show') {
                enemMenuMobile(dataMenu, 'OFF');
            } else {
                console.error('Check your status menu. Your status menu is: ' + enemStatusBtn);
            }
            
            
        });
        
        function enemMenuMobile(dataMenu, enemMenuPower) {
            if(enemMenuPower === 'ON') {
                
                dataMenu.enemBodyEl.addClass('enem_ahu_navbar_active');
                setTimeout(function(){
                    dataMenu.enemThisBtnMenuEl.addClass('is-active');
                    dataMenu.enemMenuEl.animate({
                        left : '0px',
                    },700);
                    dataMenu.enemBodyEl.animate({
                        left : '270px',
                    },700);
                },5);
                dataMenu.enemThisBtnMenuEl.attr('data-menu','show');
                
            } else if(enemMenuPower === 'OFF') {
                
                var enemAnimateFinish = false;
            
                dataMenu.enemThisBtnMenuEl.removeClass('is-active');
                dataMenu.enemThisBtnMenuEl.attr('data-menu','hidden');
                dataMenu.enemMenuEl.animate({
                    left : '-270px',
                },700);
                dataMenu.enemBodyEl.animate({
                    left : '0px',
                },700);

                setTimeout(function(){
                    var enemBodyOffset = dataMenu.enemBodyEl.offset().left;
                    if(enemBodyOffset === 0) {    
                        dataMenu.enemBodyEl.removeClass('enem_ahu_navbar_active');    
                    } 
                },710);
                
            } else {
                console.error('Check your menu power. Your power is: ' + dataMenu.enemMenuPower);
            }
        }
        
    }
    
    var powerTest = function(content) {
        $('body').append(enemTestElement);
        if(content.length) {
            $('.enem_test_element').html(content);
        } else {
            console.error('Check your content. Your content is: ' + content);
        }
    }
    
    var powerScreen = function() {
        var enemWindow = $(window),
            enemWidth = enemWindow.width(),
            enemHeight = enemWindow.height();
        
        $('body').append(enemTestElement);
        console.info('w : ' + enemWidth + ' ' + 'h : ' + enemHeight);
        if(enemWidth && enemHeight) {
            var dataScreen = {
                'enemWidth' : enemWidth,
                'enemHeight' : enemHeight,
            };
            var dataContent = 'width : ' + dataScreen.enemWidth + '<br>' + 'height : ' + dataScreen.enemHeight;
            $('.enem_test_element').html(dataContent);
        } else {
            console.error('Check your content. Your content is: ' + dataContent);
        }
    }
    
    var powerRatio = function(dataRatio) {
        var enemTypeof = powerGetType(dataRatio).enemTypeof;
        if(enemTypeof === 'object') {
            var enemPowerRatioWidth = dataRatio.width,
                enemPowerRatioHeight = dataRatio.height;
            
        } else {
            console.error('Data must be object. Your data is: ' + dataRatio);
        }
    }
    
    var powerSpeed = function() {
        window.onload = function(){
          setTimeout(function(){
            var t = performance.timing;
            console.log(t.loadEventEnd - t.responseEnd);
          }, 0);
        }
    }
    
    var powerLoader = function() {
        window.onload = function(){
            $('.enem_ahu_wrapper_loader').fadeOut(800);
            $('.enem_ahu_active_loader').removeClass('enem_ahu_active_loader');
        }
    }
    
    var powerSliderTitle = function(enemTarget) {
        var enemWindow = $(window),
            enemWindowWidth = enemWindow.width(),
            enemWindowHeight = enemWindow.height();
        
        var dataWindow = {
            powerWidth: enemWindowWidth,
            powerHeight: enemWindowHeight,
        }
        
        if(enemTarget.length){
            var enemTitleTarget = $('.' + enemTarget + ' .swiper-wrapper .swiper-slide span a p.title'),
                enemTotalTitle = enemTitleTarget.length;
            
//            console.info(enemTitleTarget);
//            console.info('w: ' + enemWindowWidth + ' and h : ' + enemWindowHeight);
//            console.info('Title total : ' + enemTotalTitle);
//            console.info('Target width : ' + enemParentWidth);
            
            
//            powerResponsive(dataWindow, exTest);
            enemTitleTarget.each(function(index){
                var enemElTarget = $(this),
                    enemTargetParent = enemElTarget.parent().parent(),
                    enemTitleText = enemElTarget.text(),
                    enemTitleLength = enemTitleText.length;
                
                var dataParam = {
                    textLength: enemTitleLength,
                    targetEl: enemTargetParent,
                }
                
                if(enemTitleLength > 15) {
                    if(dataWindow.powerWidth >= 2000) {
                        console.info('lebih dari 2000');
                    } else if(dataWindow.powerWidth >= 1500) {
                        console.info('1500 an');
                    } else if(dataWindow.powerWidth >= 1200) {
                        console.info('1200 an');
                        powerTitleSlider('add', dataParam);
                    } else if(dataWindow.powerWidth >= 768) {
                        console.info('768 aaaan');
                    } else {
                        console.info('Noresize :)');
                    }

                    enemWindow.on('resize', function(){
                        if(dataWindow.powerWidth >= 2000) {
                            console.info('lebih dari 2000');
                            powerTitleSlider('remove', dataParam);
                        } else if(dataWindow.powerWidth >= 1500) {
                            console.info('1500 an');
                            powerTitleSlider('remove', dataParam);
                        } else if(dataWindow.powerWidth >= 1200) {
                            console.info('1200 an');
                            powerTitleSlider('add', dataParam);
                        } else if(dataWindow.powerWidth >= 768) {
                            console.info('768 aaaan');
                            powerTitleSlider('remove', dataParam);
                        } else {
                            console.info('Resize :)');
                        }
                    });
                }
                
//                powerResponsiveTitleSlider(dataWindow, function(){
//                    powerTitleSlider('add', dataParam);
//                }, 'noresize');
//                
//                powerResponsiveTitleSlider(dataWindow, function(){
//                    powerTitleSlider('remove', dataParam);
//                }, 'resize');
                
                console.info(index + ": " + enemTitleText + ', and length is : ' + enemTitleLength);
                console.info( index + ": " + $(this).text() );
            });
            
        } else {
            console.error('Target not defined. Your target is : ' + enemTarget);
        }
    }
    
    var powerTitleSlider = function(statusPTS, dataParam) {
        var enemTypeof = powerGetType(dataParam).enemTypeof;
        if(statusPTS === 'add') {
            
            if(enemTypeof === 'object') {
                console.info('okee object');
                if(dataParam.textLength > 15) {
                    dataParam.targetEl.addClass('enem_' + enemProjectName + '_slider_gap');
                    console.info('Success add class');
                }
            } else {
                console.error('Data Must be object. Your data type is : ' + enemTypeof);
            }
            
        } else if(statusPTS === 'remove') {
            $('.enem_' + enemProjectName + '_slider_gap').removeClass('enem_' + enemProjectName + '_slider_gap');
            console.info('Success remove class');
        } else {
            console.error('Error in powerTitleSlider. Sorry :)');
        }
    }
    
    var powerResponsiveTitleSlider = function(dataWindow, callback, statusPRTS) {
        console.info(dataWindow);
        var enemWindow = $(window);
        
        if(callback) {
            
            if(statusPRTS === 'noresize') {
                
                if(dataWindow.powerWidth >= 2000) {
                    console.info('lebih dari 2000');
                } else if(dataWindow.powerWidth >= 1500) {
                    console.info('1500 an');
                } else if(dataWindow.powerWidth >= 1200) {
                    console.info('1200 an');
                    powerRunCallback(callback);
                } else if(dataWindow.powerWidth >= 768) {
                    console.info('768 aaaan');
                } else {
                    console.info('Noresize :)');
                }
                
            } else if(statusPRTS === 'resize') {
                
                enemWindow.resize(function(){
                    if(dataWindow.powerWidth >= 2000) {
                        console.info('lebih dari 2000');
                    } else if(dataWindow.powerWidth >= 1500) {
                        console.info('1500 an');
                    } else if(dataWindow.powerWidth >= 1200) {
                        console.info('1200 an');
                        powerRunCallback(callback);
                    } else if(dataWindow.powerWidth >= 768) {
                        console.info('768 aaaan');
                    } else {
                        console.info('Resize :)');
                    }
                });
                
            } else {
                console.error('Error in powerResponsiveTitleSlider. Sorry :)');
            }
            
            
        }
        
        return {
            powerWidth: dataWindow.powerWidth,
            powerHeight: dataWindow.powerHeight,
        }
    }
    
    var powerResponsive = function(dataWindow, callback) {
//        console.info(dataWindow);
//        if(dataWindow.powerWidth >= 2000) {
//            console.info('2000 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 1200) {
//            console.info('1200 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 768) {
//            console.info('700 an');
//        } else {
//            console.info(':)');
//        }
//        
//        return {
//            powerWidth: dataWindow.powerWidth,
//        }
    }
    
    var powerGetType = function(dataTitle){
        var enemTypeof = typeof(dataTitle);
        return {
            enemTypeof: enemTypeof,
        }
    }
    
    var powerRunCallback = function(callback) {
        if (callback) {
            var enemTypeof = powerGetType(callback).enemTypeof;
//            console.info(callback);
            if(enemTypeof === "function"){
                callback();
            } else {
                console.error('Sorry, check your callback. Your type is : ' + enemTypeof + ' :)');
            }
        } else {
            console.info('Sorry :)');
        }
    }
    
    var powerSlider = function(dataSlider) {
//        console.info(dataSlider);
        var enemTypeof = powerGetType(dataSlider).enemTypeof;
//            console.info(callback);
        // dataSlider must object
        // dataSlider.sliderType = For type of slider
        // dataSlider.element = For element of slider
        // dataSlider.setting = For setting slider. this data is optional
        if(enemTypeof === "object"){
            
            if($(dataSlider.element)[0]) {
                
                if(dataSlider.sliderType === 'banner') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            pagination: '.swiper-pagination',
                //            nextButton: '.swiper-button-next',
                //            prevButton: '.swiper-button-prev',
                            paginationClickable: true,
                            spaceBetween: 30,
                            centeredSlides: true,
                            autoplay: 5000,
                            parallax: true,
                            autoplayDisableOnInteraction: false,
                        });
                    } 
                    
                } else if(dataSlider.sliderType === 'sliderList') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 7,
                            paginationClickable: true,
                            spaceBetween: 40,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1250: {
                                  slidesPerView: 5,
                                  spaceBetweenSlides: 30
                                }
                            },
                            autoplay: 2500,
                            autoplayDisableOnInteraction: false
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderOtherVideo') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 2,
                            paginationClickable: true,
                            spaceBetween: 50,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                            }
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderStruktur') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 3,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        }); 
                    }
                } else if(dataSlider.sliderType === 'sliderTab') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 1,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        });
                    }
                } else {
                    console.error('Sorry, check your sliderType. Your type is : ' + dataSlider.sliderType + ' :)');
                }
                
            } else {
                console.error('Sorry, check your element. Your element is : ' + dataSlider.element + ' :)');
            }
            
        } else {
            console.error('Sorry, check your dataSlider. Your type is : ' + enemTypeof + ' :)');
        }
        
    }
    
    var powerToggle = function(powerOfToggle, dataToggle) {
        // dataToggle.targetId buat elemen yg mau di off. Mencari berdasarkan Toggle namenya. Jadi Toggle Id dan Toggle name harus sama
        // dataToggle.targetActive buat elemen yg mau di on
//        console.info('hahahahahaha');
        if(powerOfToggle === 'off') {
            $(dataToggle.targetId).slideUp(700);
            $(dataToggle.targetId).removeClass('toggle-active');
        } else if(powerOfToggle === 'on') {
            $(dataToggle.targetId).hide();
            $(dataToggle.targetId).removeClass('toggle-active');
            $(dataToggle.targetActive).slideDown(700);
            $(dataToggle.targetActive).addClass('toggle-active');
        } else {
            console.error('Sorry :)');
        }
    }
    
    var powerEnemEx = function() {
        $('[data-enem]').on('click', function(){
            var powerThisEl = $(this),
                powerEnemType = powerThisEl.attr('data-enem').toLowerCase(),
                powerEnemTargetEl = powerThisEl.attr('data-enem-target');
            
            console.info(powerEnemType);
            console.info('Target el : ' + powerEnemTargetEl);
            if(powerEnemType === 'tabs') {
                // Check attr Target
                
                if($(powerEnemTargetEl)[0]){
                    console.info('Tabs ok :)');
                    var powerTabs = powerThisEl.attr('data-tabs-name'),
                        powerTabsEl = $('[data-tabs-name='+ powerTabs +']'),
                        powerTabsId = '[data-tabs-id='+ powerTabs +']',
                        powerTabsTarget = powerEnemTargetEl,
                        powerTabsTargetEl = $('[data-enem-target="'+ powerEnemTargetEl +'"]'),
                        dataTabs = {
                            targetId : powerTabsId,
                            targetActive : powerTabsTarget,
                        };
                    
                    var powerEnemTarget = powerTabsTargetEl;
                    
                    console.info(powerEnemTarget);
                    
//                        $('.enem-' + enemProjectName + '-tab-active').removeClass('enem-' + enemProjectName + '-tab-active');
                    powerTabsEl.removeClass('enem-' + enemProjectName + '-tab-active');
//                    powerThisEl.addClass('enem-' + enemProjectName + '-tab-active');
                    powerEnemTarget.addClass('enem-' + enemProjectName + '-tab-active');
                    
                    if($(powerEnemTargetEl).is(':hidden')) {
                        $(dataTabs.targetId).hide();
                        $(dataTabs.targetId).removeClass('content-tab-active');
                        $(dataTabs.targetActive).fadeIn();
                        $(dataTabs.targetActive).addClass('content-tab-active');
                    }
//                    } else {
//                        $(dataToggle.targetId).fadeOut();
//                        $(dataToggle.targetId).removeClass('content-tab-active');
//                    }
                    
                } else {
                    
//                        $('.enem-' + enemProjectName + '-tab-active').removeClass('enem-' + enemProjectName + '-tab-active');
                    powerTabsEl.removeClass('enem-' + enemProjectName + '-tab-active');
//                    powerThisEl.addClass('enem-' + enemProjectName + '-tab-active');
                    powerEnemTarget.addClass('enem-' + enemProjectName + '-tab-active');
                    // if not found target
                    // tetep bisa lanjut dengan tab yg active nya doang
//                    console.warn('Not found target, check your data-enem-target. Your data-enem-target is : ' + powerEnemTargetEl);
                }
            } else if(powerEnemType === 'toggle') {
                if($(powerEnemTargetEl)[0]){
                    console.info('Toggle ok :)');
                    var powerToggle = powerThisEl.attr('data-toggle-name'),
                        powerToggleId = '[data-toggle-id='+ powerToggle +']',
                        powerToggleTarget = powerEnemTargetEl,
                        dataToggle = {
                            targetId : powerToggleId,
                            targetActive : powerToggleTarget,
                        };
//                    console.info(powerToggleId);
//                    console.info(powerEnemType + ' and target is : ' + powerEnemTargetEl);
                    if($(powerEnemTargetEl).is(':hidden')) {
//                        powerToggle('on', dataToggle);
                        $(dataToggle.targetId).hide();
                        $(dataToggle.targetId).removeClass('toggle-active');
                        $(dataToggle.targetActive).slideDown(700);
                        $(dataToggle.targetActive).addClass('toggle-active');
                    } else {
//                        powerToggle('off', dataToggle);
                        $(dataToggle.targetId).slideUp(700);
                        $(dataToggle.targetId).removeClass('toggle-active');
                    }
//                    powerToggle('on', dataPower);
                } else {
                    console.error('Sorry, check your data-enem-target. Your data-enem-target is : ' + powerEnemTargetEl);
                }
            } else if(powerEnemType === 'toggledesc') {
                var enemElPowerParent = powerThisEl.parent(),
                    enemElTargetPowerContent = enemElPowerParent.siblings('.enem-wrapper-content-toggle-desc'),
                    enemElTargetPowerIconDesc = powerThisEl.children('.enem-left').children('i'),
                    enemElPowerIconDesc = $('.enem-icon-toggle-desc');
                
                /** Toggle Desc Behavior **/
                function enemPowerFaqBehaviorOff() {
//                    enemElTargetPowerContent.removeClass('enemPowerActive');
                    enemElPowerIconDesc.removeClass('fa-caret-down');
                    enemElPowerIconDesc.addClass('fa-caret-right');
                    $('.enem-wrapper-content-toggle-desc').slideUp();
                }
                function enemPowerFaqBehaviorOn() {
                    enemElTargetPowerIconDesc.removeClass('fa-caret-right');
                    enemElTargetPowerIconDesc.addClass('fa-caret-down');
//                    enemElTargetPowerContent.addClass('enemPowerActive');
                    enemElTargetPowerContent.slideDown();
                }
                function enemPowerFaqBehavior() {
                    enemPowerFaqBehaviorOff();
                    enemPowerFaqBehaviorOn();
                }
                /********************************/
                
                if(enemElTargetPowerContent.is(':hidden')) {
                    enemPowerFaqBehavior();
                } else {
                    enemPowerFaqBehaviorOff();
                }
                
            } else if(powerEnemType === 'dropdown') {
                if($(powerEnemTargetEl)[0]){
                    var powerDropdown = powerThisEl.attr('data-dropdown-name'),
                        powerDropdownId = '[data-dropdown-id='+ powerDropdown +']',
                        powerDropdownTarget = powerEnemTargetEl,
                        powerDropdownAnimate = powerThisEl.attr('data-dropdown-animate'),
                        powerDropdownIcon = powerThisEl.children('.enem-arrow-select').children('i'),
                        dataDropdown = {
                            targetId : powerDropdownId,
                            targetActive : powerDropdownTarget,
                        };
                    console.info('dropdown ok :)');    
                    console.info('Your target is : ' + powerEnemTargetEl + ' and your dropdown name is : ' + powerDropdown);
                    
                    if($(powerEnemTargetEl).is(':hidden')) {
                        $(dataDropdown.targetActive).show();
                        powerThisEl.attr('data-dropdown-status','show');
                        powerDropdownIcon.removeClass('fa-angle-down');
                        powerDropdownIcon.addClass('fa-close');
                    } else {
                        $(dataDropdown.targetId).hide();
                        powerThisEl.attr('data-dropdown-status','hidden');
                        powerDropdownIcon.removeClass('fa-close');
                        powerDropdownIcon.addClass('fa-angle-down');
                    }
                } else {
                    console.error('Sorry, check your data-enem-target. Your data-enem-target is : ' + powerEnemTargetEl);
                }
            } else {
                console.error('Sorry, check your data-enem. Your data-enem is : ' + powerEnemType);
            }
        });
    }
    
    var powerSearch = function(elPower, dataSearch) {
        
        var enemSearchEl = $('.enem-search'),
            enemSearchVisible = enemSearchEl.attr('data-enem-visible'),
            enemIconSearch = $('.enem-search-icon'),
            enemTargetSearchEl = $('.enem-ahu-wrapper-searchin');
        
        var dataDefault = {
//                elPower: 'OFF',
                elSearch: enemSearchEl,
                elIconSearch: enemIconSearch,
                elTarget: enemTargetSearchEl,
            };
        
        if(elPower === 'ON') {
            if(dataSearch) {
                dataSearch.elIconSearch.removeClass('fa-search');
                dataSearch.elIconSearch.addClass('fa-close');

                dataSearch.elTarget.addClass('search-active');
            } else {
                dataDefault.elIconSearch.removeClass('fa-search');
                dataDefault.elIconSearch.addClass('fa-close');

                dataDefault.elTarget.addClass('search-active');
            }

            $('.enem-search').attr('data-enem-visible', 'show');
        } else if(elPower === 'OFF') {
            if(dataSearch) {
                dataSearch.elIconSearch.removeClass('fa-close');
                dataSearch.elIconSearch.addClass('fa-search');

                dataSearch.elTarget.removeClass('search-active');
            } else {
                dataDefault.elIconSearch.removeClass('fa-close');
                dataDefault.elIconSearch.addClass('fa-search');

                dataDefault.elTarget.removeClass('search-active');
            }

            $('.enem-search').attr('data-enem-visible', 'hidden');
        }
    }
    
    var powerMenuMobile = function(enemMenuPower, dataMenu) {
        
        // For Menu
        var enemThisBtnMenuEl = $('.enem-menu'),
            enemStatusBtn = enemThisBtnMenuEl.attr('data-menu'),
            enemBodyEl = $('body'),
            enemMenuEl = $('.enem-ahu-menu-side');

        var dataDefault = {
            enemThisBtnMenuEl: enemThisBtnMenuEl,
            enemBodyEl: enemBodyEl,
            enemMenuEl: enemMenuEl,
        };
        
        if(enemMenuPower === 'ON') {

            if(dataMenu) {
                dataMenu.enemBodyEl.addClass('enem-ahu-navbar-active');

                setTimeout(function(){
                    dataMenu.enemThisBtnMenuEl.addClass('is-active');
                    dataMenu.enemMenuEl.animate({
                        left : '0px',
                    },700);
                    dataMenu.enemBodyEl.animate({
                        left : '270px',
                    },700);
                    $('.enem-ahu-wrapper-logo.mobile').fadeOut();
                },5);
                dataMenu.enemThisBtnMenuEl.attr('data-menu','show');
            } else {
                dataDefault.enemBodyEl.addClass('enem-ahu-navbar-active');

                setTimeout(function(){
                    dataDefault.enemThisBtnMenuEl.addClass('is-active');
                    dataDefault.enemMenuEl.animate({
                        left : '0px',
                    },700);
                    dataDefault.enemBodyEl.animate({
                        left : '270px',
                    },700);
                    $('.enem-ahu-wrapper-logo.mobile').fadeOut();
                },5);
                dataDefault.enemThisBtnMenuEl.attr('data-menu','show');
            }

        } else if(enemMenuPower === 'OFF') {

            if(dataMenu) {
                var enemAnimateFinish = false;

                dataMenu.enemThisBtnMenuEl.removeClass('is-active');
                dataMenu.enemThisBtnMenuEl.attr('data-menu','hidden');
                dataMenu.enemMenuEl.animate({
                    left : '-270px',
                },700);
                dataMenu.enemBodyEl.animate({
                    left : '0px',
                },700);

                $('.enem-ahu-wrapper-logo.mobile').fadeIn();

                setTimeout(function(){
                    var enemBodyOffset = dataMenu.enemBodyEl.offset().left;
                    if(enemBodyOffset === 0) {    
                        dataMenu.enemBodyEl.removeClass('enem-ahu-navbar-active');    
                    } 
                },710);
            } else {
                var enemAnimateFinish = false;

                dataDefault.enemThisBtnMenuEl.removeClass('is-active');
                dataDefault.enemThisBtnMenuEl.attr('data-menu','hidden');
                dataDefault.enemMenuEl.animate({
                    left : '-270px',
                },700);
                dataDefault.enemBodyEl.animate({
                    left : '0px',
                },700);

                $('.enem-ahu-wrapper-logo.mobile').fadeIn();

                setTimeout(function(){
                    var enemBodyOffset = dataDefault.enemBodyEl.offset().left;
                    if(enemBodyOffset === 0) {    
                        dataDefault.enemBodyEl.removeClass('enem-ahu-navbar-active');    
                    } 
                },710);
            }

        } else {
            console.error('Check your menu power. Your power is: ' + dataMenu.enemMenuPower);
        }
    }
    
    var powerClick = function(typeClick, dataOption, clbk) {
        if(typeClick === 'getddvalue') {
            // Buat ngambil value dari dropdown
            $(document).on('click', '.enem-list-dropdown li a', function(){
                var enemThisEl = $(this),
                    enemThisTxt = enemThisEl.text(),
                    enemThisVal = enemThisEl.attr('data-dropdown-value'),
                    enemParentTarget = enemThisEl.parent().parent().parent(),
                    enemBtnTargetAttr = enemParentTarget.attr('data-dropdown-id'),
                    enemBtnTarget = $('[data-dropdown-name='+ enemBtnTargetAttr +']'),
                    enemBtnTargetFilter = enemBtnTarget.children('.enem-filter-select'),
                    enemBtnTargetIcon = enemBtnTarget.children('.enem-arrow-select').children('i');

                    $('.enem-list-dropdown li a').removeClass('selected');
                    enemBtnTarget.attr('dropdown-value', enemThisVal);
                    enemBtnTargetFilter.html(enemThisTxt);
                    enemParentTarget.hide();
                    enemBtnTarget.attr('data-dropdown-status','hidden');
                    enemBtnTargetIcon.removeClass('fa-close');
                    enemBtnTargetIcon.addClass('fa-angle-down');
                    enemThisEl.addClass('selected');

                    // alert('adsasdasdasd');
            });
        } else if(typeClick === 'activeBijiBuled') {
            // Buat aktifin biji bulet, sama ambil value nya
//            console.info(dataOption);
            if(dataOption.enemBiji) {
                var enemTypeof = powerGetType(dataOption).enemTypeof;
                if(enemTypeof === 'object') {
                    
                    var enemTypeof = powerGetType(dataOption.enemBiji).enemTypeof;
                    if(enemTypeof === 'object') {
                        
                        $('[data-enem-buled]').on('click', function(){
                            var enemThisEl = $(this),
                                enemThisElKey = enemThisEl.attr('data-enem-buled'),
                                enemThisElChildren = enemThisEl.children('.enem-ahu-box-icon-'+ dataOption.enemBiji.enemBijiPage),
                                enemElActive = $('.enem-ahu-box-icon-'+ dataOption.enemBiji.enemBijiPage +'.enem-ahu-tab-active'),
                                enemElTitle = enemThisEl.children('.enem-ahu-box-title-menu-' + dataOption.enemBiji.enemBijiPage),
                                enemTxtTitle = enemElTitle.text(),
                                enemElPlaceTitle = $('.enem-ahu-box-tab-title');
                            
//                            console.info(dataOption.enemBiji.enemBijiPage);
                            
                            if(enemThisElKey === 'buledbuled'){
                                enemElActive.removeClass('enem-ahu-tab-active');
                                enemThisElChildren.addClass('enem-ahu-tab-active');
                            
                                if(enemElPlaceTitle[0]) {
                                    enemElPlaceTitle.html(enemTxtTitle);
                                    if(dataOption.enemBiji.enemBijiSuccess) {
                                        powerRunCallback(dataOption.enemBiji.enemBijiSuccess);
                                    }
                                } else {
                                    console.error('Sorry, not found place for title :)');
                                }
                                
                            } else {
                                console.error('Sorry, You must say "buledbuled" for actived this :)');
                            }
                        });
                        
                    } else {
                        console.error('Sorry, enembiji must be object. Your data is : ' + enemTypeof);
                    }
                    
                } else {
                    console.error('Sorry, dataOption must be object. Your data is : ' + enemTypeof);
                }
            } else {
                console.error('Sorry, error active Bijibuled :)');
            }
//            $(document).on('click', '.enem-power', function(){
//                var en = $(this),
//                    em = en.children('.enem-ahu-box-icon-organisasi'),
//                    lo = $('.enem-ahu-box-icon-organisasi.enem-ahu-tab-active'),
//                    ve = en.children('.enem-ahu-box-title-menu-organisasi'),
//                    ka = ve.text(),
//                    pe = $('.enem-ahu-box-tab-title');
//                
//                    lo.removeClass('enem-ahu-tab-active');
//                    em.addClass('enem-ahu-tab-active');
//                    
////                    console.info(ka);
//                    
//                    if(pe[0]) {
//                        pe.html(ka);
//                    }
//
//            });
        } else if(typeClick === 'ytPlayer') {
            
            if(dataOption.enemYtbPlayer) {
                var enemTypeof = powerGetType(dataOption).enemTypeof;
                if(enemTypeof === 'object') {
                    
                    var enemTypeof = powerGetType(dataOption.enemYtbPlayer).enemTypeof;
                    if(enemTypeof === 'object') {
                        
                        $(dataOption.enemYtbPlayer.elSelector).on('click', function(){
                            console.info('ytPlayer ok :)');
                            console.info(dataOption);
                            
                            if($(dataOption.enemYtbPlayer.elVideoLike)[0] && $(dataOption.enemYtbPlayer.elVideoViewer)[0] && $(dataOption.enemYtbPlayer.elVideoTitle)[0]) {
                                var elSelector = $(this),
                                    elVideoTitle = elSelector.find(dataOption.enemYtbPlayer.elVideoTitle),
                                    videoTitleTxt = elVideoTitle.text(),
                                    elVideoLike = elSelector.find(dataOption.enemYtbPlayer.elVideoLike),
                                    videoLikeTxt = elVideoLike.text(),
                                    elVideoViewer = elSelector.find(dataOption.enemYtbPlayer.elVideoViewer),
                                    videoViewerTxt = elVideoViewer.text(),
                                    elPlaceTitle = $(dataOption.enemYtbPlayer.elPlaceTitle),
                                    elPlaceLike = $(dataOption.enemYtbPlayer.elPlaceLike),
                                    elPlaceViewer = $(dataOption.enemYtbPlayer.elPlaceViewer),
                                    elYoutubeId = elSelector.attr('data-enem-ytid'),
                                    elFrame = $(dataOption.enemYtbPlayer.elFrame);
                                
                                elPlaceTitle.html(videoTitleTxt);
                                elPlaceLike.html(videoLikeTxt);
                                elPlaceViewer.html(videoViewerTxt);
                                
                                if(dataOption.enemYtbPlayer.elFrame[0]) {
                                    if(elYoutubeId) {
                                        var enemYtVideoLink = 'http://www.youtube.com/embed/'+ elYoutubeId +'?enablejsapi=1&wmode=opaque';
                                        //console.info(enemLikeVideo);
                                        elFrame.attr('src', enemYtVideoLink);
                                    }
                                } else {
                                    console.error('Sorry, not found elFrame. Your elFrame is : ' + dataOption.enemYtbPlayer.elFrame);
                                }

                                console.info('Video like : ' + videoLikeTxt + ' and ' + videoViewerTxt + ' and ' + videoTitleTxt);

                                if(dataOption.enemYtbPlayer.success) {
                                    powerRunCallback(dataOption.enemYtbPlayer.success);
                                }
                                
                            } else {
                                console.error('Sorry, not found element elVideoLike and elVideoViewer and elVideoTitle');
                            }
                            
                        });
                        
                    } else {
                        console.error('Sorry, enemYtbPlayer must be object. Your enemYtbPlayer is : ' + dataOption.enemYtbPlayer);
                    }
                    
                } else {
                    console.error('Sorry, dataOption must be object. Your dataOption is : ' + dataOption);
                }
            } else {
                console.error('Sorry, not found ytPlayer key');
            }
            
//            var enemYoutubeId = powerThisEl.attr('data-enem-ytid');
//                console.info(dataOption);
//                console.info('ytplayer ok :)');
//                    if(enemYoutubeId) {
//                        var enemYtVideoLink = 'http://www.youtube.com/embed/'+ enemYoutubeId +'?enablejsapi=1&wmode=opaque',
//                            enemTitleVideo = powerThisEl.find('.enem-ahu-box-title-thumbnail').text(),
//                            enemLikeVideo = powerThisEl.find('.like_video').text(),
//                            enemViewerVideo = powerThisEl.find('.viewer_video').text();
//                        //console.info(enemLikeVideo);
//                        $('.enem_ahu_box_title_bigplayer_video').html(enemTitleVideo);
//                        $('.enem_ahu_box_like_video').html(enemLikeVideo);
//                        $('.enem_ahu_box_viewer_video').html(enemViewerVideo)
//                        $('#enemBigPlayer').attr('src', enemYtVideoLink);
//                    }
            
        } else if(typeClick === 'menuMobile') {
            
//            function enemMenuMobile(dataMenu, enemMenuPower) {
//                if(enemMenuPower === 'ON') {
//
//                    dataMenu.enemBodyEl.addClass('enem-ahu-navbar-active');
//                    
//                    setTimeout(function(){
//                        dataMenu.enemThisBtnMenuEl.addClass('is-active');
//                        dataMenu.enemMenuEl.animate({
//                            left : '0px',
//                        },700);
//                        dataMenu.enemBodyEl.animate({
//                            left : '270px',
//                        },700);
//                        $('.enem-ahu-wrapper-logo.mobile').fadeOut();
//                    },5);
//                    dataMenu.enemThisBtnMenuEl.attr('data-menu','show');
//
//                } else if(enemMenuPower === 'OFF') {
//
//                    var enemAnimateFinish = false;
//
//                    dataMenu.enemThisBtnMenuEl.removeClass('is-active');
//                    dataMenu.enemThisBtnMenuEl.attr('data-menu','hidden');
//                    dataMenu.enemMenuEl.animate({
//                        left : '-270px',
//                    },700);
//                    dataMenu.enemBodyEl.animate({
//                        left : '0px',
//                    },700);
//                    
//                    $('.enem-ahu-wrapper-logo.mobile').fadeIn();
//
//                    setTimeout(function(){
//                        var enemBodyOffset = dataMenu.enemBodyEl.offset().left;
//                        if(enemBodyOffset === 0) {    
//                            dataMenu.enemBodyEl.removeClass('enem-ahu-navbar-active');    
//                        } 
//                    },710);
//
//                } else {
//                    console.error('Check your menu power. Your power is: ' + dataMenu.enemMenuPower);
//                }
//            }
            
            $(window).on('resize',function(){
                var enemWindow = $(this),
                    enemWindowWidth = enemWindow.width();
                
                var enemThisBtnMenuEl = $('[data-menu]'),
                    enemStatusBtn = enemThisBtnMenuEl.attr('data-menu'),
                    enemBodyEl = $('body'),
                    enemMenuEl = $('.enem-ahu-menu-side');

                var dataMenu = {
                    enemThisBtnMenuEl: enemThisBtnMenuEl,
                    enemBodyEl: enemBodyEl,
                    enemMenuEl: enemMenuEl,
                };
//                alert('asdadasdasdasd');
                if(enemWindowWidth >= 1200 - 1) {
//                    alert('lebih dari 1024');
                    powerMenuMobile('OFF', dataMenu);
                }
            });
            
            $(document).on('click','.enem-menu', function(){
                // For Menu
                var enemThisBtnMenuEl = $(this),
                    enemStatusBtn = enemThisBtnMenuEl.attr('data-menu'),
                    enemBodyEl = $('body'),
                    enemMenuEl = $('.enem-ahu-menu-side');

                var dataMenu = {
                    enemThisBtnMenuEl: enemThisBtnMenuEl,
                    enemBodyEl: enemBodyEl,
                    enemMenuEl: enemMenuEl,
                };
                
                // For Search Hide if menu Show
                var enemSearchEl = $('.enem-search'),
                    enemSearchVisible = enemSearchEl.attr('data-enem-visible'),
                    enemIconSearch = $('.enem-search-icon'),
                    enemTargetSearchEl = $('.enem-ahu-wrapper-searchin');

                if(enemStatusBtn === 'hidden') {
                    powerMenuMobile('ON', dataMenu);
                    
                    var dataSearch = {
//                        elPower: 'OFF',
                        elSearch: enemSearchEl,
                        elIconSearch: enemIconSearch,
                        elTarget: enemTargetSearchEl,
                    };
//                    powerClick('searchPower').searchPower(dataSearch);
                    powerSearch('OFF', dataSearch);
                } else if(enemStatusBtn === 'show') {
                    powerMenuMobile('OFF', dataMenu);
                } else {
                    console.error('Check your status menu. Your status menu is: ' + enemStatusBtn);
                }
            });

            
        } else if(typeClick === 'searchPower') {
//            function searchPower(dataSearch) {
//                if(dataSearch.elPower === 'ON') {
//                    dataSearch.elIconSearch.removeClass('fa-search');
//                    dataSearch.elIconSearch.addClass('fa-close');
//                    
//                    dataSearch.elTarget.addClass('search-active');
//                    
//                    $('.enem-search').attr('data-enem-visible', 'show');
//                } else if(dataSearch.elPower === 'OFF') {
//                    dataSearch.elIconSearch.removeClass('fa-close');
//                    dataSearch.elIconSearch.addClass('fa-search');
//                    
//                    dataSearch.elTarget.removeClass('search-active');
//                    
//                    $('.enem-search').attr('data-enem-visible', 'hidden');
//                }
//                
//            }
//            
//            function initSearchPower(dataSp) {
//                searchPower(dataSp);
//            }
            
            $(document).on('click', '.enem-search', function(){
                var enemThisEl = $(this),
                    enemSearchVisible = enemThisEl.attr('data-enem-visible'),
                    enemSearchEl = $('.enem-search'),
                    enemIconSearch = $('.enem-search-icon'),
                    enemTargetSearchEl = $('.enem-ahu-wrapper-searchin');
                
                if(enemSearchVisible === 'hidden') {
                    var dataPower = {
//                        elPower: 'ON',
                        elSearch: enemSearchEl,
                        elIconSearch: enemIconSearch,
                        elTarget: enemTargetSearchEl,
                    }
//                    searchPower(dataPower);
                    powerSearch('ON', dataPower);
                } else if(enemSearchVisible === 'show') {
                    var dataPower = {
//                        elPower: 'OFF',
                        elSearch: enemSearchEl,
                        elIconSearch: enemIconSearch,
                        elTarget: enemTargetSearchEl,
                    }
//                    searchPower(dataPower);
                    powerSearch('OFF', dataPower);
                } else {
                    console.error('Sorry not found. error searchPower');
                }
            });
            
//            return {searchPower: initSearchPower};
            
        } else {
            console.error('Sorry, powerClick error :(');
        }
    }
    
    var powerHash = function(enemHash, activeClass, clbk) {
        if(enemHash) {
            if($('[data-enem-hash='+ enemHash +']')[0]) {
                if(activeClass) {
                    var enemTargetEl = $('[data-enem-hash='+ enemHash +']'),
                        enemActiveClassHash = $('.' + activeClass);
                    enemActiveClassHash.removeClass(activeClass);
                    enemTargetEl.addClass(activeClass);
                    if(clbk) {
                        powerRunCallback(clbk);
                    }
                }
            } else {
                console.error('Sorry, check your hash element. your hash element is : data-enem-hash=' + enemHash);
            }
            console.info('Hash ok :)');
        } else {
            console.error('Sorry, check your hash. your hash is : ' + enemHash);
        }
    }
    
    var powerShowModal = function(dataModal) {
        var enemModalTitleEl = $(dataModal.selector).find('.modal-title'),
            enemModalContentEl = $(dataModal.selector).find('.modal-body'),
            enemModalContainerEl = $(dataModal.selector).find('.modal-dialog');
        
        if(dataModal.power === 'on') {
            if(dataModal.modalWidth) {
                enemModalContainerEl.css({
                    'width' : dataModal.modalWidth,
                });
            }
            
            if(dataModal.modalTitle) {
                enemModalTitleEl.html(dataModal.modalTitle);
            }
            if(dataModal.modalContent) {
                enemModalContentEl.html(dataModal.modalContent);
            }
            
            if(dataModal.beforeOn) {
                powerRunCallback(dataModal.beforeOn);
            }
            
            $(dataModal.selector).modal('show');
        } else if(dataModal.power === 'off') {
            $(dataModal.selector).modal('hide');
        }
    }
    
    var powerNetral = function(dataNetral) {
        function cleanDistrubingStyle() {
            console.info(dataNetral.enemCleanDistrubing);
            $(dataNetral.enemCleanDistrubing.cleanEl).removeAttr('style');
        }
        function initClean() {
            if(dataNetral.enemCleanDistrubing) {
                var enemTypeof = powerGetType(dataNetral.enemCleanDistrubing).enemTypeof;
                if(enemTypeof === 'object') {
                    if($(dataNetral.enemCleanDistrubing.cleanEl)[0]) {
                        if(dataNetral.enemCleanDistrubing.cleanType === 'styleInline') {
                            cleanDistrubingStyle();
                            if(dataNetral.enemCleanDistrubing.cleanSuccess) {
                                powerRunCallback(dataNetral.enemCleanDistrubing.cleanSuccess);
                            }
                        } else {
                            console.error('Sorry, not found cleanType. Your cleanType is : ' + dataNetral.enemCleanDistrubing.cleanType);
                        }
                    } else {
                        console.error('Sorry, not found element cleanEl');
                    }
                } else {
                    console.error('Sorry, enemCleanDistrubing must be object. Your enemCleanDistrubing is : ' + enemTypeof);
                }
                
            } else {
                console.error('Sorry, you dont have enemCleanDistrubing');
            }
        }
        
        initClean();
    }
    
    var powerVex = function(dataVex) {
        if(dataVex) {
            var enemTypeof = powerGetType(dataVex).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataVex.vexMessages) {
                    if(dataVex.beforeLoad) {
                        var enemTypeof = powerGetType(dataVex.beforeLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.beforeLoad);
                        }
                    }
                    vex.defaultOptions.className = 'vex-theme-os';
                    vex.dialog.alert(dataVex.vexMessages);
                    if(dataVex.afterLoad) {
                        var enemTypeof = powerGetType(dataVex.afterLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.afterLoad);
                        }
                    }
                } else {
                    console.error('Sorry, not found vexMessages');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataVex);
            }
            
        } else {
            console.error('Sorry, not found dataVex');
        }
    }
    
    var powerModernizr = function(dataModernizr) {
        if(Modernizr.dataModernizr.usage) {
            //do something if support
            if(dataModernizr.clbkSupport) {
                powerRunCallback(dataModernizr.clbkSupport);
            }
        } else {
            //do something if not support
            if(dataModernizr.clbkNotSupport) {
                powerRunCallback(dataModernizr.clbkNotSupport);
            }
        }
    }
    
    var powerMaps = function(dataMaps) {
        if(dataMaps) {
            var enemTypeof = powerGetType(dataMaps).enemTypeof;
            if(enemTypeof === 'object') {
                $(dataMaps.selectorEl).on('click', function(){
                    var map = new google.maps.Map(document.getElementById(dataMaps.targetIdEl), dataMaps.options);
                    var image = new google.maps.MarkerImage(dataMaps.markerImg,
                        new google.maps.Size(129, 42),
                        new google.maps.Point(0,0),
                        new google.maps.Point(40, 12)
                    );
                    // Add Marker
                    var marker1 = new google.maps.Marker({
                        position: dataMaps.latlng,
                        map: map,
                        icon: image
                    });
                    google.maps.event.addListener(marker1, 'click', function() {
                        infowindow1.open(map, marker1);
                    });
                });
            } else {
                console.error('Data must be object. Your data is: ' + dataMaps);
            }
        } else {
            console.error('Sorry, not found dataMaps');
        }
    }
    
    var powerToggleEz = function(dataToggleEz) {
        if(dataToggleEz) {
            var enemTypeof = powerGetType(dataToggleEz).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataToggleEz.selectorEl[0] && dataToggleEz.targetEl[0]) {
                    $(document).on('click', dataToggleEz.selectorEl, function(){

                        if(dataToggleEz.beforeLoad) {
                            powerRunCallback(dataToggleEz.beforeLoad);
                        }

                        if(dataToggleEz.speedToggle) {
                            $(dataToggleEz.targetEl).toggle(dataToggleEz.speedToggle);
                        } else {
                            $(dataToggleEz.targetEl).toggle();
                        }

                        if(dataToggleEz.afterLoad) {
                            powerRunCallback(dataToggleEz.afterLoad);
                        }
                    });
                } else {
                    console.error('Sorry, nor found selectorEl and targetEl');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataToggleEz);
            }
        } else {
            console.error('Sorry, not found dataToggleEz');
        }
    }
    
    var powerCss = function(dataCss) {
        if(dataCss) {
            var enemTypeof = powerGetType(dataCss).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataCss.targetEl[0]) {
                    var enemTypeof = powerGetType(dataCss.css).enemTypeof;
                    if(enemTypeof === 'object') {
                        $(dataCss.targetEl).css(dataCss.css);
                    } else {
                        console.error('Data must be object. Your css is: ' + dataCss);
                    }
                } else {
                    console.error('Sorry, not found targetEl');
                }
            } else {
                console.error('Data must be object. Your dataCss is: ' + dataCss);
            }
        } else {
            console.error('Sorry, not found dataCss');
        }
    }
    
    var powerDocs = function(typeDocs) {
        if(typeDocs === 1) {
            var enemBody = $('body'),
                enemConDocs = $('.enem-container-docs'),
                enemCloseDocs = $('.enem-close-docs');
            
            var enemTemplate =  '<section class="enem-container-docs">' +
                                    '<div class="enem-close-docs">' +
                                        '&times;' +
                                    '</div>' +
                                    '<div>' +
                                        'lalalalala' +
                                    '</div>' +
                                '</section>';
            console.info(':)');
            
            function runPowerDocs() {
                enemGetWindowTemplate();
                enemTestOk();
                enemExitDocs();
            }
            function enemGetWindowTemplate() {
                enemBody.append(enemTemplate,function(){
                    enemConDocs.fadeIn();
                });
            }
            function enemTestOk(wow) {
                if(wow === 'enem') {
                    console.info('uhuy');
                }
            }
            function enemExitDocs() {
                enemCloseDocs.on('click', function(){
                    enemConDocs.fadeOut();
                });
            }
            
            runPowerDocs();
        } else {
            console.info(':(');
        }
    }
    

	return {
		uhuy: uhuy,
        bismillah: bismillah,
        btnClick: btnClick,
        smoothScroll: smoothScroll,
        normalSlide: normalSlide,
        customSlide: customSlide,
        detectImage: detectImage,
        powerEnem: powerEnem,
        swiperSlider: swiperSlider,
        swiperSlider2: swiperSlider2,
        swiperSlider3: swiperSlider3,
        swiperSliderVideo: swiperSliderVideo,
        swiperSliderBanner: swiperSliderBanner,
        swiperSliderTab: swiperSliderTab,
        enemSecret: enemSecret,
        enemDownload: enemDownload,
        enemVideoHome: enemVideoHome,
        powerHashEnem: powerHashEnem,
        powerModal: powerModal,
        powerModalFix: powerModalFix,
        powerVoting: powerVoting,
        powerMenu: powerMenu,
        powerScreen: powerScreen,
        powerRatio: powerRatio,
        powerSpeed: powerSpeed,
        powerLoader: powerLoader,
        powerSliderTitle: powerSliderTitle,
        powerSlider: powerSlider,
        powerEnemEx: powerEnemEx,
        powerSearch: powerSearch,
        powerMenuMobile: powerMenuMobile,
        powerClick: powerClick,
        powerHash: powerHash,
        powerNetral: powerNetral,
        powerVex: powerVex,
        powerShowModal: powerShowModal,
        powerModernizr: powerModernizr,
        powerMaps: powerMaps,
        powerToggleEz: powerToggleEz,
        powerCss: powerCss,
        powerRunCallback: powerRunCallback,
        powerDocs: powerDocs,
        progressBar: progressBar,
	};

})(jQuery);