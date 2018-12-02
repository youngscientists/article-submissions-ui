export default class Input {
    constructor(title, id, type, placeholder = "") {
        Object.assign(this, {
            title,
            id,
            type,
            placeholder
        })

        this.elementType = "input"
    }
}

export class Text {
    constructor(title, text) {
        Object.assign(this, { title, text })

        this.elementType = "div"
    }
}

export class Select {
    /**
     * 
     * @param {String} title 
     * @param {Number} id 
     * @param {Array} options 
     */
    constructor(title, id, options) {
        Object.assign(this, { title, id, options })

        this.elementType = "select"
    }
}

export class TextArea {
    constructor(title, id, placeholder, options) {
        Object.assign(this, { title, id, placeholder, options })

        this.elementType = "textarea"
    }
}