let modo1=document.getElementById("colorpickopc1");
let modo2=document.getElementById("colorpickopc2");
let modo3=document.getElementById("colorpickopc3");
let body=document.body;


modo1.addEventListener("click",function(){
    body.classList.remove("green_mode")
    body.classList.remove("blue_mode")
    modo2.classList.remove("colorpickopc2_click")
    modo1.classList.remove("colorpickopc1_click")
    modo3.classList.remove("colorpickopc3_click")
    document.getElementById("nav-logo").src="./img/Vector10.png";
    document.getElementById("footer-logo").src="./img/Vector10.png";
})
modo2.addEventListener("click",function(){
    body.classList.add("green_mode")
    body.classList.remove("blue_mode")
    modo2.classList.add("colorpickopc2_click")
    modo1.classList.add("colorpickopc1_click")
    modo3.classList.remove("colorpickopc3_click")
    document.getElementById("nav-logo").src="./img/Vector11.png";
    document.getElementById("footer-logo").src="./img/Vector11.png";
    
})
modo3.addEventListener("click",function(){
    body.classList.add("blue_mode")
    body.classList.remove("green_mode")
    modo3.classList.add("colorpickopc3_click")
    modo1.classList.add("colorpickopc1_click")
    modo2.classList.remove("colorpickopc2_click")
    document.getElementById("nav-logo").src="./img/Vector12.png";
    document.getElementById("footer-logo").src="./img/Vector12.png";
})


/*Animation*/

gsap.registerPlugin(ScrollTrigger);


let linea = gsap.from('.inicio-fondo-imagen',{
    duration: 2,
    y: -1000,
})
let titulo = gsap.from('.inicio-titulo',{
    duration: 2,
    y: -1000,
})
let barra = gsap.from('.navbar',{
    delay:2,
    duration: 3,    
    opacity:0,
});
let redbar = gsap.from('.redbar',{
    delay:2,
    duration: 2,
    x: -100,
})
let colorpickbar1 = gsap.from('.colorpickbar-rec1',{
    delay:2,
    duration: 2,
    x: 100,
})
let colorpickbar2 = gsap.from('.colorpickbar-rec2',{
    delay:2.5,
    duration: 2,
    x: 100,
})
let colorpickbar3 = gsap.from('.colorpickbar-rec3',{
    delay:3,
    duration: 2,
    x: 100,
})
let about_me_textbox = gsap.from('.about_me_textbox',{
    scrollTrigger:{
        trigger:".about_me_textbox",
        start:"-800px 100px",
        end:"-300px 200px",
        scrub: 3,
    },
    duration: 2,
    y: 250,
    opacity:0,
});
let roca_1 = gsap.from('#roca_1',{
    scrollTrigger:{
        trigger:"#roca_1",
        start:"-800px 100px",
        end:"top 200px",
        scrub: 3,
    },
    duration: 3,
    x: 700,
});
let proyecto_texto_1 = gsap.from('#proyecto_texto_1',{
    scrollTrigger:{
        trigger:"#proyecto_texto_1",
        start:"-400px 100px",
        end:"top 200px",
        scrub: 3,
    },
    duration: 3,
    opacity: 0,
});
let proyecto_img_1 = gsap.from('#proyecto_img_1',{
    scrollTrigger:{
        trigger:"#proyecto_img_1",
        start:"-500px 100px",
        end:"top 200px",
        scrub:3,
    },
    duration: 2,
    opacity:0,
    x: -250,
});
let proyecto_img_2 = gsap.from('#proyecto_img_2',{
    scrollTrigger:{
        trigger:"#proyecto_img_2",
        start:"-500px 100px",
        end:"top 200px",
        scrub:3,
    },
    duration: 2,
    opacity:0,
    x: 250,
});
let proyecto_texto2 = gsap.from('#proyecto_texto_2',{
    scrollTrigger:{
        trigger:"#proyecto_texto_2",
        start:"-400px 100px",
        end:"top 200px",
        scrub: 3,
    },
    duration: 3,
    opacity: 0,
});
let proyecto_img_3 = gsap.from('#proyecto_img_3',{
    scrollTrigger:{
        trigger:"#proyecto_img_3",
        start:"-500px 100px",
        end:"top 200px",
        scrub:3,
    },
    duration: 2,
    opacity:0,
    x: -250,
});
let proyecto_texto3 = gsap.from('#proyecto_texto_3',{
    scrollTrigger:{
        trigger:"#proyecto_texto_3",
        start:"-400px 100px",
        end:"top 200px",
        scrub: 3,
    },
    duration: 3,
    opacity: 0,
});
let proyecto_img_4 = gsap.from('#proyecto_img_4',{
    scrollTrigger:{
        trigger:"#proyecto_img_4",
        start:"-500px 100px",
        end:"top 200px",
        scrub:3,
    },
    duration: 2,
    opacity:0,
    x: 250,
});
let proyecto_texto4 = gsap.from('#proyecto_texto_4',{
    scrollTrigger:{
        trigger:"#proyecto_texto_4",
        start:"-400px 100px",
        end:"top 200px",
        scrub: 3,
    },
    duration: 3,
    opacity: 0,
});
let skills_category_text_1 = gsap.from('#skills_category_text_1',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: -200,
    duration:1,
    ease:"bounce",
});
let img_box_1_1 = gsap.from('#img_box_1_1',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
});
let img_box_1_2 = gsap.from('#img_box_1_2',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.3,
});
let img_box_1_3 = gsap.from('#img_box_1_3',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bouncec",
    delay:0.6,
});
let img_box_1_4 = gsap.from('#img_box_1_4',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.9,
});
let img_box_1_5 = gsap.from('#img_box_1_5',{
    scrollTrigger:{
        trigger:"#img_box_1_1",
        start:"-700px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:1.2,
});


let skills_category_text_2 = gsap.from('#skills_category_text_2',{
    scrollTrigger:{
        trigger:"#img_box_2_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: -200,
    duration:1,
    ease:"bounce",
});
let img_box_2_1 = gsap.from('#img_box_2_1',{
    scrollTrigger:{
        trigger:"#img_box_2_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
});
let img_box_2_2 = gsap.from('#img_box_2_2',{
    scrollTrigger:{
        trigger:"#img_box_2_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.3,
});
let img_box_2_3 = gsap.from('#img_box_2_3',{
    scrollTrigger:{
        trigger:"#img_box_2_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.6,
});


let skills_category_text_3 = gsap.from('#skills_category_text_3',{
    scrollTrigger:{
        trigger:"#img_box_3_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: -200,
    duration:1,
    ease:"bounce",
});
let img_box_3_1 = gsap.from('#img_box_3_1',{
    scrollTrigger:{
        trigger:"#img_box_3_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
});
let img_box_3_2 = gsap.from('#img_box_3_2',{
    scrollTrigger:{
        trigger:"#img_box_3_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.3,
});
let img_box_3_3 = gsap.from('#img_box_3_3',{
    scrollTrigger:{
        trigger:"#img_box_3_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.6,
});
let img_box_3_4 = gsap.from('#img_box_3_4',{
    scrollTrigger:{
        trigger:"#img_box_3_1",
        start:"-650px 100px",
        toggleActions:"restart play none reset",
    },
    opacity:0,
    scale:0,
    x: 200,
    duration:1,
    ease:"bounce",
    delay:0.6,
});


let knowledge_textbox1_1 = gsap.from('#knowledge_textbox1_1',{
    scrollTrigger:{
        trigger:"#knowledge_textbox1_1",
        start:"-550px 100px",
        end:"-100px 100px",
        scrub:3,
    },
    opacity:0,
    x: -400,
    duration:2,
});
let knowledge_textbox1_2 = gsap.from('#knowledge_textbox1_2',{
    scrollTrigger:{
        trigger:"#knowledge_textbox1_2",
        start:"-550px 100px",
        end:"-100px 100px",
        scrub:3,
    },
    opacity:0,
    x: 400,
    duration:2,
});
let knowledge_textbox2_1 = gsap.from('#knowledge_textbox2_1',{
    scrollTrigger:{
        trigger:"#knowledge_textbox2_1",
        start:"-1050px 100px",
        end:"-700px 100px",
        scrub:3,
    },
    opacity:0,
    y: 400,
    duration:2,
});

    

