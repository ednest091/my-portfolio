const baseURL = 'MY-PORTFOLIO.app' //demo.app original variable

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    false,
    '/gallery': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': false
}

const effects = {
    gradient: true,
    dots:     true,
    lines:    false,
}

const style = {
    theme:       'light',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'emerald',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     false
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots:     false,
        lines:    true,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };