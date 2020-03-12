document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const ul = document.getElementById("moves-container");
  // const moveBtn = document.getElementById("move-button");

  const timedMove = () => {
    if (document.querySelector('li')){
      const li = document.querySelector('li');
      move(li.innerHTML)
      li.remove();
    };
  };

  // ADD CODE HERE!
  document.addEventListener("keydown", (e) => {
    const li = document.createElement('li');
    if (e.key === "ArrowLeft"){
      li.innerHTML = "left";
    } else if (e.key === "ArrowRight"){
      li.innerHTML = "right";
    } else if (e.key === "ArrowUp"){
      li.innerHTML = "up";
    } else if (e.key === "ArrowDown"){
      li.innerHTML = "down";
    } else if (document.querySelector('li') && e.key === "Backspace"){
      const nodes = document.querySelectorAll('li');
      const byeNode = nodes[nodes.length - 1];
      return byeNode.remove();
    } else {
      return console.log("Not an option!");
    }
    ul.appendChild(li)
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "move-button"){
      setInterval(() => { timedMove(); },1000);
    };
  });


});
