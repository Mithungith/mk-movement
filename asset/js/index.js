const bars = document.querySelector(".bars");
const navMobileContainer = document.querySelector(".nav-mobile-container");

bars.addEventListener("click", (e) => {
    bars.classList.toggle("active-bars");
    navMobileContainer.classList.toggle("translate-item");
});
/*===================================Button click Start==============================================*/
const whatWeDoPatentBtn = document.querySelectorAll(".whatWeDo-patent-btn");
const whatWeDoMainContent = document.querySelector(".whatWeDo-main-content");
const whatWeDoMainContentImage = document.querySelector(".whatWeDo-image");
const whatWeDoMainContentPara1 = document.querySelector(".whatWeDo-para-1");
const whatWeDoMainContentPara2 = document.querySelector(".whatWeDo-para-2");
const whatWeDoMainContentHeading = document.querySelector(".whatWeDo-main-content-heading");
const backgroundBtn1 = document.querySelector(".whatWeDo-btn-1>div");
const backgroundBtn2 = document.querySelector(".whatWeDo-btn-2>div");
const backgroundBtn3 = document.querySelector(".whatWeDo-btn-3>div");
const imgColor1 = document.querySelector(".imgColor-1 img");
const imgColor2 = document.querySelector(".imgColor-2 img");
const imgColor3 = document.querySelector(".imgColor-3 img");
const colorBorder1 = document.querySelector(".color-border-1");
const colorBorder2 = document.querySelector(".color-border-2");
const colorBorder3 = document.querySelector(".color-border-3");
/*-------------------------------------------------------------- */
const imgColorPara1 = document.querySelector(".imgColor-1 p");
const imgColorPara2 = document.querySelector(".imgColor-2 p");
const imgColorPara3 = document.querySelector(".imgColor-3 p");
/*-------------------------------------------------------------- */
const para11 = "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel massa vel lacus sollicitudin imperdiet. Integer vitae nulla sit amet erat auctor vulputate ac a odio. Mauris egestas metus ac risus maximus, a elementum quam tempus. Donec ornare ex at sapien volutpat, vitae feugiat risus tincidunt. Sed orci diam, eleifend non dictum ut, interdum nec massa. Duis accumsan dolor";
const para12 = "Nam1 et scelerisque erat. Nam ac dictum nunc. Integer mollis tellus tellus, placerat felis, faucibus pellentesque diam laoreet tempor. Vestibulum elementum eros non iaculis faucibus. Nullam elementum nisi nec diam consectetur, a lobortis justo lobortis. Nulla mollis tortor vitae suscipit consectetur. Fusce viverra mi nulla, id sagittis elit lacinia pulvinar. Aenean et elit sit amet justo mattis blandit. Vivamus et turpis molestie, sagittis tellus non, lobortis augue.";
const img1 = "asset/images/whatWeDoImgMain.jpg";
const head1 = "Lorem1 Ipsum is simply dummy text of the printing";

const para21 = "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel massa vel lacus sollicitudin imperdiet. Integer vitae nulla sit amet erat auctor vulputate ac a odio. Mauris egestas metus ac risus maximus, a elementum quam tempus. Donec ornare ex at sapien volutpat, vitae feugiat risus tincidunt. Sed orci diam, eleifend non dictum ut, interdum nec massa. Duis accumsan dolor";
const para22 = "Nam2 et scelerisque erat. Nam ac dictum nunc. Integer mollis tellus tellus, placerat felis, faucibus pellentesque diam laoreet tempor. Vestibulum elementum eros non iaculis faucibus. Nullam elementum nisi nec diam consectetur, a lobortis justo lobortis. Nulla mollis tortor vitae suscipit consectetur. Fusce viverra mi nulla, id sagittis elit lacinia pulvinar. Aenean et elit sit amet justo mattis blandit. Vivamus et turpis molestie, sagittis tellus non, lobortis augue.";
const img2 = "asset/images/s1.jpg";
const head2 = "Lorem2 Ipsum is simply dummy text of the printing";

const para31 = "Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel massa vel lacus sollicitudin imperdiet. Integer vitae nulla sit amet erat auctor vulputate ac a odio. Mauris egestas metus ac risus maximus, a elementum quam tempus. Donec ornare ex at sapien volutpat, vitae feugiat risus tincidunt. Sed orci diam, eleifend non dictum ut, interdum nec massa. Duis accumsan dolor";
const para32 = "Nam3 et scelerisque erat. Nam ac dictum nunc. Integer mollis tellus tellus, placerat felis, faucibus pellentesque diam laoreet tempor. Vestibulum elementum eros non iaculis faucibus. Nullam elementum nisi nec diam consectetur, a lobortis justo lobortis. Nulla mollis tortor vitae suscipit consectetur. Fusce viverra mi nulla, id sagittis elit lacinia pulvinar. Aenean et elit sit amet justo mattis blandit. Vivamus et turpis molestie, sagittis tellus non, lobortis augue.";
const img3 = "asset/images/s2.jpg";
const head3 = "Lorem3 Ipsum is simply dummy text of the printing";
function content(img, head, para1, para2) {
    whatWeDoMainContentHeading.innerText = head;
    whatWeDoMainContentImage.setAttribute("src", img);
    whatWeDoMainContentPara1.innerText = para1;
    whatWeDoMainContentPara2.innerText = para2;
    backgroundBtn1.classList.add("color-whatWeDo-btn");
    backgroundBtn2.classList.remove("color-whatWeDo-btn");
    backgroundBtn3.classList.remove("color-whatWeDo-btn");
    colorBorder1.style.borderColor="#6e6633";
    colorBorder2.style.borderColor="white";
    colorBorder3.style.borderColor="white";
};
content(img1, head1, para11, para12);

whatWeDoPatentBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("whatWeDo-btn-1")) {
            content("asset/images/whatWeDoImgMain.jpg", head1, para11, para12);
            backgroundBtn1.classList.add("color-whatWeDo-btn");
            backgroundBtn2.classList.remove("color-whatWeDo-btn");
            backgroundBtn3.classList.remove("color-whatWeDo-btn");
            imgColor1.style.filter =" invert(1)";
            imgColor2.style.filter ="none";
            imgColor3.style.filter ="none";
            imgColorPara1.style.color="white";
            imgColorPara2.style.color="black";
            imgColorPara3.style.color="black";
            colorBorder1.style.borderColor="#6e6633";
            colorBorder2.style.borderColor="white";
            colorBorder3.style.borderColor="white";
            console.log("BTN-1");
            // whatWeDoMainContent1.style.display="block";
            // whatWeDoMainContent2.style.display="none";
            // whatWeDoMainContent3.style.display="none";
            // whatWeDoMainContent.style.display="none";
            
        }
        else if (item.classList.contains("whatWeDo-btn-2")) {
            console.log("BTN-2");
            content("asset/images/s1.jpg", head2, para21, para22)
            backgroundBtn1.classList.remove("color-whatWeDo-btn");
            backgroundBtn2.classList.add("color-whatWeDo-btn");
            backgroundBtn3.classList.remove("color-whatWeDo-btn");
            imgColor1.style.filter ="none";
            imgColor2.style.filter ="invert(1)";
            imgColor3.style.filter ="none";
            imgColorPara1.style.color="black";
            imgColorPara2.style.color="white";
            imgColorPara3.style.color="black";
            colorBorder1.style.borderColor="white";
            colorBorder2.style.borderColor="#6e6633";
            colorBorder3.style.borderColor="white";
        }
        else if (item.classList.contains("whatWeDo-btn-3")) {
            console.log("BTN-3");
            content("asset/images/s2.jpg", head3, para31, para32);
            backgroundBtn1.classList.remove("color-whatWeDo-btn");
            backgroundBtn2.classList.remove("color-whatWeDo-btn");
            backgroundBtn3.classList.add("color-whatWeDo-btn");
            imgColor1.style.filter ="none";
            imgColor2.style.filter ="none";
            imgColor3.style.filter ="invert(1)";
            imgColorPara1.style.color="black";
            imgColorPara2.style.color="black";
            imgColorPara3.style.color="white";
            colorBorder1.style.borderColor="white";
            colorBorder2.style.borderColor="white";
            colorBorder3.style.borderColor="#6e6633";
        }
    })
})
/*===================================Button click End==============================================*/


/*==============================Owl caraousal=====================================*/
$('#blogcarousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
/*==============================Owl caraousal=====================================*/