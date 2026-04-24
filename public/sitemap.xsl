<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · Pladur Mallorca</title>
        <style>
          :root {
            --bg: #FDFCFB;
            --fg: #1F1A17;
            --muted: #737373;
            --border: #E8E4DF;
            --accent: #FF5E2B;
            --surface: #F7F3EE;
          }
          *,*::before,*::after { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 2rem 1rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            background: var(--bg);
            color: var(--fg);
            font-size: 14px;
            line-height: 1.5;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 1.5rem;
          }
          h1 {
            margin: 0 0 0.25rem;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .meta {
            color: var(--muted);
            font-size: 0.875rem;
          }
          .meta strong {
            color: var(--fg);
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            margin-top: 1rem;
          }
          th, td {
            text-align: left;
            padding: 0.625rem 0.875rem;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
          }
          th {
            background: var(--surface);
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: var(--surface); }
          td.url a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          td.url a:hover { text-decoration: underline; }
          td.num {
            color: var(--muted);
            font-variant-numeric: tabular-nums;
            font-size: 0.8125rem;
          }
          td.lang {
            font-size: 0.75rem;
          }
          td.lang span {
            display: inline-block;
            padding: 0.125rem 0.5rem;
            border-radius: 4px;
            background: var(--surface);
            color: var(--muted);
            margin-right: 0.25rem;
            font-weight: 500;
          }
          .footer {
            margin-top: 2rem;
            font-size: 0.8125rem;
            color: var(--muted);
          }
          .footer a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Sitemap · Pladur Mallorca</h1>
            <p class="meta">
              <xsl:choose>
                <xsl:when test="sm:sitemapindex">
                  <strong><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/></strong> sitemap(s) indexados ·
                </xsl:when>
                <xsl:otherwise>
                  <strong><xsl:value-of select="count(sm:urlset/sm:url)"/></strong> URLs ·
                  hreflang ES/EN declarado donde existe versión bilingüe ·
                </xsl:otherwise>
              </xsl:choose>
              <a href="/">volver al sitio</a>
            </p>
          </header>

          <xsl:choose>
            <!-- Sitemap index -->
            <xsl:when test="sm:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Sitemap</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                    <tr>
                      <td class="num"><xsl:value-of select="position()"/></td>
                      <td class="url">
                        <a href="{sm:loc}">
                          <xsl:value-of select="sm:loc"/>
                        </a>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>

            <!-- URL set -->
            <xsl:otherwise>
              <table>
                <thead>
                  <tr>
                    <th style="width:3rem">#</th>
                    <th>URL</th>
                    <th style="width:7rem">Prioridad</th>
                    <th style="width:11rem">Alternates</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sm:urlset/sm:url">
                    <tr>
                      <td class="num"><xsl:value-of select="position()"/></td>
                      <td class="url">
                        <a href="{sm:loc}">
                          <xsl:value-of select="sm:loc"/>
                        </a>
                      </td>
                      <td class="num"><xsl:value-of select="sm:priority"/></td>
                      <td class="lang">
                        <xsl:for-each select="xhtml:link">
                          <span><xsl:value-of select="@hreflang"/></span>
                        </xsl:for-each>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>

          <p class="footer">
            Formato estándar <a href="https://www.sitemaps.org/protocol.html">sitemaps.org</a> ·
            <a href="/robots.txt">robots.txt</a> ·
            <a href="/sitemap-index.xml">sitemap index</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
