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
    excerpt: "The website that hosts everything you need to know about me. <br> <img id=lancersbucket_test> <br><br> [Live Demo](https://lancersbucket.github.io){:target='_blank' .btn .btn--primary .btn--large} [Source Code](https://github.com/LancersBucket/lancersbucket.github.io){:target='_blank' .btn .btn--primary .btn--large}"
  - image_path: /assets/images/bio/bio.jpg
    alt: "placeholder image 3"
    title: "Sulfur"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
title: Previous Projects
---

{% include feature_row %}

<script type="text/javascript">
// Adapted from https://stackoverflow.com/a/4814918
function set_test(name,status){
    var el=document.getElementById(name+'_test');
    el.src=status?'https://img.shields.io/badge/status-up-green:':'https://img.shields.io/badge/status-down-red';
}
(function(){
    var gmail_test=document.getElementById('lancersbucket_test');
    gmail_test.innerHTML='Checking...';
    var img=document.createElement('img');
    img.src='https://lancersbucket.github.io/assets/images/bio/bio.jpg';
    img.onload=function(){set_test('lancersbucket',1)};
    img.onerror=function(){set_test('lancersbucket',0)};
})();
</script>