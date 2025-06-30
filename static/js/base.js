/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

// #############################################################################
// NAMESPACES
/**
 * @module Cl
 */
// istanbul ignore next
var Cl = window.Cl || {};
/* global outdatedBrowser */

// #############################################################################
// BASE
// istanbul ignore next
(function($) {
    'use strict';

    // shorthand for invoking jQuery(document).ready
    $(function() {
        // removes noscript form body and adds print-js
        if (window.Cl && window.Cl.Utils) {
            Cl.Utils._document();
        }

        // DOCS: https://github.com/burocratik/outdated-browser
        if (window.outdatedBrowser) {
            outdatedBrowser({
                'languagePath': '',
                'lowerThan': 'boxShadow'
            });
        }

        // Paralax banner scrolling
        $(document).scroll(function() {
            var scrollPos = $(this).scrollTop();
            /*$('.feature-content').css({
                'top': 80 + (scrollPos / 3) + 'px',
                'opacity': 1 - (scrollPos / 370)
            });*/
            $('.feature-visual > img').css({
                'top': (-scrollPos / 2) + 'px'
            });
            $('.feature-visual').css({
                'margin-bottom': '-' + (scrollPos / 2) + 'px'
            });
        });

        // Carousel muti slide
        $('.carousel-style-multislide .item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });

        // dedicaces circle hover transition
        $('.circle-title').on('click', function(e) {
            e.preventDefault();
            $(this).prev('.circle').find('figcaption').toggleClass('hover');
        });
        // hamburger menu toggle class
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('collapsed');
        });

        // back to top smooth
        // Select all links with hashes
        $('a[href="#page-top"]').click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
        });
    });

})(jQuery);