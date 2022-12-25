(async function () {
    const gallery = {
        srcRoot: "gallery_drawings/",
        titleElement: document.querySelector("#ps-gallery-title"),
        imageElement: document.querySelector("#ps-gallery-image"),
        previewElement: document.querySelector("#ps-gallery-preview"),
        listElements: [],
        currentIndex: 0,
    };
    const galleryList = [
        "2022-09-27_180143.jpg",
        "2022-10-04_163802.jpg",
        "amaterasu_head.png",
        "anais_1.png",
        "ariana_tradi_retouch.png",
        "augustin_1.png",
        "chillin_in_car.png",
        "chinese_girl_dragon.png",
        "coffee_girl_5mbend.png",
        "deesse.png",
        "econantes_vs_pollution.png",
        "falling_02.png",
        "famille_drouet_2.png",
        "flower_alpha.png",
        "girl_sit_01_1.png",
        "girl_sit_01_4.png",
        "girl_sit_01_smooth.png",
        "high_heels.png",
        "IMG_3697_2.JPG.png",
        "infog_info_1.png",
        "jinx_scene.png",
        "jin_woo_and_kamish.png",
        "jn_affiche_12_2.png",
        "jn_emote_amazed.png",
        "jn_emote_angry.png",
        "jn_emote_crying.png",
        "jn_emote_happy.png",
        "jn_space_bg.png",
        "lucille_1.png",
        "lucy_cyberpunk.png",
        "oc_bar_scene_1.png",
        "oc_boy_01.png",
        "oc_girl_01.png",
        "oni_head.png",
        "ookami_alpha.png",
        "pagoda.png",
        "portrait_01.png",
        "pulls_jn.png",
        "samdoesart_study_01.png",
        "samdoesart_study_02.png",
        "sweatdress_girl_01.png",
        "testcopyn326.png",
        "test_jinx.png",
        "torii.png",
        "valorant_char1.png",
        "venom_tradi_retouch.png",
        "woman_inthe_street.png",
        "woman_portait_blue_pink.png",
        "woman_portait_blue_pink_gs.png",
    ];
    const changeImage = (prevIndex, currentIndex) => {
        gallery.imageElement.src = gallery.srcRoot + galleryList[currentIndex];
        gallery.previewElement.src =
            gallery.srcRoot + galleryList[currentIndex];
        gallery.titleElement.innerText = galleryList[currentIndex];
        for (let i = 0; i < gallery.listElements.length; i++) {
            if (i === prevIndex)
                gallery.listElements[i].classList.remove("selected");
            if (i === currentIndex)
                gallery.listElements[i].classList.add("selected");
        }
    };
    for (let i = 0; i < galleryList.length; i++) {
        const itemBtn = document.createElement("button");
        itemBtn.classList.add("ps-gallery-element");
        itemBtn.onclick = () => {
            changeImage(gallery.currentIndex, i);
            gallery.currentIndex = i;
        };
        gallery.listElements.push(itemBtn);
        document.querySelector("#ps-gallery-list").append(itemBtn);
    }
    setInterval(() => {
        gallery.currentIndex++;
        const prevIndex = gallery.currentIndex - 1;
        if (gallery.currentIndex >= galleryList.length)
            gallery.currentIndex = 0;
        changeImage(prevIndex, gallery.currentIndex);
    }, 5000);
})();
