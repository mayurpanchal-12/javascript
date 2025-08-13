 const mainContainer = document.getElementById('root')
   let obj = {
    type:'a',
    props:{
      href:"google.com",
      target:"_blank"
    },
    Children: "click here"
   };

function customRender(whatToRender, whereToRender){
  const domelement = document.createElement(whatToRender.type);
    domelement.innerHTML = whatToRender.Children;
    domelement.setAttribute('href',whatToRender.props.href);
    domelement.setAttribute('target', whatToRender.props.target);
   mainContainer.appendChild(domelement);
}
customRender(obj, mainContainer)