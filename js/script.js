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
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags.list',
  optCloudClassCount = '5',
  optCloudClassPrefix = 'tag-size-',
  optAuthorsListSelector = '.authors.list';

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

function calculateTagsParams (tags) {
  const params = {min: '999999', max: '0'};

  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + 'times');
  
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
}
function calculateTagClass (count,params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
  return optCloudClassPrefix + classNumber;
}

function generateTags() {
/* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  console.log(articles);

  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {

    /* [DONE] find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* [DONE] split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* [DONE] START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);
      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* [DONE] add generated code to html variable */
      html = html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++; 
      }
      
      /* [DONE] END LOOP: for each tag */
    }
    /* [DONE] insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
  }
  /* [DONE] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)

  //* [DONE] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [DONE] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
  /* [DONE] generate code of a link and add it to allTagsHTML */
  allTagsHTML += '<li><a class= "'+ calculateTagClass(allTags[tag], tagsParams) +'" href="#">' + tag + '</a></li>';
  /* [DONE] END LOOP: for each tag in allTags: */
}
  /*[DONE] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
  
}

generateTags();

function tagClickHandler(event) {
  console.log('Tag was clicked');

  /* [DONE] prevent default action for this event */
  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link */
  for (let activeTagLink of activeTagLinks) {
    /* [DONE] remove class active */
    activeTagLink.classList.remove('active');
    /* [DONE] END LOOP: for each active tag link */
  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* [DONE] add class active */
    tagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* [DONE] find all links to tags */

  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* [DONE] START LOOP: for each link */
  for(let tagLink of tagLinks)
  {
  /* [DONE] add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click',tagClickHandler);

  /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAutors(){
   /* [NEW] create a new variable allAuthors with an empty array */
   let allAuthors = {};

  /* [DONE] find all articles */
  const articles=document.querySelectorAll(optArticleSelector);
  console.log (articles);

  /* [DONE] START LOOP: for every article: */
  
  for(let article of articles){

    /* [DONE] find author wrapper */
    const authorsList=article.querySelector(optArticleAuthorSelector);
    console.log (authorsList);

    /* [DONE] make html variable with empty string */
    let html =  '';
    console.log (html);
    /* [DONE] get author name from data-author attribute */
    const author=article.getAttribute('data-author');
    console.log (author);
    /* [DONE] generate HTML of the link */
    const linkHTML = '<a href="#author-' + author + '"> <span>' + author + '</span></a>';
  
    /* [DONE] add generated code to HTML variable */
  
    html= html + linkHTML;
          
    /* [DONE] insert HTML of the author */
      
    authorsList.innerHTML = html;
    /* [NEW] check if this link is NOT already in allTags */
    if(!allAuthors[author]) {
    /* [NEW] add generated code to allTags array */
    allAuthors[author] = 1;
  } else {
    allAuthors[author]++;
  }
    /* [DONE] END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const authorList = document.querySelector(optAuthorsListSelector);

  /* [NEW] create variable for all links HTML code */
  let allAuthorsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let author in allAuthors){

    /* [NEW] generate code of a link and add it to allTagsHTML */
    allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + '(' + allAuthors[author] + ')</a></li>'; 

  /* [NEW] END LOOP: for each tag in allTags: */
  }

  /*[NEW] add HTML from allTagsHTML to tagList */
  authorList.innerHTML = allAuthorsHTML;
}

generateAutors();

function authorClickHandler(event){
/* [DONE] prevent default action for this event */
  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement=this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "author" and extract author from the "href" constant */
  const author=href.replace('#author-', '');

  /* [DONE] find all author links with class active */
  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* [DONE] START LOOP: for each active author link */
  for(let activeAuthorLink of activeAuthorLinks){

    /* [DONE] remove class active */
    activeAuthorLink.classList.remove('active');

  /* [DONE] END LOOP: for each active tag link */
  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found author link */
  for(let authorLink of authorLinks){

    /* [DONE] add class active */

    authorLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + ' "]');
}

function addClickListenersToAuthors(){
  /* [DONE] find all links to tags */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');
  /* [DONE] START LOOP: for each link */
  for(let authorLink of authorLinks){    
  /* [DONE] add authorClickHandler as event listener for that link */
    authorLink.addEventListener('click',authorClickHandler);
    /* [DONE] END LOOP: for each link */

  }
}

addClickListenersToAuthors();