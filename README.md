# NYTimes article searcher

NYTimes article searcher is an application that allows you to search for NYTimes articles.

## Features/Useage

After searching for a article, it will show you a total of 10 articles per page.
The previous button will be disabled for the first page.
"Click for Breaking News!" button will take you to the homepage, basically resetting all the search parameters and showing most recently published news.

## Libraries used

React router to navigate and carry data between pages and set search parameters.
React query for pagination.
Tailwing for styling.

## Components

ArticleLink.js is the component that maps through the data that we get from the API and puts out the search results.
ClickedArticle.js is used by the Articles.jsx to show information about the article that was clicked on.
fetchArticles.js is used for fetching data from the NYTimes API
LatestArticleButton.js resets the search parameters and shows the latest news to user.
MainFetcher.js is the main page that sets search terms, page numbers, search parameters and so on while hosting useQuery as well.
pageButtons.js are buttons that allow user to go back and forth between pages of searched articles.
searchArticle.js is the component that uses ArticleLink.js and LatestArticleButton, while handling the loading and error state.
Searchform.js is hosts the form and the button used for search.
