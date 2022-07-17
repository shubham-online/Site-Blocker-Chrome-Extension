const generateHTML = (pageName) => {
    return `<!-- ICONS CLOUDS-->
    <div class="container-cloud">
    <!-- First cloud -->
    <!-- HTML-CSS template taken from https://codepen.io/Benedikte/pen/jOmPKb -->
    <svg version="1.1" class="svg-cloud01" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
    <g>
    <path d="M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z"/>
    </g>
    <g>
    <path d="M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z"/>
    </g>
    </svg>
    <!-- Second cloud -->
    <svg version="1.1" class="svg-cloud02" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
    <g>
    <path d="M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z"/>
    </g>
    <g>
    <path d="M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z"/>
    </g>
    </svg>
    </div>  
    <div>
      <h1 class="title-class">ERROR! THIS WEBSITE IS BLOCKED!</h1>
      <h3 class="title-class">GO BACK TO STUDY.</h3>
      <hr width="150px"/>
      <h4 class="title-class">STUDYING > ${pageName}</h4>
    </div>`;
};
// #2980b9
const generateSTYLING = () => {
    return `<style>
    body{
        background-color: black !important;
      }
      /* clouds */
      .container-cloud{
          height:0;
          position: relative;
          width:100%;
          padding-top: 10%;
      }
      .svg-cloud01 {
          width:100%;
          height: 150%;
          fill: #ecf0f1;
          position: absolute;
          top:0;
          left:-100px;
          z-index:100;
          overflow-x:hidden;
      -webkit-animation:drift 25s linear infinite;
      -moz-animation: drift 25s linear infinite;
      -o-animation: drift 25s linear infinite;
      -ms-animation: drift 25s linear infinite;
      animation:drift 25s linear infinite;
      }
      .svg-cloud02 {
          width:100%;
          height:100%;
          fill:#ecf0f1;
          position:absolute;
          top:300px;
          left:-50px;
          z-index: 200;
          overflow-x: hidden;
      -webkit-animation:drift 10s linear infinite backwards;
      -moz-animation: drift 10s linear infinite backwards;
      -o-animation: drift 10s linear infinite backwards;
      -ms-animation: drift 10s linear infinite backwards;
      animation:drift 10s linear infinite backwards;
      }
      /* Animation for the drifting clouds */
      @-webkit-keyframes drift {
      0% {opacity: 1;-webkit-transform: translateX(-10px);}
      100% {opacity: 1;-webkit-transform: translateX(100%);}
      }
      @-moz-keyframes drift {
      0% {opacity: 1;-moz-transform: translateX(-10px);}
      100% {opacity: 1;-moz-transform: translateX(100%);}
      }
      @-o-keyframes drift {
      0% {opacity: 1;-o-transform: translateX(-10px);}
      100% {opacity: 1;-o-transform: translateX(100%);}
      }
      @-ms-keyframes drift {
      0% {opacity: 1;-ms-transform: translateX(-10px);}
      100% {opacity: 1;-ms-transform: translateX(100%);}
      }
      @keyframes drift {
          0% {opacity: 1;transform: translateX(-10px);}
          100% {opacity: 1;transform: translateX(100%);}
      }
      
      .title-class {
        text-align: center;
        color: white;

      }
      </style>`;
}
switch(window.location.hostname) {
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
    case "www.reddit.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("REDDIT");
        break;
    case "twitter.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
    case "discord.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("DISCORD");
        break;
}