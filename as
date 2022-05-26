<section>
  {articles.map((article) => {
    const {
      headline: { main },
      _id,
    } = article;
    return (
      <article key={_id}>
        <h2>{main}</h2>
      </article>
    );
  })}
</section>;

<article key={_id}>
        <Link to="/">Go back to the results page.</Link>
        <h1>{main}</h1>
        <h4>{pub_date}</h4>
        <h2>{lead_paragraph}</h2>
        <h4>{web_url}</h4>
      </article>