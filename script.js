/**
 * @author: DZ0Jeff
 */

try {
    setTimeout(() => {
        const trends = document.querySelector('.css-1dbjc4n.r-1uaug3w.r-1uhd6vh.r-t23y2h.r-1phboty.r-rs99b7.r-ku1wi2.r-1udh08x')

        trends.parentNode.removeChild(trends)
    },3000)

} catch(err) {
    console.error(err)
}