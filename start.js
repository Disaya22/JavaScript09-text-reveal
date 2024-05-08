(()=> {

    function onScroll(){
        const sectionElems = Array.from(document.querySelectorAll('section'));
        //console.log(sectionElems);

        sectionElems.forEach((sectionElem) => {
            const imgElem = sectionElem.querySelector('img');
            const textElem = sectionElem.querySelector('.text');

            const scrollPosition = window.pageYOffset;
            //const scrollPosition = window.scrollY;
            //console.log(scrollPosition);
            const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

            if( scrollPosition >= revealPosition){
                textElem.classList.add('reveal');
            }
        });
    }

    function run(){
        document.addEventListener('scroll', onScroll);
    }
    run();
})();