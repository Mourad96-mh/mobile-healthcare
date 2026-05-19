import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../../hooks/useLangPrefix";

const ArticleCard = ({ article }) => {
  const { t } = useTranslation();
  const prefix = useLangPrefix();

  return (
    <article className="article-card">
      <Link to={`${prefix}/blog/${article.slug}`} className="article-card__img-wrap">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="article-card__img"
        />
      </Link>
      <div className="article-card__body">
        <span className="article-card__category">{article.category}</span>
        <h2 className="article-card__title">
          <Link to={`${prefix}/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <div className="article-card__footer">
          <time className="article-card__date" dateTime={article.date}>
            {article.dateFormatted}
          </time>
          <Link to={`${prefix}/blog/${article.slug}`} className="article-card__read-more">
            {t("blog.readMore")}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
