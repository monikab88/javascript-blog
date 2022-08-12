{/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); 
*/
const titleClickHandler = function(event){
  const clickedElement = this;
  console.log('Link was clicked!');
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement (with plus): ' + clickedElement);

  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('article');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute ('href');
  console.log (articleSelector);
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector (articleSelector);
  console.log (targetArticle);

  /* add class 'active' to the correct article */
  console.log(targetArticle);

  targetArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  
  /* remove contents of titleList */
  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }
   /* for each article */
  /* get the article id */
    const articles=document.querySelectorAll(optArticleSelector+customSelector);
    let html='';
    for(const article of articles){
      const articleId=article.id;
    
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    html = html + linkHTML;
}
titleList.innerHTML = html;
}
}
generateTitleLinks();

