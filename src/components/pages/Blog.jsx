import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { articles } from "../../data/articles";
import ArticleCard from "../UI/ArticleCard";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Mobile Healthcare",
  url: "https://www.mobile-healthcare.org/blog",
  description: "Conseils de santé, guides médicaux et actualités sur les soins à domicile à Casablanca.",
  publisher: {
    "@type": "Organization",
    name: "Mobile Healthcare",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mobile-healthcare.org/logo.avif",
    },
  },
};

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="blog-page">
      <Helmet>
        <title>{t("blog.metaTitle")}</title>
        <meta name="description" content={t("blog.metaDescription")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("blog.metaTitle")} />
        <meta property="og:description" content={t("blog.metaDescription")} />
        <meta property="og:image" content="https://www.mobile-healthcare.org/logo.avif" />
        <meta name="twitter:title" content={t("blog.metaTitle")} />
        <meta name="twitter:description" content={t("blog.metaDescription")} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <div className="blog-hero">
        <h1 className="heading-primary center-text">{t("blog.h1")}</h1>
        <p className="blog-hero__subtitle center-text">{t("blog.subtitle")}</p>
      </div>

      <div className="container">
        <div className="blog-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
