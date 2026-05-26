import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { getArticleBySlug } from "../../data/articles";
import { useLangPrefix } from "../../hooks/useLangPrefix";
import { useConversionTracking } from "../../hooks/useConversionTracking";

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const prefix = useLangPrefix();
  const { trackConversion } = useConversionTracking();

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container blog-not-found">
        <p>{t("blog.notFound")}</p>
        <Link to={`${prefix}/blog`} className="btn">{t("blog.backToBlog")}</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `https://www.mobile-healthcare.org${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Mobile Healthcare",
      url: "https://www.mobile-healthcare.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Mobile Healthcare",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mobile-healthcare.org/logo.avif",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mobile-healthcare.org/blog/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.mobile-healthcare.org/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mobile-healthcare.org/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://www.mobile-healthcare.org/blog/${article.slug}` },
    ],
  };

  return (
    <article className="blog-post">
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.mobile-healthcare.org/blog/${article.slug}`} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={`https://www.mobile-healthcare.org${article.image}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="blog-post__hero">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="blog-post__hero-img"
        />
      </div>

      <div className="container">
        <div className="blog-post__inner">
          <nav className="blog-post__breadcrumb" aria-label="breadcrumb">
            <Link to={`${prefix}/blog`}>{t("blog.backToBlog")}</Link>
          </nav>

          <header className="blog-post__header">
            <span className="article-card__category">{article.category}</span>
            <h1 className="blog-post__title">{article.title}</h1>
            <div className="blog-post__meta">
              <span>{t("blog.publishedOn")}</span>
              <time dateTime={article.date}>{article.dateFormatted}</time>
            </div>
          </header>

          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="blog-post__cta">
            <h2 className="secondary-heading u-margin-bottom-medium">
              {t("blog.ctaTitle")}
            </h2>
            <div className="blog-post__cta-buttons">
              <a
                className="btn blog-post__cta-btn--primary"
                href="https://wa.me/+212696964341"
                target="_blank"
                rel="noopener noreferrer"
                title="Contactez Mobile Healthcare sur WhatsApp"
                onClick={() => trackConversion("https://wa.me/+212696964341")}
              >
                {t("common.callUs")}
              </a>
              <Link
                className="btn blog-post__cta-btn--secondary"
                to={`${prefix}${article.relatedService}`}
              >
                {article.relatedServiceLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
