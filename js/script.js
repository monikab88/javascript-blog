/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); 
*/
const titleClickHandler = function (event) {
  const clickedElement = this;
  console.log('Link was clicked!');
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement (with plus): ' + clickedElement);

  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  console.log(targetArticle);

  targetArticle.classList.add('active');

};

const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
 /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* [DONE] for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  
  for (let article of articles) {

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');

    /*[DONE] find the title element and get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* [DONE] insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {

  const articles = document.querySelectorAll(optArticleSelector);

  console.log(articles);

  /* [DONE] START LOOP: for every article: */
  for (let artictle of articles) {

    /* [DONE] find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get tags from data-tags attribute */
     const articleTags = artictle.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      let linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html += linkHTML;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tags.innerHTML += html;
    //const tagList = document.querySelector(optTagsListSelector);
  }
  /* END LOOP: for every article: */
}

generateTags();

function tagClickHandler(event) {
  console.log('Tag was clicked');

  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  let activeTags = document.querySelector('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* remove class active */
    activeTag.classList.remove('active');

    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */

  let equalToHrefTags = document.querySelector('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for (let equalToHrefTag of equalToHrefTags) {
    /* add class active */
    equalToHrefTag.classList.add('active');

    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */

  let links = document.querySelectorAll('a');

  /* START LOOP: for each link */
  for(let link of links)
  {
  /* add tagClickHandler as event listener for that link */
    link.addEventListener('click',tagClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

const optArticleAuthorSelector='.post-author'
function generateAutors(){
  const allAuthors={}

  const articles=document.querySelectorAll(optArticleSelector);
  
  
  for(const article of articles){
    const authorSpace=article.querySelectorAll(optArticleAuthorSelector);
    const author=article.getAttribute('data-author');
    authorSpace.innerHTML=`<p class="post-author">by <a href="#author-${author}">${author}</a></p>`
    if(allAuthors[author]){
      allAuthors[author]++;
    }
    else{
      allAuthors[author]=1;
    }
  }

}

generateAutors();

function authorClickHandler(event){

  event.preventDefault();
  const clickedElement=this;
  const href = clickedElement.getAttribute('href');
  const author=href.replace('#author-', '');
  let activeTags=document.querySelectorAll(`a.active[href^="#author-"]`)
  for(const activeTag of activeTags){
    activeTag.classList.remove('active')
  }
  let equalToHrefAuthors = document.querySelector('a[href="' + href + '"]');
  for(let equalToHrefAuthor of equalToHrefAuthors){
    equalToHrefAuthor.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + ' "]');
}

function addClickListenersToAuthors(){
  let authors=document.querySelectorAll('#author-')
  for(const author of authors){
    author.addEventListener('click',authorClickHandler);
  }
}
addClickListenersToAuthors()