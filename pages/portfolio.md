---
layout: single
classes: ultrawide
permalink: /projects/
author_profile: false
feature_row:
  - image_path: "https://img.itch.zone/aW1nLzEyMTc0NTIzLnBuZw==/315x250%23c/TzYBG0.png" #/assets/images/projects/ratandthehat.png
    alt: "The Rat And The Hat"
    title: "The Rat And The Hat"
    excerpt: "A game made for [Go Godot Jam 4](https://itch.io/jam/go-godot-jam-4) on itch.io <br> Lead Programmer <br><br> [Live Demo](https://itch.io/jam/go-godot-jam-4/rate/2070002){:target='_blank' .btn .btn--primary .btn--large} [Source Code](https://github.com/LancersBucket/GodotGame){:target='_blank' .btn .btn--primary .btn--large}"
  - image_path: /assets/images/bio/bio.jpg
    alt: "Shuffle--"
    title: "Shuffle--"
    excerpt: "A simple music playing application designed to purely shuffle your music. <br><br> [Source Code](https://github.com/LancersBucket/Shuffle--){:target='_blank' .btn .btn--primary .btn--large}"
  - image_path: /assets/images/bio/bio.jpg
    alt: "lancersbucket.github.io"
    title: "lancersbucket.github.io"
    excerpt: "The website that hosts everything you need to know about me. <img id=lancersbucket_test> <br><br> [Live Demo](https://lancersbucket.github.io){:target='_blank' .btn .btn--primary .btn--large} [Source Code](https://github.com/LancersBucket/lancersbucket.github.io){:target='_blank' .btn .btn--primary .btn--large}"
  - image_path: /assets/images/bio/bio.jpg
    alt: "placeholder image 3"
    title: "Sulfur"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
title: Previous Projects
---

{% include feature_row %}

<script type="text/javascript">
/* Adapted from https://stackoverflow.com/a/4814918 */
// Sets the img tag source to either a sheild.io up or down badge depending on the status of lancersbucket.github.io
function set_test(name,status){
  var el=document.getElementById(name+'_test');
  el.src=status?'https://img.shields.io/badge/lancersbucket.github.io_status-up-green:':'https://img.shields.io/badge/lancersbucket.github.io_status-down-red';
}
// Loads an image from lancersbucket.github.io to see if it is accessable
(function(){
  // Create an element to load the image
  var img=document.createElement('img');
  img.src='https://lancersbucket.github.io/assets/images/bio/bio.jpg';
  // If the image loads, set the status to 1 (up)
  img.onload=function(){set_test('lancersbucket',1)};
  // If the image doesn't load, set the status to 0 (down)
  img.onerror=function(){set_test('lancersbucket',0)};
})();
</script>