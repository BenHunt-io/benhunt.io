import React from 'react';

// React fxn component. (can use ES6 class to define component as well.)
export function GTMNoScript(props){
    // <!-- Google Tag Manager (noscript) -->
    return <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2JNSBP"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>;
    // <!-- End Google Tag Manager (noscript) -->

}

// Standard ES6 fxn (Using ES6 Export)
export function GTMScript(){
    // <!-- Google Tag Manager -->
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T2JNSBP');
    // <!-- End Google Tag Manager -->
}

