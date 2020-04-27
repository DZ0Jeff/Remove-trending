/**
 * @author: DZ0Jeff
 */

const timer = setInterval(() => {
    const trends = document.querySelector('.css-1dbjc4n.r-1uaug3w.r-1uhd6vh.r-t23y2h.r-1phboty.r-rs99b7.r-ku1wi2.r-1udh08x')

    if(trends) {
        clearInterval(timer)
        console.log(trends)
        trends.parentNode.removeChild(trends)
    }
},1000)
