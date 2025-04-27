hide=()=>{
    let text = document.querySelector("#cybromText");
    let hidee = document.querySelector("#hide");
  
      if (text.style.display === 'none') {
        text.style.display = 'block';
        hidee.textContent = 'Hide';
      } else {
        text.style.display = 'none';
        hidee.textContent = 'Show';
      }
    };