export default defineNuxtRouteMiddleware((to, from, next) => {
    // testing Accessing the page ID, tracking location, and page name
    const pageId = to.meta.pageId
    const trackingLocation = to.meta.trackingLocation
    const pageName = to.meta.name

    // just checking
    console.log('Page ID:', to)
    console.log('Page ID:', pageId)
    console.log('Tracking Location:', trackingLocation)
    console.log('Page Name:', pageName)
})
