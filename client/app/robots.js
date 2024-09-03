export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ['/dashboard/', '/sign-in/', '/sign-up/', '/profile/', '/privacy-policies/', '/scripts/']
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}

