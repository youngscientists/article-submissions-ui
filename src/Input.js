export default class Input {
    constructor(title, id, type, placeholder = "") {
        Object.assign(this, {
            title,
            id,
            type,
            placeholder
        })

        this.elementType = "input"
        this.complete = false
    }
}

export class Text {
    constructor(title, text) {
        Object.assign(this, { title, text })

        this.elementType = "div"
        this.complete = true
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
        this.complete = false

    }
}

export class TextArea {
    constructor(title, id, placeholder, options) {
        Object.assign(this, { title, id, placeholder, options })

        this.elementType = "textarea"
        this.complete = false

    }
}