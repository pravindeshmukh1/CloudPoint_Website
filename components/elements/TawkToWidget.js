import React, { useEffect } from 'react';

const TawkToWidget = () => {

  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
   

    // Add the Tawk.to widget code here
    // Replace 'YOUR_WIDGET_CODE' with your actual code
    // const Tawk_LoadStart = new Date();
    // const s1 = document.createElement('script');
    // s1.type = 'text/javascript';
    // s1.async = true;
    // s1.src = 'https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9';
    // s1.charset = 'UTF-8';
    // s1.setAttribute('crossorigin', '*');
    // const s0 = document.getElementsByTagName('script')[0];
    // s0.parentNode.insertBefore(s1, s0);
    
    Tawk_LoadStart=new Date(); 
    Tawk_API.embedded='tawk_5fc258c9920fc91564cb894d';
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);})();


    Tawk_API.onLoad = function () {
        // Initialize and use Tawk_API here
        Tawk_API.initiateChat();
      };
  }, []);


  return <div />;
};

export default TawkToWidget;
