import classnames from 'classnames'

const $ = id => document.getElementById(id)

export const fn = {
    classnames,
    clear:text => {
        return text.replace(/<b>/g,'').replace(/<\/b>/g,'').replace(/<p>/g,'').replace(/<\/p>/g,'').replace(/<a>/g,'').replace(/<\/a>/g,'')
            .replace(/<ul>/g,'').replace(/<\/ul>/g,'').replace(/<ol>/g,'').replace(/<\/ol>/g,'').replace(/<li>/g,'').replace(/<\/li>/g,'')
            .replace(/<h5>/g,'').replace(/<\/h5>/g,'').replace(/<br>/g,'')
    },
    currency:amount => { 
        if (!amount || !parseFloat(amount)) return 0; const k = parseFloat(amount).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&.')
        return k.substr(0, k.length - 2)
    },
    display:(bool, obj) => { 
        if (bool) return obj
    },
    exists:(obj, obj_) => {
        return obj ? obj : obj_
    },
    image:(url, ext = 'jpg') => { 
        return `/images/${url}.${ext}` 
    },
    match:(target, value) => {
        return target && value && fn.normalize(target.toString()).includes(fn.normalize(value))
    },
    normalize:text => {
        const chars = { 'á':'a', 'é':'e', 'í':'i', 'ó':'o', 'ö':'o', 'ú':'u', 'ü':'u', 'Á':'A', 'É':'E', 'Í':'I', 'Ó':'O', 'Ö':'O', 'Ú':'U', 'Ü':'U' }
        return fn.clear(text.toString().replace(/[áéíóöúü]/ig, e => chars[e]).trim().replace(/[.-]/g, '').toLowerCase())
    },
    open:url => {
        const win = window.open(url, '_blank'); win.focus()
    },
    overflow:visibility => { 
        document.body.style.overflow = visibility
    },
    scroll:(top = 0) => {
        window.scrollTo({ top, behavior:'smooth' })
    },
    show:(bool, name) => {
        return classnames(name, { 'd-none':!bool })
    },
    _:str => str ? str : ''
}

export const io = (n, t = 'fs', c) => {
    const X = props => <i className={fn.classnames(props.io, { [c]:c })}>{props.children}</i>
    switch(t) {
        case 'gp': return <X io={`glyphicon glyphicon-${n}`}/>
        case 'io': return <X io="material-icons">{n}</X>
        case 'fb': return <X io={`fab fa-${n}`}/>
        case 'fr': return <X io={`far fa-${n}`}/>
        default: return <X io={`fas fa-${n}`}/>
    }   
}

export default $